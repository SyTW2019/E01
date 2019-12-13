import { browser, by, element } from 'protractor';

export class LoginPage {
    private credentials = {
    username: 'unocualquiera',
    password: '123456',
    };

    fillCredentials(credentials: any = this.credentials) {
        element(by.name('username')).sendKeys(credentials.username);
        element(by.name('password')).sendKeys(credentials.password);
        element(by.id('login_submit')).click();
      }

    navigateTo() {
        return browser.get('/login');
    }

} 
