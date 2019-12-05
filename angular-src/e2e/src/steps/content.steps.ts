const {defineSupportCode} = require('cucumber');
import { expect } from 'chai';

import { ContentPage } from '../pages/content.po';

let page: ContentPage;

Before(() => {
    page = new ContentPage();
});


defineSupportCode(function ({Given, When, Then}) {
  // -------------
  //  Scenario #1
  // -------------
  Given(/^que he ingresado en la página "(.*)"$/, function(param1) {
    return true;
  });
  When(/^estoy autenticado$/, function() {
    return true;
  });
  When(/^estoy intentando acceder de forma manual (sin parámetro) o con un id inexistente$/, function() {
    return true;
  });
  When(/^carga la página$/, function() {
    return true;
  });
  Then(/^debería mostrarse una vista de error de contenido inexistente$/, function() {
    return true;
  });
  // -------------
  //  Scenario #2
  // -------------
  Given(/^que soy redirigido desde el listado de contenidos$/, function() {
    return true;
  });
  When(/^acabo por ingresar en la página "(.*)"$/, function(param1) {
    return true;
  });
  When(/^estoy autenticado$/, function() {
    return true;
  });
  When(/^le estoy dando un parámetro "(.*)" tal que "(.*)"$/, function(param1, param2) {
    return true;
  });
  When(/^carga la página$/, function() {
    return true;
  });
  Then(/^debería volcarse la información del contenido dado el parámetro id$/, function() {
    return true;
  });
});
