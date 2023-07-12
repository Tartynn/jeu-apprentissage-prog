import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeExecutionService } from './code-service.component';

describe('CodeExecutionService', () => {
  let component: CodeExecutionService;
  let fixture: ComponentFixture<CodeExecutionService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeExecutionService]
    });
    fixture = TestBed.createComponent(CodeExecutionService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
