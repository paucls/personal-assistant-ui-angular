import {Component, ViewContainerRef} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastsManager} from 'ng2-toastr';
import {ContactsService} from '../contacts.service';
import {Contact} from '../contact';

@Component({
  selector: 'app-add-contact-modal',
  templateUrl: './add-contact-modal.component.html',
  providers: [ContactsService]
})
export class AddContactModalComponent {

  contact: Contact = {};

  constructor(public activeModal: NgbActiveModal,
              public contactsService: ContactsService,
              public toastr: ToastsManager,
              vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  save(contact) {
    this.contactsService
      .saveContact(contact)
      .then(() => {
        this.toastr.success('You are awesome!', 'Success!');
        this.activeModal.close();
      });
  }

}
