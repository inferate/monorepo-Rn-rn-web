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
var NavigationStore_1 = require("../stores/NavigationStore");
exports.Routes = mobx_react_lite_1.observer(function () {
    var NavigationStore = react_1.useContext(NavigationStore_1.NavigationStoreContext);
    return react_1.default.createElement(react_native_1.Text, null, "Something");
});
