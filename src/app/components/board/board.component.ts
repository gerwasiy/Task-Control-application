import { taskCard } from 'src/app/models/task-card';

import { Component, OnInit, Input } from '@angular/core';

import {faCircle} from '@fortawesome/free-solid-svg-icons';
import {faCircleExclamation} from '@fortawesome/free-solid-svg-icons';

import {faCircleHalfStroke} from '@fortawesome/free-solid-svg-icons';


import { columnOfTasks } from 'src/app/models/column-of-tasks';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

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


  constructor() { }

  ngOnInit(): void {
  }

}
