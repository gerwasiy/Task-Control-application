import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { firstValueFrom } from 'rxjs';
import { BoardModel } from 'src/app/models/board';
import { BoardsService } from 'src/app/services/boards.service';


@Component({
  selector: 'app-board-details-page',
  templateUrl: './board-details-page.component.html',
  styleUrls: ['./board-details-page.component.scss'],
})
export class BoardDetailsPageComponent implements OnInit {

  exit = faArrowLeftLong;
  board!:BoardModel
  
  constructor(
    private boardsService: BoardsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(async () => {
      let boardId = this.activatedRoute.snapshot.paramMap.get('id');
      if (boardId !== null) {
        this.board = await firstValueFrom(this.boardsService.getBoard(+boardId));
      }
    });
  }
}
