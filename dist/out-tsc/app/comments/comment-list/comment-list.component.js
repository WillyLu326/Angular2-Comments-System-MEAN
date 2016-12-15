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
import { CommentService } from '../services/comment-service';
import { EmitterService } from "../services/emitter-service";
export var CommentListComponent = (function () {
    function CommentListComponent(commentService) {
        this.commentService = commentService;
    }
    CommentListComponent.prototype.ngOnInit = function () {
        this.loadComments();
    };
    CommentListComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        EmitterService.get(this.postId).subscribe(function (comments) {
            return _this.comments = comments;
        });
    };
    CommentListComponent.prototype.loadComments = function () {
        var _this = this;
        this.commentService.getAllComments()
            .subscribe(function (comments) { return _this.comments = comments; });
    };
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], CommentListComponent.prototype, "editId", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], CommentListComponent.prototype, "postId", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], CommentListComponent.prototype, "addBtn", void 0);
    CommentListComponent = __decorate([
        Component({
            selector: 'app-comment-list',
            templateUrl: './comment-list.component.html',
            styleUrls: ['./comment-list.component.css']
        }), 
        __metadata('design:paramtypes', [CommentService])
    ], CommentListComponent);
    return CommentListComponent;
}());
//# sourceMappingURL=/Users/zhenglu/Desktop/ng2-mean/src/app/comments/comment-list/comment-list.component.js.map