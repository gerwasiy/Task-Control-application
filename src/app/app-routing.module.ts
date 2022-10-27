import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BoardDetailsPageComponent } from './components/board-details-page/board-details-page.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'board-page',
    component: BoardDetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
