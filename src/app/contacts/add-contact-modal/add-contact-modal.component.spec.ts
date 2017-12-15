import { async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

import { AddContactModalComponent } from './add-contact-modal.component';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';
import { contactFixtureFactory } from '../contact-fixture.factory';

describe('AddContactModalComponent', () => {

  const CONTACT: Contact = contactFixtureFactory.build();

  let component: AddContactModalComponent;
  let fixture: ComponentFixture<AddContactModalComponent>;
  let contactsService: ContactsService;
  let ngbActiveModal: NgbActiveModal;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AddContactModalComponent],
      providers: [
        {provide: Http, useClass: class HttpStub {}},
        {provide: NgbActiveModal, useClass: class NgbActiveModalStub { close() {}}},
        {provide: ToastrService, useClass: class ToastrServiceStub { success() {}}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContactModalComponent);
    component = fixture.componentInstance;

    // ContactsService from the root injector
    contactsService = fixture.debugElement.injector.get(ContactsService);

    // NgbActiveModal from the root injector
    ngbActiveModal = fixture.debugElement.injector.get(NgbActiveModal);

    spyOn(contactsService, 'saveContact').and.returnValue(Promise.resolve());
    spyOn(ngbActiveModal, 'close');
  });

  it('should be created', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('save()', () => {

    it('should call service to save the new contact', () => {
      component.save(CONTACT);

      expect(contactsService.saveContact).toHaveBeenCalledWith(CONTACT);
    });

    it('should close the modal', fakeAsync(() => {
      component.save(CONTACT);

      tick();
      expect(ngbActiveModal.close).toHaveBeenCalled();
    }));

  });

});
