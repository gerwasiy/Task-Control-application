import { TaskCardModel } from 'src/app/models/taskCard';

export interface BoardModel {
  title: string;
  description: string;
  creationDate: Date;
  id?:number;
  taskCards:
    {
      ToDo:TaskCardModel[]
      InProgress:TaskCardModel[]
      Ready:TaskCardModel[]
    }
  
}

