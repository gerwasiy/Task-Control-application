
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ColorPickerModule } from 'ngx-color-picker';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { ColumnOfTasksComponent } from './components/column-of-tasks/column-of-tasks.component';
import { BoardDetailsPageComponent } from './components/board-details-page/board-details-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BoardComponent } from './components/board/board.component';
import { HttpClientModule }   from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TaskCardComponent,
    ColumnOfTasksComponent,
    BoardDetailsPageComponent,
    DashboardComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    DragDropModule,
    ColorPickerModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
