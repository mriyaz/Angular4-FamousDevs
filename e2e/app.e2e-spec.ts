import { Angular4FamousDevsPage } from './app.po';

describe('angular4-famous-devs App', () => {
  let page: Angular4FamousDevsPage;

  beforeEach(() => {
    page = new Angular4FamousDevsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
