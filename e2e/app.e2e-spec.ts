import { AirPayPage } from './app.po';

describe('air-pay App', () => {
  let page: AirPayPage;

  beforeEach(() => {
    page = new AirPayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
