"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dayjs_1 = __importDefault(require("dayjs"));
var mobx_1 = require("mobx");
var mobx_persist_1 = require("mobx-persist");
var passZero = function (n) {
    if (n >= 10) {
        return n;
    }
    return "0" + n;
};
var TimerStore = /** @class */ (function () {
    function TimerStore() {
        this.startTime = dayjs_1.default();
        this.isRunning = false;
        this.seconds = 0;
    }
    TimerStore.prototype.watcher = function () {
        var _this = this;
        if (!this.isRunning)
            return;
        this.seconds = dayjs_1.default().diff(this.startTime, "second");
        setTimeout(function () { return _this.watcher(); }, 1000);
    };
    TimerStore.prototype.startTimer = function () {
        return (this.isRunning = true), (this.startTime = dayjs_1.default()), this.watcher();
    };
    TimerStore.prototype.stopTimer = function () {
        this.isRunning = false;
        this.seconds = 0;
    };
    Object.defineProperty(TimerStore.prototype, "percent", {
        get: function () {
            return Math.min(100, (this.seconds / 180) * 100) + "%";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimerStore.prototype, "display", {
        get: function () {
            var minutes = Math.floor(this.seconds / 60);
            var seconds = this.seconds % 60;
            return passZero(minutes) + ":" + passZero(seconds);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        mobx_persist_1.persist("object"), mobx_1.observable
    ], TimerStore.prototype, "startTime", void 0);
    __decorate([
        mobx_persist_1.persist, mobx_1.observable
    ], TimerStore.prototype, "isRunning", void 0);
    __decorate([
        mobx_persist_1.persist, mobx_1.observable
    ], TimerStore.prototype, "seconds", void 0);
    __decorate([
        mobx_1.action
    ], TimerStore.prototype, "watcher", null);
    __decorate([
        mobx_1.action
    ], TimerStore.prototype, "startTimer", null);
    __decorate([
        mobx_1.action
    ], TimerStore.prototype, "stopTimer", null);
    __decorate([
        mobx_1.computed
    ], TimerStore.prototype, "percent", null);
    __decorate([
        mobx_1.computed
    ], TimerStore.prototype, "display", null);
    return TimerStore;
}());
exports.TimerStore = TimerStore;
