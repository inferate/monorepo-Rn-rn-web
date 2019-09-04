import React from "react";
import { Text } from "react-native";
import { DefTextTitle, Title } from "../styled";
import { WorkoutCard } from "../styled/DefaultCard/DefaultCard";
import { RepsCounter, TopHeader } from "../styled/DefaultLayout/MainLayout";

interface IWorkoutContent {
  exercise: string;
  weightTimesReps: string;
  reps: string[];
}

export const WorkoutContent: React.FC<IWorkoutContent> = props => {
  return (
    <WorkoutCard>
      <TopHeader>
        <Title>{props.exercise}</Title>
        <Title>{props.weightTimesReps}</Title>
      </TopHeader>
      <TopHeader>
        {props.reps.map((numRep, index) => {
          switch (numRep) {
            case "x":
              numRep === "x";
              return <Text>x</Text>;
            case "empty":
              numRep.length < 0;
              return <Text></Text>;
            default:
              return (
                <RepsCounter key={index}>
                  <DefTextTitle> {numRep}</DefTextTitle>
                </RepsCounter>
              );
          }

          // return(
          //     <View key={index}>

          //     </View>
          // )
        })}
      </TopHeader>
    </WorkoutCard>
  );
};
