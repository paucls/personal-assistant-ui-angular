import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {Http} from '@angular/http';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';

import {EditContactModalComponent} from './edit-contact-modal.component';
import {Contact} from 'app/contacts/contact';
import {ContactsService} from '../contacts.service';

describe('EditContactModalComponent', () => {

  const CONTACT: Contact = {id: 'contact-1', firstName: 'John Doe'};

  let component: EditContactModalComponent;
  let fixture: ComponentFixture<EditContactModalComponent>;
  let contactsService: ContactsService;
  let ngbActiveModal: NgbActiveModal;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [EditContactModalComponent],
      providers: [
        {provide: Http, useClass: class HttpStub {}},
        {provide: NgbActiveModal, useClass: class NgbActiveModalStub { close() {}}},
        {provide: ToastrService, useClass: class ToastrServiceStub { success() {}}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContactModalComponent);
    component = fixture.componentInstance;
    component.contact = CONTACT;

    // ContactsService from the root injector
    contactsService = fixture.debugElement.injector.get(ContactsService);

    // NgbActiveModal from the root injector
    ngbActiveModal = fixture.debugElement.injector.get(NgbActiveModal);

    spyOn(contactsService, 'updateContact').and.returnValue(Promise.resolve());
    spyOn(ngbActiveModal, 'close');
  });

  it('should be created', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('update()', () => {

    it('should call service to update the contact', () => {
      component.update(CONTACT);

      expect(contactsService.updateContact).toHaveBeenCalledWith(CONTACT);
    });

    it('should close the modal', fakeAsync(() => {
      component.update(CONTACT);

      tick();
      expect(ngbActiveModal.close).toHaveBeenCalled();
    }));

  });
});
