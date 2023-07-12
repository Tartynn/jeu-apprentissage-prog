import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaIDEComponent } from './java-ide.component';

describe('JavaIDEComponent', () => {
  let component: JavaIDEComponent;
  let fixture: ComponentFixture<JavaIDEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JavaIDEComponent]
    });
    fixture = TestBed.createComponent(JavaIDEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
