import { DomfarolinoPage } from './app.po';

describe('domfarolino App', function() {
  let page: DomfarolinoPage;

  beforeEach(() => {
    page = new DomfarolinoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
