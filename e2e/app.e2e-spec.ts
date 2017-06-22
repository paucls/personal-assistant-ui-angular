import {PersonalAssistantPage} from './app.po';

describe('Personal Assistant App', () => {
  let page: PersonalAssistantPage;

  beforeEach(() => {
    page = new PersonalAssistantPage();
    page.go();
  });

  it('should display application title', () => {
    expect(page.getNavbarTitle()).toEqual('Personal Assistant');
  });

  it('should display signed in user name', () => {
    expect(page.getSignedInUser()).toEqual('John Doe');
  });

});
