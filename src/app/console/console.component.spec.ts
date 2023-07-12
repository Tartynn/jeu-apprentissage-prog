import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Console } from './console.component';

describe('Console', () => {
  let component: Console;
  let fixture: ComponentFixture<Console>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Console]
    });
    fixture = TestBed.createComponent(Console);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
