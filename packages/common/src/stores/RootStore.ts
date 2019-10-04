import { createContext } from "react";
import { NavigationStore } from "./NavigationStore";
import { TimerStore } from "./TimerStore";
import { WorkoutStore } from "./WorkoutStore";

export class RootStore {
  navigationStore = new NavigationStore(this);
  workoutStore = new WorkoutStore(this);
  timerStore = new TimerStore();
}

export const RootStoreContext = createContext(new RootStore());
