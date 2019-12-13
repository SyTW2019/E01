import { DashboardPage } from '../pages/dashboard.po';
import { LoginPage } from '../pages/login.po';
import { expect } from 'protractor';
import { defineSupportCode, BeforeAll } from 'cucumber';

let loginPage: LoginPage;
let dashboardPage: DashboardPage;

BeforeAll(() => { 
    loginPage = new LoginPage();
    dashboardPage = new DashboardPage();
});

defineSupportCode(({Given, When, Then}) => {
  // -------------
  //  Scenario #1
  // -------------
  Given(/^Estoy autentificado/, () => {
    loginPage.navigateTo();
    loginPage.fillCredentials();
    expect(dashboardPage.getApuntesList()).to.be.above(1);
  });
  When(/^Carga el dashboard/, () => {
    return true;
  });
  Then(/^Debería mostrarse la lista de apuntes/, () => {
    return true;
  });

});
