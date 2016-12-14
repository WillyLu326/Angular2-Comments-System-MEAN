import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentBoxComponent } from './comments/comment-box/comment-box.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';

import { CommentService } from './comments/services/comment-service';
import { EmitterService } from './comments/services/emitter-service';

@NgModule({
  declarations: [
    AppComponent,
    CommentFormComponent,
    CommentBoxComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CommentService,
    EmitterService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
