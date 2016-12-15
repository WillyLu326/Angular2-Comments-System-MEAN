var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Comment } from '../models/comment';
import { CommentService } from '../services/comment-service';
import { EmitterService } from "../services/emitter-service";
export var CommentBoxComponent = (function () {
    function CommentBoxComponent(commentService) {
        this.commentService = commentService;
        this.blockX = false;
    }
    CommentBoxComponent.prototype.doEdit = function () {
        EmitterService.get(this.addBtn).emit(true);
        EmitterService.get(this.editId).emit(this.comment);
        this.blockX = !this.blockX;
    };
    CommentBoxComponent.prototype.doDelete = function (id) {
        var _this = this;
        this.commentService.deleteComment(id)
            .subscribe(function () {
            _this.commentService.getAllComments()
                .subscribe(function (comments) {
                EmitterService.get(_this.postId).emit(comments);
            });
        });
    };
    __decorate([
        Input(), 
        __metadata('design:type', Comment)
    ], CommentBoxComponent.prototype, "comment", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], CommentBoxComponent.prototype, "editId", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], CommentBoxComponent.prototype, "postId", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], CommentBoxComponent.prototype, "addBtn", void 0);
    CommentBoxComponent = __decorate([
        Component({
            selector: 'app-comment-box',
            templateUrl: './comment-box.component.html',
            styleUrls: ['./comment-box.component.css']
        }), 
        __metadata('design:paramtypes', [CommentService])
    ], CommentBoxComponent);
    return CommentBoxComponent;
}());
//# sourceMappingURL=/Users/zhenglu/Desktop/ng2-mean/src/app/comments/comment-box/comment-box.component.js.map