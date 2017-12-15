import { Chance } from 'chance';
import { FixtureFactory } from '../core/fixture-factory';
import { Contact } from './contact';

const chance = new Chance();

class ContactFixtureFactory extends FixtureFactory<Contact> {
  build(attributes?) {
    return {
      id: chance.guid(),
      firstName: chance.word(),
      lastName: chance.word(),
      company: chance.word(),
      phone: chance.word(),
      email: chance.word(),
      address: chance.word(),
      notes: chance.word(),
      ...attributes
    };
  }
}

export const contactFixtureFactory = new ContactFixtureFactory();
