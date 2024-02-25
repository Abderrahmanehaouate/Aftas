import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompetitionComponent } from './list-competition.component';

describe('ListCompetitionComponent', () => {
  let component: ListCompetitionComponent;
  let fixture: ComponentFixture<ListCompetitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCompetitionComponent]
    });
    fixture = TestBed.createComponent(ListCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
