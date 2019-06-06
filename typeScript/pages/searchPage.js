"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class SearchPageObject {
    constructor() {
        this.searchTextBox = protractor_1.$("#search");
        this.searchButton = protractor_1.$("#searchButton");
        this.logo = protractor_1.$("div.logo img");
    }
}
exports.SearchPageObject = SearchPageObject;
