import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactsComponent} from './contacts/contacts.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {TasksListComponent} from './tasks-list/tasks-list.component';

const appRoutes: Routes = [
  {path: 'contacts', component: ContactsComponent},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'tasks-list', component: TasksListComponent},
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
