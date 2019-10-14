import React from "react";
import { ActiveWorkoutScreen } from "../screens/ActiveWorkoutScreen";
import { WorkoutHistoryScreen } from "../screens/WorkoutHistoryScreen";
import { Route, Router, Switch } from "./Routes/index";
interface IActiveWorkoutScreen {}

export const Navigation = (props: IActiveWorkoutScreen) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WorkoutHistoryScreen} />
        <Route exact path="/current-workout/" component={ActiveWorkoutScreen} />
      </Switch>
    </Router>
  );
};
