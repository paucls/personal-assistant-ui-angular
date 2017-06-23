import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { environment } from '../../environments/environment';
import { logRequest, generateUuid, getUuidFromUrl } from './stub-backend-utils';

import { Contact } from '../contacts/contact';

/**
 * Provider to allow the use of a stub backend instead of a real Http service for backend-less development.
 */
export let stubBackendProvider = {
  provide: Http,
  deps: [MockBackend, BaseRequestOptions, XHRBackend],
  useFactory: stubBackendFactory
};

export function stubBackendFactory(mockBackend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {

  if (!environment.stubBackend) {
    console.log('Configuring real Http backend...');
    return new Http(realBackend, options);
  }

  console.log('Configuring stub Http backend...');

  let contacts: Contact[] = [
    {id: '9509c8b4-ad34-4378-b49c-c9206dfd7f75', firstName: 'John', lastName: 'Walsh', company: 'Hackett and Sons', phone: '1-352-850-5507', email: 'Abbigail37@gmail.com'},
    {id: '1b35d8f8-9e80-4316-b3e3-135a8f81200f', firstName: 'Ana', lastName: 'Clark', company: 'Ankunding LLC', phone: '845.600.0439', email: 'Carmela6@yahoo.com'}
  ];

  mockBackend.connections.subscribe((connection: MockConnection) => {

    // wrap in timeout to simulate server api call
    setTimeout(() => {

      // Get all contacts
      if (connection.request.method === RequestMethod.Get && connection.request.url.match('/contacts$')) {
        logRequest(connection.request);

        connection.mockRespond(new Response(new ResponseOptions({body: contacts.slice()})));
        return;
      }

      // Delete contact
      if (connection.request.method === RequestMethod.Delete && connection.request.url.match('/contacts/*')) {
        logRequest(connection.request);

        const id = getUuidFromUrl(connection.request.url);
        contacts = contacts.filter(contact => contact.id !== id);

        connection.mockRespond(new Response(new ResponseOptions()));
        return;
      }

      // Save contact
      if (connection.request.method === RequestMethod.Post && connection.request.url.match('/contacts$')) {
        logRequest(connection.request);

        let newContact = JSON.parse(connection.request.getBody());
        newContact.id = generateUuid();
        contacts.push(newContact);

        connection.mockRespond(new Response(new ResponseOptions({body: newContact})));
        return;
      }

      // Update contact
      if (connection.request.method === RequestMethod.Post && connection.request.url.match('/contacts/*')) {
        logRequest(connection.request);

        const updatedContact = JSON.parse(connection.request.getBody());
        const index = contacts.findIndex(contact => contact.id === updatedContact.id);

        contacts[index] = updatedContact;

        connection.mockRespond(new Response(new ResponseOptions({body: updatedContact})));
        return;
      }

    }, 500);

  });

  return new Http(mockBackend, options);
}
