/**
 * Created by zhenglu on 12/13/16.
 */
import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/RX';

import { Comment } from '../models/comment';
import { Observable } from "rxjs";

@Injectable()
export class CommentService {

    url: string = 'http://localhost:3000/api/comments';

    constructor(private http: Http) {}

    getAllComments(): Observable<Comment[]> {
        return this.http.get(this.url)
          .map( (res: Response) => res.json() );
    }

    getSingleComment(id: string): Observable<Comment> {
        return this.http.get(`${this.url}\${id}`)
          .map( (res: Response) => res.json() );
    }

    postComment(comment: Comment): Observable<any> {
        let body = JSON.stringify(comment);
        console.log(body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.url, body, options)
          .map( (res: Response) => console.log('Post Done') );
    }


    updateComment(id: string, comment: Comment): Observable<any> {
        const body = JSON.stringify(comment);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.put(`${this.url}/${id}`, body, { headers: headers })
          .map( (res: Response) => console.log('Update done') );
    }

    deleteComment(id: string): Observable<Comment> {
        return this.http.delete(`${this.url}/${id}`)
          .map( (res: Response) => res.json() );
    }

}
