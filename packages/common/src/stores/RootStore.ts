import { createContext } from "react";
import { NavigationStore } from "./NavigationStore";
import { WorkoutStore } from "./WorkoutStore";

export class RootStore {
  navigationStore = new NavigationStore(this);
  workoutStore = new WorkoutStore(this);
}

export const RootStoreContext = createContext(new RootStore());
