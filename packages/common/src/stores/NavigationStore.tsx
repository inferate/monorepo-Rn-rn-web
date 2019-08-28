import { observable } from "mobx";
import { createContext } from "react";

type Navigation = "Dashboard/Home";

class NavigationStore {
  @observable path: Navigation = "Dashboard/Home";
}

export const NavigationStoreContext = createContext(new NavigationStore());
