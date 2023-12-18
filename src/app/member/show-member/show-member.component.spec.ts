import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMemberComponent } from './show-member.component';

describe('ShowMemberComponent', () => {
  let component: ShowMemberComponent;
  let fixture: ComponentFixture<ShowMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowMemberComponent]
    });
    fixture = TestBed.createComponent(ShowMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
