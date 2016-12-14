import { async, TestBed } from '@angular/core/testing';
import { CommentListComponent } from './comment-list.component';
describe('CommentListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CommentListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CommentListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/zhenglu/Desktop/ng2-mean/src/app/comments/comment-list/comment-list.component.spec.js.map