import { Component, Input, OnInit, Inject } from '@angular/core';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { BoardData } from 'src/app/models/board-data';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-board-details-page',
  templateUrl: './board-details-page.component.html',
  styleUrls: ['./board-details-page.component.scss']
})
export class BoardDetailsPageComponent implements OnInit {

  exit = faArrowLeftLong

  constructor() {}

  ngOnInit(): void {
  }

}