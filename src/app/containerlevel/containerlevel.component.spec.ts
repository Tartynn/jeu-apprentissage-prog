import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerlevelComponent } from './containerlevel.component';

describe('ContainerlevelComponent', () => {
  let component: ContainerlevelComponent;
  let fixture: ComponentFixture<ContainerlevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerlevelComponent]
    });
    fixture = TestBed.createComponent(ContainerlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
