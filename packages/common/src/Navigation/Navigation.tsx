import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ActiveWorkoutScreen } from "../screens/ActiveWorkoutScreen";
import { WorkoutHistoryScreen } from "../screens/WorkoutHistoryScreen";
import { Navigation2, NavigationStoreContext } from "../stores/NavigationStore";

export const Navigation = observer(() => {
  const navigationStore = useContext(NavigationStoreContext);
  return navigationStore.path === Navigation2.Home ? (
    <WorkoutHistoryScreen />
  ) : (
    <ActiveWorkoutScreen />
  );
});
