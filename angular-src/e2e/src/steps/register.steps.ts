import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { RegisterPage } from '../pages/register.po';

let page: RegisterPage;

Before(() => {
    page = new RegisterPage();
});


// -------------
//  Scenario #1
// -------------

Given(/^I am on the register page/, () => {
    page.navigateTo();
});

When(/^I leave a blank field in the register form/, () => {
    page.registerBlank();
});

Then(/^I should see an alert notification/, () => {
    expect(page.getAlertText()).to.equal('text'); 
});


// -------------
//  Scenario #2
// -------------
/*
Given(/^I am on the register page again/, () => {
    page.navigateTo();
});


When(/^I introduce an invalid email/, () => {
    page.getInputField().sendKeys('');
    page.getSubmitButton().click();
});

Then(/^I should see another alert notification/, () => {
    expect(page.getAlertText()).to.equal('text'); 
});*/