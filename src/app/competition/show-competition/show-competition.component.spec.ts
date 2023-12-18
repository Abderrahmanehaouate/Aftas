import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCompetitionComponent } from './show-competition.component';

describe('ShowCompetitionComponent', () => {
  let component: ShowCompetitionComponent;
  let fixture: ComponentFixture<ShowCompetitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowCompetitionComponent]
    });
    fixture = TestBed.createComponent(ShowCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
