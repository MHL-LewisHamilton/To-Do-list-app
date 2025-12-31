import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPieComponent } from './task-pie';

describe('TaskPie', () => {
  let component: TaskPieComponent;
  let fixture: ComponentFixture<TaskPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskPieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
