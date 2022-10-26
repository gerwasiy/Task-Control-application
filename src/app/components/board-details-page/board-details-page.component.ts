import { Component, Input, OnInit } from '@angular/core';
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import { TaskCardModel } from 'src/app/models/task-card';
@Component({
  selector: 'app-board-details-page',
  templateUrl: './board-details-page.component.html',
  styleUrls: ['./board-details-page.component.scss']
})
export class BoardDetailsPageComponent implements OnInit {

  exit = faXmarkSquare


  @Input() taskCards: TaskCardModel[] = []
  @Input() index!:number

  
  constructor() { }

  ngOnInit(): void {
  }

}
