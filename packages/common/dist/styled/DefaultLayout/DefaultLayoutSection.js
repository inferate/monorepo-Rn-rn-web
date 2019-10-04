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
// export const WorkoutTimerWrapper = styled(View)`
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 50px;
// `;
exports.WorkoutTimerContainer = styled_components_1.default(react_native_1.View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  padding: 10px;\n  background-color: ", ";\n"], ["\n  width: 100%;\n  padding: 10px;\n  background-color: ", ";\n"])), function (props) { return props.theme.backgroundStyle.secondary; });
exports.TimerBox = styled_components_1.default(react_native_1.TouchableOpacity)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (props) { return props.theme.secondary; });
exports.TimerText = styled_components_1.default(react_native_1.Text)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 20px;\n"], ["\n  font-size: 20px;\n"])));
exports.ProgressBar = styled_components_1.default(react_native_1.View)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n \n  height: 3px;\n  bottom: 20px;\n\n  right: 20px;\n\n  background-color: black;\n"], ["\n \n  height: 3px;\n  bottom: 20px;\n\n  right: 20px;\n\n  background-color: black;\n"])));
exports.TimeWrapper = styled_components_1.default(react_native_1.View)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n"], ["\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
