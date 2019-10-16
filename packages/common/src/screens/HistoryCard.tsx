import React from "react";
import { Text } from "react-native";
import { exerciseName } from "../enums/ICurrentWorkoutDay";
import { ICurrentWorkoutExercise } from "../models/ICurrentWorkoutExercise";
import { WorkoutInformationCard } from "../styled/DefaultCard/DefaultCard";

interface IHistoryCard {
  day: string;
  currentExercise: ICurrentWorkoutExercise[];
}

export const HistoryCard: React.FC<IHistoryCard> = ({
  day,
  currentExercise
}) => {
  return (
    <WorkoutInformationCard>
      <Text>{day}</Text>
      {currentExercise.map(name => {
        return (
          <Text key={name.exercise}>
            {`${exerciseName[name.exercise as keyof typeof exerciseName]}: ${
              name.numSets
            }X${name.reps} ${name.weight}
          `}
          </Text>
        );
      })}
    </WorkoutInformationCard>
  );
};
