import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ActiveWorkoutScreen } from "../screens/ActiveWorkoutScreen";
import { WorkoutHistoryScreen } from "../screens/WorkoutHistoryScreen";
import { NavigationStoreContext } from "../stores/NavigationStore";

export const Navigation = observer(() => {
  const navigationStore = useContext(NavigationStoreContext);
  return navigationStore.path === "Dashboard/Home" ? (
    <WorkoutHistoryScreen />
  ) : (
    <ActiveWorkoutScreen />
  );
});
