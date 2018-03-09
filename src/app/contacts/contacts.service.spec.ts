import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ContactsService } from './contacts.service';
import { Contact } from './contact';
import { contactFixtureFactory } from './contact-fixture.factory';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ContactsService', () => {

  const CONTACT: Contact = contactFixtureFactory.build();

  let contactsService: ContactsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    const testBed = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContactsService]
    });

    contactsService = testBed.get(ContactsService);
    httpMock = testBed.get(HttpTestingController);
  });

  describe('getContacts()', () => {

    it('should return all contacts from API', fakeAsync(() => {
      const contacts: Contact[] = contactFixtureFactory.buildList(2);
      let result;

      contactsService.getContacts().then(response => result = response);

      httpMock
        .expectOne({method: 'GET', url: '/api/contacts'})
        .flush(contacts);
      tick();
      expect(result).toBe(contacts);
    }));

  });

  describe('deleteContact()', () => {

    it('should call the API to delete the contact', () => {
      contactsService.deleteContact(CONTACT.id);

      const testRequest = httpMock.expectOne(`/api/contacts/${CONTACT.id}`);
      expect(testRequest.request.method).toBe('DELETE');
      testRequest.flush({});
    });

  });

  describe('saveContact()', () => {

    it('should call the API to save the new contact', fakeAsync(() => {
      const newContact = {firstName: 'John Doe'};
      let result;

      contactsService.saveContact(newContact).then(contact => result = contact);

      httpMock
        .expectOne({method: 'POST', url: '/api/contacts'})
        .flush(CONTACT);
      tick();
      expect(result).toBe(CONTACT);
    }));

  });

  describe('updateContact()', () => {

    it('should call the API to update the contact', fakeAsync(() => {
      const updatedContact: Contact = contactFixtureFactory.build();
      let result;

      contactsService.updateContact(CONTACT).then(contact => result = contact);

      httpMock
        .expectOne({method: 'PUT', url: `/api/contacts/${CONTACT.id}`})
        .flush(updatedContact);
      tick();
      expect(result).toBe(updatedContact);
    }));

  });

});
