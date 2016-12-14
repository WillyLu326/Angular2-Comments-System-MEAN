import {Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

import { Comment } from '../models/comment';
import { CommentService } from '../services/comment-service';
import { EmitterService } from '../services/emitter-service';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit, OnChanges {

    @Input() comment: Comment;
    @Output() click: EventEmitter<any> = new EventEmitter<any>();

    constructor(private commentService: CommentService) { }

    ngOnInit() {
    }

    ngOnChanges() {

    }

    doDelete(id: string) {
        this.commentService.deleteComment(id)
          .subscribe(() => {
              this.commentService.getAllComments()
                .subscribe( (comments: Comment[]) => {
                  this.click.emit(comments);
                });
          });


    }


}
