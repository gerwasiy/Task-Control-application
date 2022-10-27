import { BoardData } from './../../models/board-data';
import { Component, Input, OnInit } from '@angular/core';
import { faArrowCircleLeft, faPenToSquare, faSquareCheck, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

@Input() index!:number
@Input() boards!:BoardData[]

editBtn = faPenToSquare
deleteBtn = faTrash
done = faSquareCheck
back = faArrowCircleLeft
  toggle = true
  
  toggleBoard(){
    this.toggle = !this.toggle
  }
  deleteBoard(){
    this.boards.splice( this.index,1)
  }

  constructor(
  ) {}

  ngOnInit() {
  
  }

}
