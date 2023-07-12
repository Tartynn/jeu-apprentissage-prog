import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodelevelComponent } from './codelevel.component';

describe('CodelevelComponent', () => {
  let component: CodelevelComponent;
  let fixture: ComponentFixture<CodelevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodelevelComponent]
    });
    fixture = TestBed.createComponent(CodelevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
