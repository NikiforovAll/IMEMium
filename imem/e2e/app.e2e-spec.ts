import { ImemPage } from './app.po';

describe('imem App', function() {
  let page: ImemPage;

  beforeEach(() => {
    page = new ImemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
