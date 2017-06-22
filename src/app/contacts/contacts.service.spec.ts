import { TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { BaseRequestOptions, Http, ConnectionBackend, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { ContactsService } from './contacts.service';
import { Contact } from './contact';

describe('ContactsService', () => {

  const CONTACT_1: Contact = {id: 'contact-1', firstName: 'John Doe'};
  const CONTACT_2: Contact = {id: 'contact-2', firstName: 'Ana Clark'};
  const CONTACTS: Contact[] = [CONTACT_1, CONTACT_2];

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
      let result;

      mockBackend.connections.subscribe(connection => {
        expect(connection.request.method).toBe(RequestMethod.Get);
        expect(connection.request.url).toBe('/contacts');
        const options = new ResponseOptions({body: CONTACTS});
        connection.mockRespond(new Response(options));
      });

      contactsService.getContacts().then(contacts => {
        result = contacts;
      });
      tick();

      expect(result.length).toBe(CONTACTS.length);
    })));

  });

  describe('deleteContact()', () => {

    it('should call the API to delete the contact', inject([ContactsService, MockBackend], fakeAsync((contactsService: ContactsService, mockBackend: MockBackend) => {
      mockBackend.connections.subscribe(connection => {
        expect(connection.request.method).toBe(RequestMethod.Delete);
        expect(connection.request.url).toBe(`/contacts/${CONTACT_1.id}`);
        connection.mockRespond(new Response(new ResponseOptions()));
      });

      contactsService.deleteContact(CONTACT_1.id);
    })));

  });

});
