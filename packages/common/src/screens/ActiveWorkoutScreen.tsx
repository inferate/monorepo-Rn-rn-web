import React from "react";
import { Text, View } from "react-native";

interface IActiveWorkoutScreen {}
export const ActiveWorkoutScreen: React.FC<IActiveWorkoutScreen> = () => {
  return (
    <View>
      <Text>This is your current WK </Text>
    </View>
  );
};
