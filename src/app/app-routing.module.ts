import { BoardDetailsPageComponent } from './components/board-details-page/board-details-page.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColumnOfTasksComponent } from './components/column-of-tasks/column-of-tasks.component';

const routes: Routes = [
  { path: '', component: ColumnOfTasksComponent  },
  { path: 'details', component: BoardDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }