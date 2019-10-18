import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { RouteComponentProps } from "react-router";
import { ICurrentWorkoutDay } from "../enums/ICurrentWorkoutDay";
import { ICurrentWorkoutExercise } from "../models/ICurrentWorkoutExercise";
import { RootStoreContext } from "../stores/RootStore";
import { theme } from "../styled";
import { CustomizedButton } from "../styled/DefaultButtons/CreateWorkoutButton";
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
            <Title>Your WK History</Title>
            {/* <CustomButton
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
            /> */}
          </AppContainer>
          <FlatList
            renderItem={({ item }) => (
              <CardContent>
                {item.map(({ date, exercises }) => (
                  <HistoryCard
                    onPress={() => {
                      const dateFormat = date.split("-");
                      history.push(
                        `workout/${dateFormat[0]}/${dateFormat[1]}/${dateFormat[2]}`
                      );
                    }}
                    day={date}
                    currentExercise={exercises}
                  />
                ))}
                     
              </CardContent>
            )}
            keyExtractor={item => item.reduce((pv, cv) => pv + " " + cv, "")}
            data={historyCard}
          />
        </ScrollView>
        <View style={{ paddingTop: 42 }}>
          <CustomizedButton
            backgroundColor={theme.buttonStyles.main}
            onPress={() => {
              if (!rootStore.workoutStore.hasCurrentWorkout) {
                const {
                  currentBarbellRow,
                  currentBenchPress,
                  currentDeadLift,
                  currentSquat,
                  currentOverheadPress
                } = rootStore.workoutStore;
                const emptySets = ["", "", "", "", ""];

                if (
                  rootStore.workoutStore.lastWorkoutType ===
                  ICurrentWorkoutDay.b
                ) {
                  rootStore.workoutStore.currentExercise.push(
                    {
                      exercise: "Squat",
                      numSets: 5,
                      reps: 5,
                      sets: [...emptySets],
                      weight: currentSquat
                    },
                    {
                      exercise: "Bench Press",
                      numSets: 5,
                      reps: 5,
                      sets: [...emptySets],
                      weight: currentBenchPress
                    },
                    {
                      exercise: "DeadLift",
                      numSets: 1,
                      reps: 5,
                      sets: ["", "x", "x", "x", "x"],
                      weight: currentDeadLift
                    }
                  );

                  rootStore.workoutStore.currentSquat += 5;
                  rootStore.workoutStore.currentBenchPress += 5;
                  rootStore.workoutStore.currentDeadLift += 5;
                } else {
                  rootStore.workoutStore.currentExercise.push(
                    {
                      exercise: "Squat",
                      numSets: 5,
                      reps: 5,
                      sets: [...emptySets],
                      weight: currentSquat
                    },
                    {
                      exercise: "Overhead Press",
                      numSets: 5,
                      reps: 5,
                      sets: [...emptySets],
                      weight: currentOverheadPress
                    },
                    {
                      exercise: "Barbell Row",
                      numSets: 5,
                      reps: 5,
                      sets: [...emptySets],
                      weight: currentBarbellRow
                    }
                  );

                  rootStore.workoutStore.currentSquat += 5;
                  rootStore.workoutStore.currentOverheadPress += 5;
                  rootStore.workoutStore.currentBarbellRow += 5;
                }

                rootStore.workoutStore.lastWorkoutType =
                  rootStore.workoutStore.lastWorkoutType ===
                  ICurrentWorkoutDay.a
                    ? ICurrentWorkoutDay.b
                    : ICurrentWorkoutDay.a;
              }

              history.push("/current-workout");
            }}
          />
        </View>
      </Container>
    );
  }
);
