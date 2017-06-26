import {Component, OnInit} from '@angular/core';

import {ContactsService} from './contacts.service';
import {Contact} from './contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [ContactsService]
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];
  selectedContact: Contact = {};
  showAddContactModal = false;
  showDeleteContactModal = false;
  showEditContactModal = false;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.contactsService
      .getContacts()
      .then(contacts => this.contacts = contacts);
  }

  openAddContactModal() {
    this.showAddContactModal = true;
  }

  openDeleteContactModal(contact) {
    this.showDeleteContactModal = true;
    this.selectedContact = contact;
  }

  openEditContactModal(contact) {
    this.showEditContactModal = true;
    this.selectedContact = contact;
  }

  onModalClosed(result) {
    this.showAddContactModal = false;
    this.showDeleteContactModal = false;
    this.showEditContactModal = false;

    if (result === 'success') {
      this.loadContacts();
    }
  }

}
