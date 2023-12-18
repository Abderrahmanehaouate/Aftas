import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMemberComponent } from './list-member.component';

describe('ListMemberComponent', () => {
  let component: ListMemberComponent;
  let fixture: ComponentFixture<ListMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMemberComponent]
    });
    fixture = TestBed.createComponent(ListMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
