"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_persist_1 = require("mobx-persist");
var react_1 = require("react");
var react_native_1 = require("react-native");
var TimerStore_1 = require("./TimerStore");
var WorkoutStore_1 = require("./WorkoutStore");
/*to do > create an isntance of the store and use mobx persist -their hydrate func */
var hydrate = mobx_persist_1.create({
    storage: react_native_1.AsyncStorage,
    jsonify: true
});
var RootStore = /** @class */ (function () {
    function RootStore() {
        var _this = this;
        this.workoutStore = new WorkoutStore_1.WorkoutStore(this);
        this.timerStore = new TimerStore_1.TimerStore();
        hydrate("workoutTimer", this.timerStore).then(function () {
            if (_this.timerStore.isRunning) {
                _this.timerStore.watcher();
            }
        });
        hydrate("acutalWorkout", this.workoutStore);
    }
    return RootStore;
}());
exports.RootStore = RootStore;
exports.RootStoreContext = react_1.createContext(new RootStore());
