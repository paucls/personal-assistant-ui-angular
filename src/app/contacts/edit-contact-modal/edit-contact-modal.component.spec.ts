import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { ClarityModule } from 'clarity-angular';

import { EditContactModalComponent } from './edit-contact-modal.component';
import { Contact } from 'app/contacts/contact';
import { ContactsService } from '../contacts.service';
import { ContactFixtureFactory } from '../contact-fixture.factory';

describe('EditContactModalComponent', () => {

  const CONTACT: Contact = ContactFixtureFactory.build();

  let component: EditContactModalComponent;
  let fixture: ComponentFixture<EditContactModalComponent>;
  let contactsService: ContactsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ClarityModule.forRoot(),
      ],
      declarations: [EditContactModalComponent],
      providers: [
        {provide: Http, useClass: class HttpStub {}},
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

    spyOn(contactsService, 'updateContact').and.returnValue(Promise.resolve());
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

    it('should raise modal closed event', fakeAsync(() => {
      let closeResult;
      component.modalClosed.subscribe((result) => closeResult = result);

      component.update(CONTACT);
      tick();

      expect(closeResult).toBe('success');
    }));

  });
});
