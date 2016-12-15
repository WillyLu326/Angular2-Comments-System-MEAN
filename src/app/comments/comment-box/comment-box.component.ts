import {Component, OnInit, Input, OnChanges, DoCheck} from '@angular/core';

import { Comment } from '../models/comment';
import { CommentService } from '../services/comment-service';
import { EmitterService } from "../services/emitter-service";

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent {

    @Input() comment: Comment;
    @Input() editId: string;
    @Input() postId: string;
    @Input() addBtn: string;

    blockX: boolean = false;

    constructor(private commentService: CommentService) {}

    doEdit() {
        EmitterService.get(this.addBtn).emit(true);
        EmitterService.get(this.editId).emit(this.comment);
        this.blockX = !this.blockX;
    }

    doDelete(id: string) {
        this.commentService.deleteComment(id)
          .subscribe( () => {
              this.commentService.getAllComments()
                .subscribe( (comments: Comment[]) => {
                    EmitterService.get(this.postId).emit(comments);
                });
          });
    }


}
