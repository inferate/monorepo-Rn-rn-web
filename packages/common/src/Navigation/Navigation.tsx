import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ActiveWorkoutScreen } from "../screens/ActiveWorkoutScreen";
import { WorkoutHistoryScreen } from "../screens/WorkoutHistoryScreen";
import { Navigation2 } from "../stores/NavigationStore";
import { RootStoreContext } from "../stores/RootStore";
interface IActiveWorkoutScreen {}

export const Navigation = observer((props: IActiveWorkoutScreen) => {
  const rootStore = useContext(RootStoreContext);
  return rootStore.navigationStore.path === Navigation2.Home ? (
    <WorkoutHistoryScreen />
  ) : (
    <ActiveWorkoutScreen> </ActiveWorkoutScreen>
  );
});
