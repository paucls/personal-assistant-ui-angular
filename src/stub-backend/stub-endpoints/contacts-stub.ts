import { Contact } from '../../app/contacts/contact';
import { contactFixtureFactory } from '../../app/contacts/contact-fixture.factory';

export const contacts: Contact[] = contactFixtureFactory.buildList(5);
