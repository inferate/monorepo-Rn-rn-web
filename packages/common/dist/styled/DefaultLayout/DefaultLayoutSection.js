"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var styled_components_1 = __importDefault(require("styled-components"));
exports.WorkoutTimerWrapper = styled_components_1.default(react_native_1.View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  align-items:center;\n  padding:30px\n  padding-horizontal:30px\n  justify-content: space-between;\n  flex-direction: row;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  background-color: ", ";\n"], ["\n  position: absolute;\n  bottom: 0;\n  align-items:center;\n  padding:30px\n  padding-horizontal:30px\n  justify-content: space-between;\n  flex-direction: row;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  background-color: ", ";\n"])), function (props) { return props.theme.backgroundStyle.secondary; });
exports.WorkoutTimerContainer = styled_components_1.default(react_native_1.View)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  padding: 20px;\n"], ["\n  width: 100%;\n  padding: 20px;\n"])));
exports.TimerBox = styled_components_1.default(react_native_1.TouchableOpacity)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (props) { return props.theme.secondary; });
exports.TimerText = styled_components_1.default(react_native_1.Text)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    color:", "\n    font-size:20px;\n"], ["\n    color:", "\n    font-size:20px;\n"])), function (props) { return props.theme.secondary; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
