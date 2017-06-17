import {PersonalAssistantPage} from './app.po';

describe('Personal Assistant App', () => {
  let page: PersonalAssistantPage;

  beforeEach(() => {
    page = new PersonalAssistantPage();
  });

  it('should display application title', () => {
    page.navigateTo();
    expect(page.getNavbarTitle()).toEqual('Personal Assistant');
  });
});
