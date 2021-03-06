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
exports.TopHeader = styled_components_1.default(react_native_1.View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nflex-direction:row\njustify-content:space-between;\npadding:5px;\n"], ["\nflex-direction:row\njustify-content:space-between;\npadding:5px;\n"])));
exports.RepsCounter = styled_components_1.default(react_native_1.TouchableOpacity)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-radius: 100%;\n  padding: 20px;\n  margin: auto;\n  background-color: ", ";\n"], ["\n  border-radius: 100%;\n  padding: 20px;\n  margin: auto;\n  background-color: ", ";\n"])), function (props) { return props.theme.backgroundStyle.secondary; });
exports.EmptyRepsCounter = styled_components_1.default(react_native_1.TouchableOpacity)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border-radius: 100%;\n  padding: 23px;\n  padding-left: 25px;\n  padding-right: 25px;\n  margin: auto;\n  background-color: ", ";\n"], ["\n  border-radius: 100%;\n  padding: 23px;\n  padding-left: 25px;\n  padding-right: 25px;\n  margin: auto;\n  background-color: ", ";\n"])), function (props) { return props.theme.textStyle.empty; });
exports.EmptyReps = styled_components_1.default(react_native_1.TouchableOpacity)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border-radius: 100%;\n  padding: 30px;\n  margin: auto;\n  background-color: ", ";\n"], ["\n  border-radius: 100%;\n  padding: 30px;\n  margin: auto;\n  background-color: ", ";\n"])), function (props) { return props.theme.textStyle.empty; });
exports.CardActionButton = styled_components_1.default(react_native_1.Button)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: ", ";\n"], ["\n  background-color: ", ";\n"])), function (props) { return props.theme.textStyle.empty; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
