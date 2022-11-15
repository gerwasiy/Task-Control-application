
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BoardModel } from '../models/board';
import { TaskCardModel } from '../models/taskCard';
@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  Route: string = `http://localhost:3000/boards/`;
  constructor(private http: HttpClient) {}

  createBoard(board: BoardModel) {
    const body = {
      title: board.title,
      description: board.description,
      creationDate: board.creationDate,
      id: board.id,
      taskCards:
        {
          ToDo:[],
          InProgress:[],
          Ready:[]
        }
      
    };

    return this.http.post(`${this.Route}`, body);
  }
  editBoard(board: BoardModel){
    const body = {
      title: board.title,
      description: board.description,
      creationDate: board.creationDate,
      id: board.id,
    };

    return this.http.put(`${this.Route}`, body.id);
  }
  getBoards() {
    return this.http.get<BoardModel[]>(`${this.Route}`);
  }
  getBoard(id: number) {
  
    return this.http.get<BoardModel>(`${this.Route}${id}`);
  }
  deleteBoard(board: BoardModel) {
    return this.http.delete<BoardModel>(`http://localhost:3000/boards/${board.id}`);
  }
}
