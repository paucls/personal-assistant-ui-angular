import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { TasksComponent } from './tasks/tasks.component';
import { ShoppingListComponent } from './shopping/shopping-list.component';

const appRoutes: Routes = [
  {path: 'contacts', component: ContactsComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: '', redirectTo: '/contacts', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
