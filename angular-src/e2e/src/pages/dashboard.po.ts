import { browser, by, element } from 'protractor';

export class DashboardPage {


    navigateTo() {
        return browser.get('/dashboard');
    }

    getApuntesList() {
        return element(by.id('ApuntesListBody'));
    }

}