import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {ContactsService} from '../contacts.service';
import {Contact} from '../contact';

@Component({
  selector: 'app-add-contact-modal',
  templateUrl: './add-contact-modal.component.html',
  providers: [ContactsService]
})
export class AddContactModalComponent {

  contact: Contact = {};

  constructor(public activeModal: NgbActiveModal, public contactsService: ContactsService,
              public toastrService: ToastrService) {
  }

  save(contact) {
    this.contactsService
      .saveContact(contact)
      .then(this.activeModal.close)
      .then(() => this.toastrService.success('Contact added successfully'));
  }

}
