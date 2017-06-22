import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteContactModalComponent } from './delete-contact-modal/delete-contact-modal.component';
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

  constructor(private contactsService: ContactsService, private modalService: NgbModal) { }

  ngOnInit() {
    this.contactsService
      .getContacts()
      .then(contacts => this.contacts = contacts);
  }

  openDeleteContactModal(contact) {
    console.log('Delete', contact);

    this.modalService.open(DeleteContactModalComponent);
  }

}
