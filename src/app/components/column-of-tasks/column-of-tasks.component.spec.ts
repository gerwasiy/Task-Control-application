import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnOfTasks } from './column-of-tasks.component';

describe('ColumnOfTasks', () => {
  let component: ColumnOfTasks;
  let fixture: ComponentFixture<ColumnOfTasks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnOfTasks ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnOfTasks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
