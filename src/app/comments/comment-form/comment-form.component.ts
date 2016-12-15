import {Component, OnChanges, Input} from '@angular/core';

import { Comment } from '../models/comment';
import { CommentService } from '../services/comment-service';
import {EmitterService} from "../services/emitter-service";

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnChanges{

    @Input() editId: string;
    @Input() postId: string;
    @Input() addBtn: string;

    comment: Comment = {
        name: '',
        comment: '',
        id: String(new Date())
    };
    editActivated: boolean;

    constructor(private commentService: CommentService) {}

    ngOnChanges(changes: any) {
        EmitterService.get(this.editId).subscribe( (comment: Comment) => {
            this.comment = comment
        });
        EmitterService.get(this.addBtn).subscribe( (edit: boolean) => {
            this.editActivated = edit;
        });
    }

    doSubmit() {
      const newComment = new Comment(this.comment.name, this.comment.comment, String(new Date()));
      if (this.editActivated) {
          this.commentService.updateComment(this.comment.id, newComment)
            .subscribe( () => {
              this.comment.name = '';
              this.comment.comment = '';
              this.commentService.getAllComments()
                .subscribe( (comments: Comment[]) => {
                    EmitterService.get(this.postId).emit(comments);
                });
              //EmitterService.get(this.addBtn).emit(false);
              this.editActivated = !this.editActivated;
            })
        } else {
          this.commentService.postComment(newComment)
            .subscribe( () => {
              this.comment.name = '';
              this.comment.comment = '';
              this.commentService.getAllComments()
                .subscribe((comments: Comment[]) => {
                  EmitterService.get(this.postId).emit(comments);
                });
            });
        }
    }




}
