import { MelakeepPage } from './app.po';

describe('melakeep App', () => {
  let page: MelakeepPage;

  beforeEach(() => {
    page = new MelakeepPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
