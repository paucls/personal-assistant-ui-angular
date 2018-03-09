import { address, company, internet, lorem, name, phone, random } from 'faker';

import { FixtureFactory } from '../core/fixture-factory';
import { Contact } from './contact';

class ContactFixtureFactory extends FixtureFactory<Contact> {
  build(attributes?) {
    return {
      id: random.uuid(),
      firstName: name.firstName(),
      lastName: name.lastName(),
      company: company.companyName(),
      phone: phone.phoneNumber(),
      email: internet.email(),
      address: address.streetAddress(),
      notes: lorem.paragraph(),
      ...attributes
    };
  }
}

export const contactFixtureFactory = new ContactFixtureFactory();
