import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskCard } from './components/task-card/task-card.component';
import { ColumnOfTasks } from './components/column-of-tasks/column-of-tasks.component';
import { BoardComponent } from './components/board/board.component';



@NgModule({
  declarations: [
    AppComponent,
    TaskCard,
    ColumnOfTasks,
    BoardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
