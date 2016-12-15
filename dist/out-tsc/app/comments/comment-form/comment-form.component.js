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
export var CommentFormComponent = (function () {
    function CommentFormComponent(commentService) {
        this.commentService = commentService;
        this.comment = {
            name: '',
            comment: '',
            id: String(new Date())
        };
    }
    CommentFormComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        console.log('form --- changes');
        EmitterService.get(this.editId).subscribe(function (comment) {
            _this.comment = comment;
        });
        EmitterService.get(this.addBtn).subscribe(function (edit) {
            _this.editActivated = edit;
            console.log(_this.editActivated);
        });
    };
    CommentFormComponent.prototype.doSubmit = function () {
        var _this = this;
        var newComment = new Comment(this.comment.name, this.comment.comment, String(new Date()));
        if (this.editActivated) {
            this.commentService.updateComment(this.comment.id, newComment)
                .subscribe(function () {
                _this.comment.name = '';
                _this.comment.comment = '';
                _this.commentService.getAllComments()
                    .subscribe(function (comments) {
                    EmitterService.get(_this.postId).emit(comments);
                });
            });
        }
        else {
            this.commentService.postComment(newComment)
                .subscribe(function () {
                _this.comment.name = '';
                _this.comment.comment = '';
                _this.commentService.getAllComments()
                    .subscribe(function (comments) {
                    EmitterService.get(_this.postId).emit(comments);
                });
            });
        }
    };
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], CommentFormComponent.prototype, "editId", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], CommentFormComponent.prototype, "postId", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], CommentFormComponent.prototype, "addBtn", void 0);
    CommentFormComponent = __decorate([
        Component({
            selector: 'app-comment-form',
            templateUrl: './comment-form.component.html',
            styleUrls: ['./comment-form.component.css']
        }), 
        __metadata('design:paramtypes', [CommentService])
    ], CommentFormComponent);
    return CommentFormComponent;
}());
//# sourceMappingURL=/Users/zhenglu/Desktop/ng2-mean/src/app/comments/comment-form/comment-form.component.js.map