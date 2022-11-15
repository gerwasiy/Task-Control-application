import { BoardsService } from './../../services/boards.service';
import { BoardModel } from '../../models/board';
import { Component, Input, OnInit } from '@angular/core';
import {
  faArrowCircleLeft,
  faPenToSquare,
  faSquareCheck,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input() index!: number;
  @Input() board!: BoardModel;
  boards!: BoardModel[];

  boardIn: BoardModel = {
    title: '',
    description: '',
    creationDate: new Date(),
    taskCards:
      {
        ToDo:[],
        InProgress:[],
        Ready:[]
      }
    
  };


  editBtn = faPenToSquare;
  deleteBtn = faTrash;
  done = faSquareCheck;
  back = faArrowCircleLeft;

  toggle = true;

  constructor(
    private boardsService: BoardsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.boardsService
      .getBoards()
      .subscribe((response) => (this.boards = response));
  }

  toEditBoard(board:BoardModel) {
    this.boardsService
    .editBoard(board)
    .subscribe(
      {
      next: (data: any) => {
       board.title = data
      },
      error: (error) => console.log(error),
      
    });
    location.reload()
  this.toggle = !this.toggle;
  }

  toggleBoard() {
    this.toggle = !this.toggle;
  }
  deleteBoard() {
    this.boardsService
      .deleteBoard(this.board)
      .subscribe({ next: (data: any) => (this.boards = data) });
    location.reload();
  }
}
