import { DashboardPage } from '../pages/dashboard.po';
import { LoginPage } from '../pages/login.po';
import { expect } from 'chai';
import { should } from 'chai-as-promised';
import { defineSupportCode, BeforeAll } from 'cucumber';
import { by } from 'protractor';

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
    dashboardPage.navigateTo();
    Promise.resolve(dashboardPage.getApuntesList().all(by.css("tr")).count()).should.eventually.above(1);
    //dashboardPage.getApuntesList().then((count) => {expect(count).to.be.above(1)
    return true;
  });

  When(/^Carga el dashboard/, () => {
    return true;
  });
  Then(/^Debería mostrarse la lista de apuntes/, () => {
    return true;
  });

});