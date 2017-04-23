import { ContactsUiAngularPage } from './app.po';

describe('contacts-ui-angular App', () => {
  let page: ContactsUiAngularPage;

  beforeEach(() => {
    page = new ContactsUiAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
