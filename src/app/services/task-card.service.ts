import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskCardModel } from '../models/taskCard';
import { BoardModel } from 'src/app/models/board';

@Injectable({
  providedIn: 'root',
})
export class TaskCardService {
  Route: string = `http://localhost:3000/cards/`;
  constructor(private http: HttpClient) {}

  createCard(taskCard: TaskCardModel) {
    const body = {
      title: taskCard.title,
      description: taskCard.description,
      creationDate: taskCard.creationDate,
      id: taskCard.id,
    };

    return this.http.post(`${this.Route}`, body);
  }
  deleteCard(card: TaskCardModel) {
    return this.http.delete<TaskCardModel>(`http://localhost:3000/cards/${card.id}`);
  }



  editCard(card:TaskCardModel, title:string,description:string) {
  
    return this.http.put(`http://localhost:3000/cards/${card.id}`, {title,description});
  }
 
  getCards() {
    return this.http.get<TaskCardModel[]>(`${this.Route}`);
  }
  
}
