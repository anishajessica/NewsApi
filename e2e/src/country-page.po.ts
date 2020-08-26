import { browser, by, element } from 'protractor';

export class AppPage {

  navigateToFirstPage() {
    browser.get('/');
  }
  getCurrent() {
    return browser.getCurrentUrl();
  }

  getBrowserTitleText() {
    return browser.getTitle() as Promise<string>;
  }

  getTitleText() {
    return element(by.css('#title span')).getText() as Promise<string>;
  }
  getSearchBar() {
    return element(by.css('nav input'));
  }
  loginButton() {
    return element(by.cssContainingText('nav a', 'Login'));
  }
  favButton() {
    return element(by.cssContainingText('nav a', 'Favorites'));
  }
}
