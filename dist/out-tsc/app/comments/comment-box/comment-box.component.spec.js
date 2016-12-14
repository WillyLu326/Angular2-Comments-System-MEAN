import { async, TestBed } from '@angular/core/testing';
import { CommentBoxComponent } from './comment-box.component';
describe('CommentBoxComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CommentBoxComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CommentBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/zhenglu/Desktop/ng2-mean/src/app/comments/comment-box/comment-box.component.spec.js.map