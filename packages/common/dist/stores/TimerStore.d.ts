import dayjs from "dayjs";
export declare class TimerStore {
    startTime: dayjs.Dayjs;
    isRunning: boolean;
    seconds: number;
    watcher(): void;
    startTimer(): void;
    stopTimer(): void;
    readonly percent: string;
    readonly display: string;
}
