import { protractor, element, by } from 'protractor';
import { Utils } from '../utils';
let http = require('http');
let utils = new Utils();
import { browser } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
import { async } from 'q';
const { Given } = require("cucumber");
const { Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
import { BrowserUtil } from '../pages/browserUtil';
import { callbackify } from 'util';

const search: SearchPageObject = new SearchPageObject();
const browserutil: BrowserUtil = new BrowserUtil();


Then(/^I scroll to "([^"]*)"$/, async (text)=> {
    await browserutil.scrollDown();     
});

Then(/^I should see "([^"]*)"$/, async (text)=> {
    await this.utils.isPresent(element(by.cssContainingText('h1', text)));
});

Then(/^I click on "([^"]*)"$/, async (text)=> {
    browser.findElement(by.css('#biggestreleases > div > div:nth-child(2) > div > a > span')).click();
});

