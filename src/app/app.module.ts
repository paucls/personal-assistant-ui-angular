import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastModule } from 'ng2-toastr';

// used to create stub backend
import { stubBackendProvider } from './stub-backed/stub-backend-provider';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddContactModalComponent } from './contacts/add-contact-modal/add-contact-modal.component';
import { DeleteContactModalComponent } from './contacts/delete-contact-modal/delete-contact-modal.component';
import { EditContactModalComponent } from './contacts/edit-contact-modal/edit-contact-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    TasksListComponent,
    ShoppingListComponent,
    NavbarComponent,
    AddContactModalComponent,
    DeleteContactModalComponent,
    EditContactModalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    ToastModule.forRoot()
  ],
  providers: [
    // used to create stub backend
    stubBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  entryComponents: [
    AddContactModalComponent,
    DeleteContactModalComponent,
    EditContactModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
