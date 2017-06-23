import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ContactsService} from '../contacts.service';
import {Contact} from '../contact';

@Component({
  selector: 'app-edit-contact-modal',
  templateUrl: './edit-contact-modal.component.html',
  providers: [ContactsService]
})
export class EditContactModalComponent implements OnInit {
  @Input() contact: Contact;

  constructor(public activeModal: NgbActiveModal, public contactsService: ContactsService) {
  }

  ngOnInit() {
  }

  update(contact) {
    console.log('update', contact);
  }

}
