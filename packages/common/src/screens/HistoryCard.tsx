import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { exerciseName } from "../enums/ICurrentWorkoutDay";
import { ICurrentWorkoutExercise } from "../models/ICurrentWorkoutExercise";
import { WorkoutInformationCard } from "../styled/DefaultCard/DefaultCard";

interface IHistoryCard {
  day: string;
  currentExercise: ICurrentWorkoutExercise[];
  onPress?: () => void;
}

export const HistoryCard: React.FC<IHistoryCard> = ({
  day,
  currentExercise,
  onPress
}) => {
  return (
    <WorkoutInformationCard>
      <TouchableOpacity onPress={onPress}>
        <Text>{day}</Text>
        <React.Fragment>
          {currentExercise.map(name => {
            return (
              <Text key={name.exercise}>
                {`${
                  exerciseName[name.exercise as keyof typeof exerciseName]
                }: ${name.numSets}X${name.reps} ${name.weight} KGM
          `}
              </Text>
            );
          })}
        </React.Fragment>
      </TouchableOpacity>
    </WorkoutInformationCard>
  );
};
