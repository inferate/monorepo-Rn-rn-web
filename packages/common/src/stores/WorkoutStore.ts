import { observable } from "mobx";
import { ICurrentWorkoutDay } from "../enums/ICurrentWorkoutDay";
import { IWorkoutStoreHistory } from "../models/IWorkoutStore";
import { ICurrentWorkoutExercise } from "./../models/ICurrentWorkoutExercise";
import { RootStore } from "./RootStore";

export class WorkoutStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable currentSquats: number;
  @observable currentBenchPress: number;
  @observable currentOverheadPress: number;
  @observable currentLifts: number;
  @observable currentJumps: number;
  @observable currentWorkoutDay: ICurrentWorkoutDay;
  @observable workoutHistory: IWorkoutStoreHistory;

  @observable currentExercise: ICurrentWorkoutExercise[] = [];
}
