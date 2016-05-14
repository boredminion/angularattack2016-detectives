import { DetectivesPage } from './app.po';

describe('detectives App', function() {
  let page: DetectivesPage;

  beforeEach(() => {
    page = new DetectivesPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('detectives works!');
  });
});
