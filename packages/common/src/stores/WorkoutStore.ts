import { computed, observable } from "mobx";
import { persist } from "mobx-persist";
import { IWorkoutStoreHistory } from "../models/IWorkoutStoreHistory";
import { ICurrentWorkoutExercise } from "./../models/ICurrentWorkoutExercise";
import { RootStore } from "./RootStore";
type WorkoutDay = "a" | "b";

export class WorkoutStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @persist @observable currentSquat: number = 45;
  @persist @observable currentBenchPress: number = 55;
  @persist @observable currentOverheadPress: number = 33;
  @persist @observable currentDeadLift: number = 65;
  @persist @observable currentBarbellRow: number = 65;
  @persist @observable currentLifts: number = 65;
  @persist @observable currentJumps: number = 65;
  @persist @observable lastWorkoutType: WorkoutDay = "a";

  @persist("object") @observable history: IWorkoutStoreHistory = {};
  @computed get hasCurrentWorkout() {
    return !!this.currentExercise.length;
  }

  @persist("list") @observable currentExercise: ICurrentWorkoutExercise[] = [];
}
