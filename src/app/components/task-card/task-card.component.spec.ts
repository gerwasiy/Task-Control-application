import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCard } from './task-card.component';

describe('TaskCard', () => {
  let component: TaskCard;
  let fixture: ComponentFixture<TaskCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCard ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
