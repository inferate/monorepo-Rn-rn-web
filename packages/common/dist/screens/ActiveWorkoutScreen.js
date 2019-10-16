"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dayjs_1 = __importDefault(require("dayjs"));
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importStar(require("react"));
var RootStore_1 = require("../stores/RootStore");
var styled_1 = require("../styled");
var DefaultCard_1 = require("../styled/DefaultCard/DefaultCard");
var DefaultLayoutSection_1 = require("../styled/DefaultLayout/DefaultLayoutSection");
var MainLayout_1 = require("../styled/DefaultLayout/MainLayout");
var WorkoutContent_1 = require("../WorkoutContent/WorkoutContent");
var WorkoutTimer_1 = require("../WorkoutContent/WorkoutTimer/WorkoutTimer");
exports.ActiveWorkoutScreen = mobx_react_lite_1.observer(function (_a) {
    var history = _a.history;
    var rootStore = react_1.useContext(RootStore_1.RootStoreContext);
    var timer = rootStore.timerStore;
    react_1.useEffect(function () {
        return function () {
            timer.stopTimer();
        };
    }, []);
    return (react_1.default.createElement(styled_1.Container, null,
        rootStore.workoutStore.currentExercise.map(function (el) {
            return (react_1.default.createElement(DefaultCard_1.WorkoutWrapper, null,
                react_1.default.createElement(WorkoutContent_1.WorkoutContent, { onSetPress: function (index) {
                        rootStore.timerStore.startTimer();
                        var value = el.sets[index];
                        var newValue;
                        if (value === "") {
                            newValue = "" + el.reps;
                        }
                        else if (value === "0") {
                            rootStore.timerStore.stopTimer();
                            newValue = "";
                        }
                        else {
                            newValue = "" + (parseInt(value) - 1);
                        }
                        el.sets[index] = newValue;
                    }, key: el.exercise, sets: el.sets, weightTimesReps: el.numSets + "x" + el.reps + " " + el.weight + " kgm", exercise: el.exercise })));
        }),
        react_1.default.createElement(MainLayout_1.CardActionButton, { title: "Save", onPress: function () {
                rootStore.workoutStore.history[dayjs_1.default(new Date(+new Date() - Math.floor(Math.random() * 10000000000))).format("YYYY-MMM-DD")] = rootStore.workoutStore.currentExercise;
                rootStore.workoutStore.currentExercise = [];
                history.push("/");
            } }),
        timer.isRunning ? (react_1.default.createElement(DefaultLayoutSection_1.WorkoutTimerContainer, null,
            react_1.default.createElement(WorkoutTimer_1.WorkoutTimer, { percent: rootStore.timerStore.percent, currentTime: timer.display, onButtonPress: function () { return timer.stopTimer(); } }))) : null));
});
