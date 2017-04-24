import { Af2FeedPage } from './app.po';

describe('af2-feed App', () => {
  let page: Af2FeedPage;

  beforeEach(() => {
    page = new Af2FeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
