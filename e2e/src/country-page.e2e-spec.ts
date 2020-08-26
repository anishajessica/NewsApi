import {AppPage} from './country-page.po'

describe('First page',()=>{
  let page=new AppPage();
  beforeAll(()=>{
  page.navigateToFirstPage();
  })

  it('should navigate to country page',()=>{
    expect(page.getCurrent()).toContain('/home/countryPage');
  })

    it('should have correct title',()=>{
    expect(page.getBrowserTitleText()).toBe('NEWS STAND');
    })

    it('should have toolbar with correct title',()=>{
      expect(page.getTitleText()).toBe('THE NEWS STAND');
    })
      
    it('toolbar should have search bar',()=>{
      expect(page.getSearchBar()).toBeTruthy();
    })

    it('toolbar should have login link',()=>{
      expect(page.loginButton()).toBeTruthy();
    })

    it('login link to navigate to login page',()=>{
      page.loginButton().click();
      expect(page.getCurrent()).toContain('/login');
    })
    it('favorites link to navigate to login page when unauthorized',()=>{
      page.favButton().click();
      expect(page.getCurrent()).toContain('/login');
    })

})