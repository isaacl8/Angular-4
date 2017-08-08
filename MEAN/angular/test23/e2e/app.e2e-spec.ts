import { Test23Page } from './app.po';

describe('test23 App', () => {
  let page: Test23Page;

  beforeEach(() => {
    page = new Test23Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
