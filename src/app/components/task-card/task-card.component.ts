import { Component, OnInit, Input } from '@angular/core';
import { TaskCardModel } from 'src/app/models/taskCard';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { TaskCardService } from 'src/app/services/task-card.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent implements OnInit {
  editBtn = faPenToSquare;
  deleteBtn = faTrash;
  done = faSquareCheck;

  @Input() taskCards: TaskCardModel[] = [];
  @Input() index!: number;
  @Input() taskCard!: TaskCardModel;

  newTaskCard:TaskCardModel = {
    title: '',
    description: '',
    creationDate:new Date()
  };
  toggle = true;

  toggleTaskCard() {
    this.toggle = !this.toggle;
  }
  constructor(private taskCardService: TaskCardService) {}

  ngOnInit(): void {}

  deleteCard() {
    this.taskCardService
      .deleteCard(this.taskCard)
      .subscribe({ next: (data: any) => (this.taskCards = data) });
    this.taskCards.splice(this.index, 1);
  }
  editTaskCard() {
    this.taskCardService.editCard(
      this.taskCard,
      this.newTaskCard.title,
      this.newTaskCard.description
    );
 
  }
}
