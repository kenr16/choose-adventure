import { ChoseAdventurePage } from './app.po';

describe('chose-adventure App', () => {
  let page: ChoseAdventurePage;

  beforeEach(() => {
    page = new ChoseAdventurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
