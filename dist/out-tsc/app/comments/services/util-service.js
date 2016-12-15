var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
export var UtilService = (function () {
    function UtilService() {
    }
    Object.defineProperty(UtilService.prototype, "doComment", {
        get: function () {
            return this.comment;
        },
        set: function (comment) {
            this.comment = comment;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UtilService.prototype, "doEditActivated", {
        get: function () {
            return this.editActivated;
        },
        set: function (editActivated) {
            this.editActivated = editActivated;
        },
        enumerable: true,
        configurable: true
    });
    UtilService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], UtilService);
    return UtilService;
}());
//# sourceMappingURL=/Users/zhenglu/Desktop/ng2-mean/src/app/comments/services/util-service.js.map