import { observable } from "mobx";
import { persist } from "mobx-persist";
import { ICurrentWorkoutDay } from "../enums/ICurrentWorkoutDay";
import { IWorkoutStoreHistory } from "../models/IWorkoutStoreHistory";
import { ICurrentWorkoutExercise } from "./../models/ICurrentWorkoutExercise";
import { RootStore } from "./RootStore";

export class WorkoutStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @persist @observable currentSquats: number;
  @persist @observable currentBenchPress: number;
  @persist @observable currentOverheadPress: number;
  @persist @observable currentLifts: number;
  @persist @observable currentJumps: number;
  @persist @observable currentWorkoutDay: ICurrentWorkoutDay;
  @persist("object") @observable history: IWorkoutStoreHistory = {};

  @persist("list") @observable currentExercise: ICurrentWorkoutExercise[] = [];
}
