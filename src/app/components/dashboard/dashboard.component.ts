import { ColumnOfTasksComponent } from './../column-of-tasks/column-of-tasks.component';

import { Routes } from '@angular/router';
import { BoardData } from './../../models/board-data';
import { Component, Input, OnInit } from '@angular/core';
import { faPlusCircle, faSquareCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

@Input() routes:Routes = []

  boards: BoardData[] = [];
  done = faSquareCheck;
  addBoard = faPlusCircle;
  toggle = true;
  i: number = 0;
  boardTitle = this.boards[this.i]?.title;
  boardDescription = this.boards[this.i]?.description;

  toggleBoard() {
    this.toggle = !this.toggle;
  }

  createBoard() {
    this.toggle = !this.toggle;
    this.boards.push({
      title: this.boardTitle,
      description: this.boardDescription,
      creationData: new Date(),
    });
    this.i++
  }
  constructor() {}

  ngOnInit(): void {}
}
