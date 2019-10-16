"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var RootStore_1 = require("../stores/RootStore");
var styled_1 = require("../styled");
var DefaultButton_1 = require("../styled/DefaultButton/DefaultButton");
var DefaultCard_1 = require("../styled/DefaultCard/DefaultCard");
var DefaultLayoutTitle_1 = require("../styled/DefaultLayout/DefaultLayoutTitle");
var HistoryCard_1 = require("./HistoryCard");
exports.WorkoutHistoryScreen = mobx_react_lite_1.observer(function (_a) {
    var history = _a.history;
    var rootStore = react_1.useContext(RootStore_1.RootStoreContext);
    var historyCard = [];
    Object.entries(rootStore.workoutStore.history).forEach(function (_a, i) {
        var date = _a[0], exercises = _a[1];
        if (i % 4 === 0) {
            historyCard.push([{ date: date, exercises: exercises }]);
        }
        else {
            historyCard[historyCard.length - 1].push({ date: date, exercises: exercises });
        }
    });
    return (react_1.default.createElement(DefaultLayoutTitle_1.Container, null,
        react_1.default.createElement(react_native_1.ScrollView, null,
            react_1.default.createElement(DefaultLayoutTitle_1.AppContainer, null,
                react_1.default.createElement(DefaultLayoutTitle_1.Title, null, "This is your WK History"),
                react_1.default.createElement(DefaultButton_1.CustomButton, { backgroundColor: styled_1.theme.buttonStyles.main, color: styled_1.theme.textStyle.primary, title: "WK", onPress: function () {
                        rootStore.workoutStore.currentExercise.push({
                            exercise: "Squat",
                            numSets: 5,
                            sets: ["", "5", "5", "", ""],
                            weight: 180,
                            reps: 5
                        }, {
                            exercise: "Bench Press",
                            numSets: 5,
                            sets: ["5", "5", "5", "5", "5"],
                            weight: 220,
                            reps: 5
                        }, {
                            exercise: "DeadLift",
                            numSets: 3,
                            sets: ["x", "5", "x", "x", "x"],
                            weight: 280,
                            reps: 3
                        });
                        history.push("/current-workout");
                    } })),
            react_1.default.createElement(react_native_1.FlatList, { renderItem: function (_a) {
                    var item = _a.item;
                    return (react_1.default.createElement(DefaultCard_1.CardContent, null, item.map(function (_a) {
                        var date = _a.date, exercises = _a.exercises;
                        return (react_1.default.createElement(HistoryCard_1.HistoryCard, { day: date, currentExercise: exercises }));
                    })));
                }, keyExtractor: function (item) { return item.reduce(function (pv, cv) { return pv + " " + cv; }, ""); }, data: historyCard }))));
});
