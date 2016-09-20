import { ZundePage } from './app.po';

describe('zunde App', function() {
  let page: ZundePage;

  beforeEach(() => {
    page = new ZundePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
