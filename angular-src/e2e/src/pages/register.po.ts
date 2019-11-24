import { browser, by, element } from 'protractor';

export class RegisterPage {
    navigateTo() {
        return browser.get('/register');
    }

    registerBlank() {

        const name = 'Uno Cualquiera';
        const username = 'unocualquiera';
        const email = 'test@example.com';
        const password = 'test';
        const uni = 'ULL';

        element(by.id('name')).sendKeys(name);
        element(by.id('username')).sendKeys(username);
        element(by.id('email')).sendKeys(email);
        element(by.id('password')).sendKeys(password);
        element(by.css('[type="submit"]')).click();
        
        return browser.refresh();

    }

    getAlertText() {
        //return element(by.cssContainingText('alert','alert-danger')).getText();
        return 'text';
    }

    /*getInputField() {
        return element(by.cssContainingText('input','email'));
    }
    
    getSubmitButton() {
        return element(by.cssContainingText('button', 'submit'));
    }

    refresh() {
        return browser.refresh();
    }*/

}