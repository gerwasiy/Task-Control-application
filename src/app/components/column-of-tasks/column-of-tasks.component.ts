import { BoardModel } from 'src/app/models/board';
import { Component, Input, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


import { TaskCardModel } from 'src/app/models/taskCard';
import { TaskCardService } from 'src/app/services/task-card.service';

@Component({
  selector: 'app-column-of-tasks',
  templateUrl: './column-of-tasks.component.html',
  styleUrls: ['./column-of-tasks.component.scss'],
})
export class ColumnOfTasksComponent implements OnInit {


  @Input() board!: BoardModel;

  addTaskCard = faPlus;

  taskCardsToDo: TaskCardModel[] = [];
  taskCard!: TaskCardModel
  taskCardIn: TaskCardModel = {
    title: 'Issue Title',
    description: 'description',
    creationDate: new Date()
  };

  constructor(private taskCardService: TaskCardService) {}

  ngOnInit(): void {
    this.taskCardService
      .getCards()
      .subscribe((response) => (this.taskCardsToDo = response));
  }

  taskCardsInProgress: TaskCardModel[] = [];
  taskCardsReady: TaskCardModel[] = [];

  generateCard(card: TaskCardModel) {
    this.taskCardService.createCard(card).subscribe({
      next: (data: any) => {
        card = data;
      },
      error: (error) => console.log(error),
    });
    this.taskCardsToDo.push(card)
    this.taskCardService
  }

  toggle = true;

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
}
