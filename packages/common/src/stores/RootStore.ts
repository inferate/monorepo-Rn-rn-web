import { createContext } from "react";
import { TimerStore } from "./TimerStore";
import { WorkoutStore } from "./WorkoutStore";

export class RootStore {
  workoutStore = new WorkoutStore(this);
  timerStore = new TimerStore();
}

export const RootStoreContext = createContext(new RootStore());
