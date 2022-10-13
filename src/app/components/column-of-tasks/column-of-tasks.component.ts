import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { columnOfTasks } from 'src/app/models/column-of-tasks';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { taskCard } from 'src/app/models/task-card';

@Component({
  selector: 'app-column-of-tasks',
  templateUrl: './column-of-tasks.component.html',
  styleUrls: ['./column-of-tasks.component.scss'],
})
export class ColumnOfTasks implements OnInit {

  addTaskCard = faPlus;

  @Input() columnOfTasks?: columnOfTasks;
  
  
  
  taskCards: taskCard[] = [ ];
  createTaskCard() {
    this.taskCards.push({
      title: 'Issue Title',
      description: 'description',
      creationData: new Date()
    });
    
   
  }

  constructor() {}

  ngOnInit(): void {}
}
