import {Component, OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

import { Comment } from '../models/comment';
import { CommentService } from '../services/comment-service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit, OnChanges,
  DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit,
  AfterContentChecked, OnDestroy {

    name: string = '';
    comment: string = '';
    comments: Comment[];

    constructor(private commentService: CommentService) { }

    ngOnInit() {

    }

    ngOnChanges() {
        console.log('OnChanges');
    }

    ngDoCheck() {
        console.log('DoCheck');
    }

    ngAfterViewInit() {
        console.log('AfterViewInit');
    }

    ngAfterViewChecked() {
        console.log('AfterViewChecked');
    }

    ngAfterContentInit() {
        console.log('AfterContentInit');
    }

    ngAfterContentChecked() {
        console.log('AfterContentChecked');
    }

    ngOnDestroy() {
        console.log('OnDestory');
    }

    doSubmit() {
        const newComment = new Comment(this.name, this.comment, new Date());
        this.commentService.postComment(newComment)
          .subscribe( (data: Comment) => {
              location.reload();
          });
    }

}
