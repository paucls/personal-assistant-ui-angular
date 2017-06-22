import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Contact } from './contact';

@Injectable()
export class ContactsService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private url = '/contacts';

  constructor(private http: Http) {}

  getContacts(): Promise<Contact[]> {
    return this.http.get(this.url, this.headers)
      .toPromise()
      .then(response => response.json() as Contact[])
      .catch(this.handleError);
  }

  deleteContact(id: string): Promise<Response> {
    const url = `${this.url}/${id}`;

    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
