import { create } from "mobx-persist";
import { createContext } from "react";
import { AsyncStorage } from "react-native";
import { TimerStore } from "./TimerStore";
import { WorkoutStore } from "./WorkoutStore";

/*to do > create an isntance of the store and use mobx persist -their hydrate func */

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true
});

export class RootStore {
  workoutStore = new WorkoutStore(this);
  timerStore = new TimerStore();

  constructor() {
    hydrate("workoutTimer", this.timerStore).then(() => {
      if (this.timerStore.isRunning) {
        this.timerStore.watcher();
      }
    });
    hydrate("acutalWorkout", this.workoutStore);
  }
}

export const RootStoreContext = createContext(new RootStore());
