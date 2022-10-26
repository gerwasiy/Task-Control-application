import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnOfTasksComponent } from './column-of-tasks.component';

describe('ColumnOfTasks', () => {
  let component: ColumnOfTasksComponent;
  let fixture: ComponentFixture<ColumnOfTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnOfTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnOfTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
