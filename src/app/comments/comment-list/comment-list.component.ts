import {Component, OnInit, OnChanges, Input } from '@angular/core';

import { Comment } from '../models/comment';
import { CommentService } from '../services/comment-service';
import {EmitterService} from "../services/emitter-service";
@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit, OnChanges {

    comments: Comment[];

    constructor(private commentService: CommentService) { }

    ngOnInit() {
      this.loadComments();
      console.log('list-init');
    }

    ngOnChanges() {
        console.log('list-changes');
    }

    loadComments() {
      this.commentService.getAllComments()
        .subscribe( (comments: Comment[]) => this.comments = comments );
    }

}
