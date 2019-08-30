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
var ActiveWorkoutScreen_1 = require("../screens/ActiveWorkoutScreen");
var WorkoutHistoryScreen_1 = require("../screens/WorkoutHistoryScreen");
var NavigationStore_1 = require("../stores/NavigationStore");
exports.Navigation = mobx_react_lite_1.observer(function () {
    var navigationStore = react_1.useContext(NavigationStore_1.NavigationStoreContext);
    return navigationStore.path === NavigationStore_1.Navigation2.Home ? (react_1.default.createElement(WorkoutHistoryScreen_1.WorkoutHistoryScreen, null)) : (react_1.default.createElement(ActiveWorkoutScreen_1.ActiveWorkoutScreen, null));
});
