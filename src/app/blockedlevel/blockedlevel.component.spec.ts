import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedlevelComponent } from './blockedlevel.component';

describe('BlockedlevelComponent', () => {
  let component: BlockedlevelComponent;
  let fixture: ComponentFixture<BlockedlevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockedlevelComponent]
    });
    fixture = TestBed.createComponent(BlockedlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
