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
exports.Container = styled_components_1.default(react_native_1.View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 1;\n  background-color: ", ";\n  justify-content: center;\n  align-items: center;\n"], ["\n  flex: 1;\n  background-color: ", ";\n  justify-content: center;\n  align-items: center;\n"])), function (props) { return props.theme.backgroundStyle.primary; });
exports.Title = styled_components_1.default(react_native_1.Text)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 24px;\n  font-weight: 500;\n  color: ", ";\n"], ["\n  font-size: 24px;\n  font-weight: 500;\n  color: ", ";\n"])), function (props) { return props.theme.backgroundStyle.secondary; });
var templateObject_1, templateObject_2;
