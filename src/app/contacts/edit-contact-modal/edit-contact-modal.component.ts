import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contact';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-contact-modal',
  templateUrl: './edit-contact-modal.component.html',
  providers: [ContactsService]
})
export class EditContactModalComponent {
  @Input() contact: Contact;

  constructor(public activeModal: NgbActiveModal, public contactsService: ContactsService,
              public toastrService: ToastrService) {
  }

  update(contact) {
    this.contactsService
      .updateContact(contact)
      .then(this.activeModal.close)
      .then(() => this.toastrService.success('Contact updated successfully'));
  }

}
