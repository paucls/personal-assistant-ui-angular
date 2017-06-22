import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Http } from '@angular/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ContactsComponent } from './contacts.component';
import { ContactsService } from './contacts.service';
import { Contact } from './contact';

describe('ContactsComponent', () => {

  const CONTACT_1: Contact = {id: 'contact-1', firstName: 'John Doe'};
  const CONTACT_2: Contact = {id: 'contact-2', firstName: 'Ana Clark'};

  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;
  let contactsDe: DebugElement;
  let contactsEl: HTMLElement;
  let contactsService: ContactsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsComponent ],
      providers: [
        ContactsService,
        {provide: NgbModal, useClass: class NgbModalStub {}},
        {provide: Http, useClass: class HttpStub {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;

    // ContactsService from the root injector
    contactsService = fixture.debugElement.injector.get(ContactsService);

    // Setup spy on the getContacts method
    spyOn(contactsService, 'getContacts').and.returnValue(Promise.resolve([CONTACT_1, CONTACT_2]));

    // query for the list-group by CSS element selector
    contactsDe = fixture.debugElement.query(By.css('div#contacts'));
    contactsEl = contactsDe.nativeElement;
  });

  it('should display the list of contacts', fakeAsync(() => {
    fixture.detectChanges();
    tick(); // wait for async getAll
    fixture.detectChanges(); // update view with tasks

    const contactRowDe = contactsDe.queryAll(By.css('tbody > tr'));
    expect(contactsService.getContacts).toHaveBeenCalled();
    expect(contactRowDe.length).toBe(2);
    expect(contactRowDe[0].nativeElement.textContent).toContain(CONTACT_1.firstName);
    expect(contactRowDe[1].nativeElement.textContent).toContain(CONTACT_2.firstName);
  }));

});
