import dayjs from "dayjs";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { RootStoreContext } from "../stores/RootStore";
import { Container } from "../styled";
import { WorkoutWrapper } from "../styled/DefaultCard/DefaultCard";
import { WorkoutTimerContainer } from "../styled/DefaultLayout/DefaultLayoutSection";
import { CardActionButton } from "../styled/DefaultLayout/MainLayout";
import { WorkoutContent } from "../WorkoutContent/WorkoutContent";
import { WorkoutTimer } from "../WorkoutContent/WorkoutTimer/WorkoutTimer";

interface IActiveWorkoutScreen
  extends RouteComponentProps<{
    year?: string;
    day?: string;
    month?: string;
  }> {}

export const ActiveWorkoutScreen: React.FC<IActiveWorkoutScreen> = observer(
  ({
    history,
    match: {
      params: { day, month, year }
    }
  }) => {
    const rootStore = useContext(RootStoreContext);
    const timer = rootStore.timerStore;
    useEffect(() => {
      return () => {
        timer.stopTimer();
      };
    }, []);
    const renderActiveWorkout = !year && !month && !day;
    const renderDateWorkout = `${year}-${month}-${day}`;
    return (
      <Container>
        {(renderActiveWorkout
          ? rootStore.workoutStore.currentExercise
          : rootStore.workoutStore.history[renderDateWorkout]
        ).map(el => {
          return (
            <WorkoutWrapper>
              <WorkoutContent
                onSetPress={index => {
                  rootStore.timerStore.startTimer();
                  const value = el.sets[index];
                  let newValue: string;
                  if (value === "") {
                    newValue = `${el.reps}`;
                  } else if (value === "0") {
                    rootStore.timerStore.stopTimer();
                    newValue = "";
                  } else {
                    newValue = `${parseInt(value) - 1}`;
                  }
                  el.sets[index] = newValue;
                }}
                key={el.exercise}
                sets={el.sets}
                weightTimesReps={`${el.numSets}x${el.reps} ${el.weight} kgm`}
                exercise={el.exercise}
              />
            </WorkoutWrapper>
          );
        })}
        <CardActionButton
          title="Save"
          onPress={() => {
            if (renderActiveWorkout) {
              rootStore.workoutStore.history[
                dayjs(
                  new Date(
                    +new Date() - Math.floor(Math.random() * 10000000000)
                  )
                ).format("YYYY-MMM-DD")
              ] = rootStore.workoutStore.currentExercise;
              rootStore.workoutStore.currentExercise = [];
            }
            history.push("/");
          }}
        />
        {timer.isRunning ? (
          <WorkoutTimerContainer>
            <WorkoutTimer
              percent={rootStore.timerStore.percent}
              currentTime={timer.display}
              onButtonPress={() => timer.stopTimer()}
            />
          </WorkoutTimerContainer>
        ) : null}
      </Container>
    );
  }
);
