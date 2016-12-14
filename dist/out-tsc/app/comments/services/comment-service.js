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
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/RX';
export var CommentService = (function () {
    function CommentService(http) {
        this.http = http;
        this.url = 'http://localhost:3000/api/comments';
    }
    CommentService.prototype.getAllComments = function () {
        return this.http.get(this.url)
            .map(function (res) { return res.json(); });
    };
    CommentService.prototype.getSingleComment = function (id) {
        return this.http.get(this.url + "${id}")
            .map(function (res) { return res.json(); });
    };
    CommentService.prototype.postComment = function (comment) {
        var body = JSON.stringify(comment);
        console.log(body);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers }); // Create a request option
        return this.http.post(this.url, body, options)
            .map(function (res) { return console.log('Post Done'); });
    };
    CommentService.prototype.updateComment = function (id, comment) {
        var body = JSON.stringify(comment);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.url + "/" + id, body, { headers: headers })
            .map(function (res) { return console.log('Update done'); });
    };
    CommentService.prototype.deleteComment = function (id) {
        return this.http.delete(this.url + "/" + id)
            .map(function (res) { return res.json(); });
    };
    CommentService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], CommentService);
    return CommentService;
}());
//# sourceMappingURL=/Users/zhenglu/Desktop/ng2-mean/src/app/comments/services/comment-service.js.map