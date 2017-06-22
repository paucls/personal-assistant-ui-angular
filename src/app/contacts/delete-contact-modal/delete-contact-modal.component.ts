import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Contact} from "../contact";
import {ContactsService} from "../contacts.service";

@Component({
  selector: 'app-delete-contact-modal',
  templateUrl: './delete-contact-modal.component.html',
  providers: [ContactsService]
})
export class DeleteContactModalComponent {
  @Input() contact: Contact;

  constructor(public activeModal: NgbActiveModal, public contactsService: ContactsService) {
  }

  deleteContact() {
    this.contactsService
      .deleteContact(this.contact.id)
      .then(this.activeModal.close);
  }

}
