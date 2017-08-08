import { MailPage } from './app.po';

describe('mail App', () => {
  let page: MailPage;

  beforeEach(() => {
    page = new MailPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
