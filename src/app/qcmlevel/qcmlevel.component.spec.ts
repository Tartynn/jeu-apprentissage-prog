import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmlevelComponent } from './qcmlevel.component';

describe('QcmlevelComponent', () => {
  let component: QcmlevelComponent;
  let fixture: ComponentFixture<QcmlevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QcmlevelComponent]
    });
    fixture = TestBed.createComponent(QcmlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
