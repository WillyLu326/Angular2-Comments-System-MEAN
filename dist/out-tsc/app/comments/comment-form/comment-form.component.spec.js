import { async, TestBed } from '@angular/core/testing';
import { CommentFormComponent } from './comment-form.component';
describe('CommentFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CommentFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CommentFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/zhenglu/Desktop/ng2-mean/src/app/comments/comment-form/comment-form.component.spec.js.map