import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 2,
    },
  },
});

export function QueryProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

// hooks/useWorkouts.ts

export function useWorkoutHistory() {
  return useQuery({
    queryKey: ['workouts'],
    queryFn: () => fetchWorkoutsFromSupabase(),
  });
}

export function useLogWorkout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (workout: NewWorkout) => saveWorkoutToSupabase(workout),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workouts'] });
    },
  });
}
