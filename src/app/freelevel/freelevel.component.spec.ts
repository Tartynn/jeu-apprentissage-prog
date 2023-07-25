import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelevelComponent } from './freelevel.component';

describe('FreelevelComponent', () => {
  let component: FreelevelComponent;
  let fixture: ComponentFixture<FreelevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreelevelComponent]
    });
    fixture = TestBed.createComponent(FreelevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
