import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Quest } from '../../data/quests';

type QuestItemProps = Quest & {
  className?: string;
};

export class QuestItem extends Component<QuestItemProps> {
  render() {
    const { id, name, description, status, className = '' } = this.props;
    return (
      <View id={`quest-${id}`} className={`p-4 ${className}`}>
        <Text className="text-xl font-bold text-text-primary">{name}</Text>
        <View className="flex-row justify-between">
          <Text className="text-text-secondary">{description}</Text>
          <Text className="text-text-secondary">{status}</Text>
        </View>
      </View>
    );
  }
}

export default QuestItem;
