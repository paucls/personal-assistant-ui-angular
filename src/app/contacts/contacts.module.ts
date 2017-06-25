import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactsComponent } from './contacts.component';
import { AddContactModalComponent } from './add-contact-modal/add-contact-modal.component';
import { DeleteContactModalComponent } from './delete-contact-modal/delete-contact-modal.component';
import { EditContactModalComponent } from './edit-contact-modal/edit-contact-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ContactsComponent,
    AddContactModalComponent,
    DeleteContactModalComponent,
    EditContactModalComponent
  ],
  entryComponents: [
    AddContactModalComponent,
    DeleteContactModalComponent,
    EditContactModalComponent
  ]
})
export class ContactsModule { }
