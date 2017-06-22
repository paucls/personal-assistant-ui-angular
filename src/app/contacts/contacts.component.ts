import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';
import { Contact } from './contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [ContactsService]
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService
      .getContacts()
      .then(contacts => this.contacts = contacts);
  }

  openDeleteContactModal(contact) {
    console.log('Delete', contact);
  }

}
