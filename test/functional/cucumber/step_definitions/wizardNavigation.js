var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

var navWizard = element(by.css(".nav-wizard"));

module.exports = function() {

    this.Then(/^I see a navigation wizard$/, function (next) {
        expect(navWizard.isPresent()).to.eventually.be.true.notify(next);
    });

};
