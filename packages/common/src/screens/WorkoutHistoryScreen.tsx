import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Navigation2 } from "../stores/NavigationStore";
import { RootStoreContext } from "../stores/RootStore";
import { theme } from "../styled";
import { CustomButton } from "../styled/DefaultButton/DefaultButton";
import { Container, Title } from "../styled/DefaultLayout/DefaultLayoutTitle";

interface IWokroutHistory {}

export const WorkoutHistoryScreen: React.FC<IWokroutHistory> = observer(() => {
  const rootStore = useContext(RootStoreContext);
  return (
    <Container>
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
              sets: ["x", "x", "x", "x", "x"],
              weight: 280,
              reps: 3
            }
          );
          rootStore.navigationStore.path = Navigation2.ActiveWorkoutScreen;
        }}
      />
    </Container>
  );
});
