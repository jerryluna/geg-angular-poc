import { GegAngularPocPage } from './app.po';

describe('geg-angular-poc App', () => {
  let page: GegAngularPocPage;

  beforeEach(() => {
    page = new GegAngularPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
