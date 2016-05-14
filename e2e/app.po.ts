export class DetectivesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('detectives-app p')).getText();
  }
}
