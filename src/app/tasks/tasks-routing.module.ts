import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './tasks.component';
import { TasksOverviewComponent } from './tasks-overview/tasks-overview.component';
import { TasksHistoryComponent } from './tasks-history/tasks-history.component';
import { TasksSettingsComponent } from './tasks-settings/tasks-settings.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent,
    children: [
      {path: 'overview', component: TasksOverviewComponent},
      {path: 'history', component: TasksHistoryComponent},
      {path: 'settings', component: TasksSettingsComponent},
      {path: '', redirectTo: 'tasks/overview', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule {}
