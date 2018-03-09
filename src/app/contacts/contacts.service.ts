import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';

@Injectable()
export class ContactsService {

  private url = '/api/contacts';

  constructor(private http: HttpClient) {}

  getContacts(): Promise<Contact[]> {
    return this.http.get<Contact[]>(this.url)
      .toPromise()
      .catch(this.handleError);
  }

  deleteContact(id: string): Promise<Object> {
    const url = `${this.url}/${id}`;

    return this.http.delete(url)
      .toPromise()
      .catch(this.handleError);
  }

  saveContact(contact: Contact): Promise<Contact> {
    const url = `${this.url}`;

    return this.http.post<Contact>(url, contact)
      .toPromise()
      .catch(this.handleError);
  }

  updateContact(contact: Contact) {
    const url = `${this.url}/${contact.id}`;

    return this.http.put<Contact>(url, contact)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
