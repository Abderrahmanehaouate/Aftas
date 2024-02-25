import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTemplateComponent } from './manager-template.component';

describe('ManagerTemplateComponent', () => {
  let component: ManagerTemplateComponent;
  let fixture: ComponentFixture<ManagerTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerTemplateComponent]
    });
    fixture = TestBed.createComponent(ManagerTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
