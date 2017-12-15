import { TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { BaseRequestOptions, Http, ConnectionBackend, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { ContactsService } from './contacts.service';
import { Contact } from './contact';
import { contactFixtureFactory } from './contact-fixture.factory';

describe('ContactsService', () => {

  const CONTACT: Contact = contactFixtureFactory.build();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        },
        {provide: MockBackend, useClass: MockBackend},
        {provide: BaseRequestOptions, useClass: BaseRequestOptions},
        {provide: ContactsService, useClass: ContactsService}
      ]
    });
  });

  describe('getContacts()', () => {

    it('should return all contacts from API', inject([ContactsService, MockBackend], fakeAsync((contactsService: ContactsService, mockBackend: MockBackend) => {
      const contacts: Contact[] = contactFixtureFactory.buildList(2);
      let result;

      mockBackend.connections.subscribe(connection => {
        expect(connection.request.method).toBe(RequestMethod.Get);
        expect(connection.request.url).toBe('/contacts');
        const options = new ResponseOptions({body: contacts});
        connection.mockRespond(new Response(options));
      });

      contactsService.getContacts().then(contacts => {
        result = contacts;
      });
      tick();

      expect(result.length).toBe(contacts.length);
    })));

  });

  describe('deleteContact()', () => {

    it('should call the API to delete the contact', inject([ContactsService, MockBackend], fakeAsync((contactsService: ContactsService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe(connection => {
        expect(connection.request.method).toBe(RequestMethod.Delete);
        expect(connection.request.url).toBe(`/contacts/${CONTACT.id}`);
        connection.mockRespond(new Response(new ResponseOptions()));
      });

      contactsService.deleteContact(CONTACT.id);
    })));

  });

  describe('saveContact()', () => {

    it('should call the API to save the new contact', inject([ContactsService, MockBackend], fakeAsync((contactsService: ContactsService, mockBackend: MockBackend) => {
      const newContact = {firstName: 'John Doe'};
      let result;

      mockBackend.connections.subscribe(connection => {
        expect(connection.request.method).toBe(RequestMethod.Post);
        expect(connection.request.url).toBe(`/contacts`);
        const options = new ResponseOptions({body: CONTACT});
        connection.mockRespond(new Response(options));
      });

      contactsService.saveContact(newContact).then(contact => {
        result = contact;
      });
      tick();

      expect(result).toBe(CONTACT);
    })));

  });

  describe('updateContact()', () => {

    it('should call the API to update the contact', inject([ContactsService, MockBackend], fakeAsync((contactsService: ContactsService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe(connection => {
        expect(connection.request.method).toBe(RequestMethod.Post);
        expect(connection.request.url).toBe(`/contacts/${CONTACT.id}`);
        connection.mockRespond(new Response(new ResponseOptions()));
      });

      contactsService.updateContact(CONTACT);
    })));

  });

});
