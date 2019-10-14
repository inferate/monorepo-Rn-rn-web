"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var TimerStore_1 = require("./TimerStore");
var WorkoutStore_1 = require("./WorkoutStore");
var RootStore = /** @class */ (function () {
    function RootStore() {
        this.workoutStore = new WorkoutStore_1.WorkoutStore(this);
        this.timerStore = new TimerStore_1.TimerStore();
    }
    return RootStore;
}());
exports.RootStore = RootStore;
exports.RootStoreContext = react_1.createContext(new RootStore());
