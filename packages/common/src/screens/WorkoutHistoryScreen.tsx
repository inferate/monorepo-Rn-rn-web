import React from "react";
import { Text, View } from "react-native";

interface IWokroutHistory {}

export const WorkoutHistoryScreen: React.FC<IWokroutHistory> = () => {
  return (
    <View>
      <Text>This is your WK History</Text>
    </View>
  );
};
