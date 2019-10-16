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
exports.WorkoutCard = styled_components_1.default(react_native_1.View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: 3px;\n  box-shadow: 10px 5px 5px #000;\n  padding: 10px;\n  elevation: 4px;\n  background-color: ", ";\n  flex-direction: column;\n  margin-bottom: 10px;\n"], ["\n  border-radius: 3px;\n  box-shadow: 10px 5px 5px #000;\n  padding: 10px;\n  elevation: 4px;\n  background-color: ", ";\n  flex-direction: column;\n  margin-bottom: 10px;\n"])), function (props) { return props.theme.primary; });
exports.WorkoutWrapper = styled_components_1.default(react_native_1.View)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  width: 100%;\n"], ["\n  background-color: ", ";\n  width: 100%;\n"])), function (props) { return props.theme.primaryBackground; });
exports.CardContent = styled_components_1.default(react_native_1.View)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex-direction: row;\n  width: 100%;\n"], ["\n  flex-direction: row;\n  width: 100%;\n"])));
exports.WorkoutInformationCard = styled_components_1.default(react_native_1.View)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border-radius: 3px;\n  box-shadow: 10px 5px 5px #000;\n  padding: 5px;\n  background-color: ", ";\n  flex-direction: column;\n  margin 9px;\n"], ["\n  border-radius: 3px;\n  box-shadow: 10px 5px 5px #000;\n  padding: 5px;\n  background-color: ", ";\n  flex-direction: column;\n  margin 9px;\n"])), function (props) { return props.theme.primary; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
