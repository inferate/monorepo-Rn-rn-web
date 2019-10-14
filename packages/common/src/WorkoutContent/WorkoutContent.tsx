import { observer } from "mobx-react-lite";
import React from "react";
import { Text } from "react-native";
import { DefTextTitle, Title } from "../styled";
import { WorkoutCard } from "../styled/DefaultCard/DefaultCard";
import {
  EmptyReps,
  EmptyRepsCounter,
  RepsCounter,
  TopHeader
} from "../styled/DefaultLayout/MainLayout";

interface IWorkoutContent {
  exercise: string;
  weightTimesReps: string;
  onSetPress: (index: number) => void;
  sets: string[];
  
}

export const WorkoutContent: React.FC<IWorkoutContent> = observer(props => {
  return (
    <WorkoutCard>
      <TopHeader>
        <Title>{props.exercise}</Title>
        <Title>{props.weightTimesReps}</Title>
      </TopHeader>
      <TopHeader>
        {props.sets.map((numRep, index) => {
          switch (numRep) {
            case "x":
              numRep === "x";
              return (
                <EmptyRepsCounter key={numRep + index}>
                  <Text>X</Text>
                </EmptyRepsCounter>
              );
            case "":
              numRep.length < 0;
              return (
                <EmptyReps
                  key={numRep + index}
                  onPress={() => props.onSetPress(index)}></EmptyReps>
              );
            default:
              return (
                <RepsCounter
                  onPress={() => props.onSetPress(index)}
                  key={numRep + index}>
                  <DefTextTitle> {numRep}</DefTextTitle>
                </RepsCounter>
              );
          }
        })}
      </TopHeader>
    </WorkoutCard>
  );
});
