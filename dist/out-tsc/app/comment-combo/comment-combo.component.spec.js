import { async, TestBed } from '@angular/core/testing';
import { CommentComboComponent } from './comment-combo.component';
describe('CommentComboComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CommentComboComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CommentComboComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/zhenglu/Desktop/ng2-mean/src/app/comment-combo/comment-combo.component.spec.js.map