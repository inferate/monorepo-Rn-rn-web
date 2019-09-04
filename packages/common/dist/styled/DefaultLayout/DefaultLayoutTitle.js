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
exports.Container = styled_components_1.default(react_native_1.View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 1;\n  width: 100%;\n  margin: 20px;\n  background-color: ", ";\n  justify-content: center;\n  align-items: center;\n"], ["\n  flex: 1;\n  width: 100%;\n  margin: 20px;\n  background-color: ", ";\n  justify-content: center;\n  align-items: center;\n"])), function (props) { return props.theme.backgroundStyle.primary; });
exports.Title = styled_components_1.default(react_native_1.Text)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 16px;\n  font-weight: 500;\n  color: ", ";\n"], ["\n  font-size: 16px;\n  font-weight: 500;\n  color: ", ";\n"])), function (props) { return props.theme.backgroundStyle.secondary; });
exports.DefTextTitle = styled_components_1.default(react_native_1.Text)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 16px;\n  font-weight: 500;\n  text-align: center;\n  padding-right: 4px;\n  color: ", ";\n"], ["\n  font-size: 16px;\n  font-weight: 500;\n  text-align: center;\n  padding-right: 4px;\n  color: ", ";\n"])), function (props) { return props.theme.textStyle.primary; });
exports.AppWrapper = styled_components_1.default(react_native_1.View)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n \n flex:1;\n  width:100%\n  max-width:450px;\n"], ["\n \n flex:1;\n  width:100%\n  max-width:450px;\n"])));
exports.AppContainer = styled_components_1.default(react_native_1.View)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  height: 100%;\n  align-items: center;\n  flex: 1;\n  height: 100%;\n  justify-content: center;\n"], ["\n  height: 100%;\n  align-items: center;\n  flex: 1;\n  height: 100%;\n  justify-content: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
