import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';

import { columnOfTasks } from 'src/app/models/column-of-tasks';
import { TaskCardModel } from 'src/app/models/task-card';

@Component({
  selector: 'app-column-of-tasks',
  templateUrl: './column-of-tasks.component.html',
  styleUrls: ['./column-of-tasks.component.scss'],
})
export class ColumnOfTasks implements OnInit {

  drop(event: CdkDragDrop<TaskCardModel[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addTaskCard = faPlus;

  @Input() columnOfTasks?: columnOfTasks;

  progressOfTasks = {
    toDo: faCircleExclamation,
    inProgress: faCircleHalfStroke,
    ready: faCircle,
  };

  columnsOfTasks: columnOfTasks[] = [
    {
      icon: this.progressOfTasks.toDo,
      title: 'To do',
    },
    {
      icon: this.progressOfTasks.inProgress,
      title: 'In progress',
    },
    {
      icon: this.progressOfTasks.ready,
      title: 'Ready',
    },
  ];

  taskCardsToDo: TaskCardModel[] = [];
  taskCardsInProgress: TaskCardModel[] = [];
  taskCardsInReady: TaskCardModel[] = [];

  taskCardTemplate:TaskCardModel = {
    title: 'Issue Title',
    description: 'description',
    creationData: new Date(),
  }

  createTaskCardInToDo() {
    this.taskCardsToDo.push(this.taskCardTemplate);
  }
  createTaskCardInProgress() {
    this.taskCardsInProgress.push(this.taskCardTemplate);
  }
  createTaskCardInReady() {
    this.taskCardsInReady.push(this.taskCardTemplate);
  }

  constructor() {}

  ngOnInit(): void {}
}
