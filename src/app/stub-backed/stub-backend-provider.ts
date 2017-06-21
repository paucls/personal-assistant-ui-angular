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

  const CONTACTS: Contact[] = [
    {id: 'contact-1', firstName: 'John', lastName: 'Walsh', company: 'Hackett and Sons', phone: '1-352-850-5507', email: 'Abbigail37@gmail.com'},
    {id: 'contact-2', firstName: 'Ana', lastName: 'Clark', company: 'Ankunding LLC', phone: '845.600.0439', email: 'Carmela6@yahoo.com'}
  ];

  mockBackend.connections.subscribe((connection: MockConnection) => {

    // wrap in timeout to simulate server api call
    setTimeout(() => {

      // Get all contacts
      if (connection.request.method === RequestMethod.Get && connection.request.url.match('/contacts$')) {
        logRequest(connection.request);

        connection.mockRespond(new Response(new ResponseOptions({body: CONTACTS.slice()})));
        return;
      }

    }, 500);

  });

  return new Http(mockBackend, options);
}
