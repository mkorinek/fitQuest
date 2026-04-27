import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export function useWorkoutHistory() {
  return useQuery({
    queryKey: ['workouts'],
    queryFn: () => fetchWorkoutsFromFirebase(),
  });
}

export function useLogWorkout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (workout: NewWorkout) => saveWorkoutToFirebase(workout),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workouts'] });
    },
  });
}
