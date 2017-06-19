import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create stub backend
import { stubBackendProvider } from './stub-backed/stub-backend-provider';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    TasksListComponent,
    ShoppingListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    // used to create stub backend
    stubBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
