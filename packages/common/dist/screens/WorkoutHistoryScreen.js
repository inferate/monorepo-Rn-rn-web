"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importDefault(require("react"));
var NavigationStore_1 = require("../stores/NavigationStore");
var styled_1 = require("../styled");
var DefaultButton_1 = require("../styled/DefaultButton/DefaultButton");
var DefaultLayoutTitle_1 = require("../styled/DefaultLayout/DefaultLayoutTitle");
exports.WorkoutHistoryScreen = mobx_react_lite_1.observer(function () {
    var navigationStore = react_1.default.useContext(NavigationStore_1.NavigationStoreContext);
    return (react_1.default.createElement(DefaultLayoutTitle_1.Container, null,
        react_1.default.createElement(DefaultLayoutTitle_1.Title, null, "This is your WK History"),
        react_1.default.createElement(DefaultButton_1.CustomButton, { backgroundColor: styled_1.theme.buttonStyles.main, color: styled_1.theme.textStyle.thirdy, title: "WK" })));
});
