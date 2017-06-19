import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { environment } from '../../environments/environment';
import { logRequest, generateUuid, getUuidFromUrl } from './stub-backend-utils';

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

  mockBackend.connections.subscribe((connection: MockConnection) => {

    // wrap in timeout to simulate server api call
    setTimeout(() => {

    }, 500);

  });

  return new Http(mockBackend, options);
}
