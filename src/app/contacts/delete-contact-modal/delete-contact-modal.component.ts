import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-contact-modal',
  templateUrl: './delete-contact-modal.component.html'
})
export class DeleteContactModalComponent {

  constructor(public activeModal: NgbActiveModal) {
  }

}
