import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksOverviewComponent } from './tasks-overview/tasks-overview.component';
import { TasksHistoryComponent } from './tasks-history/tasks-history.component';
import { TasksSettingsComponent } from './tasks-settings/tasks-settings.component';

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule
  ],
  declarations: [
    TasksComponent,
    TasksOverviewComponent,
    TasksHistoryComponent,
    TasksSettingsComponent
  ]
})
export class TasksModule { }
