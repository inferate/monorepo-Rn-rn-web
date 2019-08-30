import { observable } from "mobx";
import { createContext } from "react";

type Navigation = "Dashboard/Home" | "ActiveWorkoutScreen";

export enum Navigation2 {
  Home = "Home",
  ActiveWorkoutScreen = "ActiveWorkoutScreen"
}
class NavigationStore {
  @observable path: Navigation2 = Navigation2.Home;
}

export const NavigationStoreContext = createContext(new NavigationStore());
