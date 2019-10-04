import dayjs from "dayjs";
import { action, computed, observable } from "mobx";

const passZero = (n: number) => {
  if (n >= 10) {
    return n;
  }
  return `0${n}`;
};

export class TimerStore {
  @observable startTime = dayjs();
  @observable isRunning = false;
  @observable seconds = 0;

  @action watcher() {
    if (!this.isRunning) return;
    this.seconds = dayjs().diff(this.startTime, "second");
    setTimeout(() => this.watcher(), 1000);
  }

  @action startTimer() {
    return (this.isRunning = true), (this.startTime = dayjs()), this.watcher();
  }
  @action stopTimer() {
    this.isRunning = false;
    this.seconds = 0;
  }

  @computed get percent() {
    return `${Math.min(100, (this.seconds / 180) * 100)}%`;
  }
  @computed get display() {
    const minutes = Math.floor(this.seconds / 60);
    const seconds = this.seconds % 60;
    return `${passZero(minutes)}:${passZero(seconds)}`;
  }
}
