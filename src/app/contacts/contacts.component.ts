import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {ContactsService} from './contacts.service';
import {Contact} from './contact';
import {DeleteContactModalComponent} from './delete-contact-modal/delete-contact-modal.component';

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
    const modalRef = this.modalService.open(DeleteContactModalComponent);

    modalRef.componentInstance.contact = contact;

    modalRef.result.then((result) => this.ngOnInit(), () => {});
  }

}
