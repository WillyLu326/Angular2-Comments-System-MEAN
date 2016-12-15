import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-combo',
  templateUrl: './comment-combo.component.html',
  styleUrls: ['./comment-combo.component.css']
})
export class CommentComboComponent implements OnInit {

  editId: string = 'editId';
  postId: string = 'postId';
  addBtn: string = 'addBtn';

  constructor() { }

  ngOnInit() {
  }

}
