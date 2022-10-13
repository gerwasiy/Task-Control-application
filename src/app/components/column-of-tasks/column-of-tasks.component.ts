import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import {faCircleExclamation} from '@fortawesome/free-solid-svg-icons';
import {faCircleHalfStroke} from '@fortawesome/free-solid-svg-icons';


import { columnOfTasks } from 'src/app/models/column-of-tasks';
import { taskCard } from 'src/app/models/task-card';

@Component({
  selector: 'app-column-of-tasks',
  templateUrl: './column-of-tasks.component.html',
  styleUrls: ['./column-of-tasks.component.scss'],
})
export class ColumnOfTasks implements OnInit {

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  addTaskCard = faPlus;

  @Input() columnOfTasks?: columnOfTasks;
  
  progressOfTasks = { 
    toDo:faCircleExclamation,
    inProgress:faCircleHalfStroke,
    ready:faCircle
  }
  
  columnsOfTasks: columnOfTasks[] = [
    { 
      icon: this.progressOfTasks.toDo,
      title:'To do'
    },
    {
      icon: this.progressOfTasks.inProgress,
      title:'In progress'
    },
    {
      icon: this.progressOfTasks.ready,
      title:'Ready'
    }
  ]
  
  taskCardsToDo: taskCard[] = [ ];
  taskCardsInProgress: taskCard[] = [ ];
  taskCardsInReady: taskCard[] = [ ];

  createTaskCardInToDo() {
    this.taskCardsToDo.push({
      title: 'Issue Title',
      description: 'description',
      creationData: new Date()
    });
  }
  createTaskCardInProgress() {
    this.taskCardsInProgress.push({
      title: 'Issue Title',
      description: 'description',
      creationData: new Date()
    });
  }
  createTaskCardInReady() {
    this.taskCardsInReady.push({
      title: 'Issue Title',
      description: 'description',
      creationData: new Date()
    });
  }

  
  constructor() {}

  ngOnInit(): void {}
}
