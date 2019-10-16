import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { FlatList, ScrollView } from "react-native";
import { RouteComponentProps } from "react-router";
import { ICurrentWorkoutExercise } from "../models/ICurrentWorkoutExercise";
import { RootStoreContext } from "../stores/RootStore";
import { theme } from "../styled";
import { CustomButton } from "../styled/DefaultButton/DefaultButton";
import { CardContent } from "../styled/DefaultCard/DefaultCard";
import {
  AppContainer,
  Container,
  Title
} from "../styled/DefaultLayout/DefaultLayoutTitle";
import { HistoryCard } from "./HistoryCard";

interface IWokroutHistory extends RouteComponentProps {}

export const WorkoutHistoryScreen: React.FC<IWokroutHistory> = observer(
  ({ history }) => {
    const rootStore = useContext(RootStoreContext);
    const historyCard: Array<
      Array<{
        date: string;
        exercises: ICurrentWorkoutExercise[];
      }>
    > = [];
    Object.entries(rootStore.workoutStore.history).forEach(
      ([date, exercises], i) => {
        if (i % 4 === 0) {
          historyCard.push([{ date, exercises }]);
        } else {
          historyCard[historyCard.length - 1].push({ date, exercises });
        }
      }
    );
    return (
      <Container>
        <ScrollView>
          <AppContainer>
            <Title>This is your WK History</Title>
            <CustomButton
              backgroundColor={theme.buttonStyles.main}
              color={theme.textStyle.primary}
              title={"WK"}
              onPress={() => {
                rootStore.workoutStore.currentExercise.push(
                  {
                    exercise: "Squat",
                    numSets: 5,
                    sets: ["", "5", "5", "", ""],
                    weight: 180,
                    reps: 5
                  },
                  {
                    exercise: "Bench Press",
                    numSets: 5,
                    sets: ["5", "5", "5", "5", "5"],
                    weight: 220,
                    reps: 5
                  },
                  {
                    exercise: "DeadLift",
                    numSets: 3,
                    sets: ["x", "5", "x", "x", "x"],
                    weight: 280,
                    reps: 3
                  }
                );
                history.push("/current-workout");
              }}
            />
          </AppContainer>
          <FlatList
            renderItem={({ item }) => (
              <CardContent>
                {item.map(({ date, exercises }) => (
                  <HistoryCard day={date} currentExercise={exercises} />
                ))}
                     
              </CardContent>
            )}
            keyExtractor={item => item.reduce((pv, cv) => pv + " " + cv, "")}
            data={historyCard}
          />
        </ScrollView>
      </Container>
    );
  }
);
