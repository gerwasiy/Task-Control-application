import { BoardsService } from './../../services/boards.service';
import { BoardModel } from '../../models/board';
import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faSquareCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  doneMark = faSquareCheck;
  addBoard = faPlusCircle;
  toggle = true;

  boards: BoardModel[] = [];
  board!: BoardModel;
  boardIn: BoardModel = {
    title: '',
    description: '',
    creationDate: new Date(),
    taskCards: {
      ToDo: [],
      InProgress: [],
      Ready: [],
    },
  };

  constructor(private boardsService: BoardsService) {}

  ngOnInit(): void {
    this.boardsService
      .getBoards()
      .subscribe((response) => (this.boards = response));
  }

  toggleBoard() {
    this.toggle = !this.toggle;
  }

  generateBoard(board: BoardModel) {
    this.boardsService.createBoard(board).subscribe({
      next: (data: any) => {
        board = data;
      },
      error: (error) => console.log(error),
    });
    location.reload();
    this.toggle = !this.toggle;
  }
}
