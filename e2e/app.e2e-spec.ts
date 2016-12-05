import { BindDataPage } from './app.po';

describe('bind-data App', function() {
  let page: BindDataPage;

  beforeEach(() => {
    page = new BindDataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
