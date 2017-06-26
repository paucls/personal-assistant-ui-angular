import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { ClarityModule } from 'clarity-angular';

import { AddContactModalComponent } from './add-contact-modal.component';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';
import { ContactFixtureFactory } from '../contact-fixture.factory';

describe('AddContactModalComponent', () => {

  const CONTACT: Contact = ContactFixtureFactory.build();

  let component: AddContactModalComponent;
  let fixture: ComponentFixture<AddContactModalComponent>;
  let contactsService: ContactsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ClarityModule.forRoot(),
      ],
      declarations: [AddContactModalComponent],
      providers: [
        {provide: Http, useClass: class HttpStub {}},
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

    spyOn(contactsService, 'saveContact').and.returnValue(Promise.resolve());
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

    it('should raise modal closed event', fakeAsync(() => {
      let closeResult;
      component.modalClosed.subscribe((result) => closeResult = result);

      component.save(CONTACT);
      tick();

      expect(closeResult).toBe('success');
    }));

  });

});
