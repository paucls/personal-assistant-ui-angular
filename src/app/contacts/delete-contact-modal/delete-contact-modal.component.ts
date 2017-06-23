import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-delete-contact-modal',
  templateUrl: './delete-contact-modal.component.html',
  providers: [ContactsService]
})
export class DeleteContactModalComponent {
  @Input() contact: Contact;

  constructor(public activeModal: NgbActiveModal, public contactsService: ContactsService,
              public toastrService: ToastrService) {
  }

  deleteContact() {
    this.contactsService
      .deleteContact(this.contact.id)
      .then(this.activeModal.close)
      .then(() => this.toastrService.success('Contact deleted successfully'));
  }

}
