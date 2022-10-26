
import { Component, OnInit, Input } from '@angular/core';
import { TaskCardModel } from 'src/app/models/task-card';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import {faSquareCheck} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent implements OnInit {

  editBtn = faPenToSquare
  deleteBtn = faTrash
  done = faSquareCheck

  @Input() taskCards: TaskCardModel[] = []
  @Input() index!:number

  toggle = true

  toggleTaskCard(){
    this.toggle = !this.toggle
  }
  deleteTaskCard(){
    this.taskCards.splice( this.index,1)
  }

  constructor() {}

  ngOnInit(): void {}

 

}
