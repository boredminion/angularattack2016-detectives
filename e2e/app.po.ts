export class DetectivesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('detectives-app h1')).getText();
  }
}
