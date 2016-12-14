var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Comment } from '../models/comment';
import { CommentService } from '../services/comment-service';
export var CommentFormComponent = (function () {
    function CommentFormComponent(commentService) {
        this.commentService = commentService;
        this.name = '';
        this.comment = '';
    }
    CommentFormComponent.prototype.ngOnInit = function () {
    };
    CommentFormComponent.prototype.ngOnChanges = function () {
        console.log('OnChanges');
    };
    CommentFormComponent.prototype.ngDoCheck = function () {
        console.log('DoCheck');
    };
    CommentFormComponent.prototype.ngAfterViewInit = function () {
        console.log('AfterViewInit');
    };
    CommentFormComponent.prototype.ngAfterViewChecked = function () {
        console.log('AfterViewChecked');
    };
    CommentFormComponent.prototype.ngAfterContentInit = function () {
        console.log('AfterContentInit');
    };
    CommentFormComponent.prototype.ngAfterContentChecked = function () {
        console.log('AfterContentChecked');
    };
    CommentFormComponent.prototype.ngOnDestroy = function () {
        console.log('OnDestory');
    };
    CommentFormComponent.prototype.doSubmit = function () {
        var newComment = new Comment(this.name, this.comment, new Date());
        this.commentService.postComment(newComment)
            .subscribe(function (data) {
            location.reload();
        });
    };
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