var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

var path = require('path');

var navWizard = element(by.css(".nav-wizard"));

module.exports = function() {

    selectFile = function(fileName){
        var deferred = protractor.promise.defer();
        var fileSelector = element(by.id('file'));

        //Get filename as argument, convert into path, send path to selector on site.
        var fileToUpload = '../files/'+fileName;
        var absolutePath = path.resolve(__dirname, fileToUpload);

        fileSelector.sendKeys(absolutePath);
        deferred.fulfill();
        return deferred.promise;
    }

    this.When(/^I upload the "([^"]*)" file for validation$/, function (fileName, next) {
        selectFile(fileName).then(function(){
            next();
        });
    });

    this.Then(/^I see a navigation wizard$/, function (next) {
        expect(navWizard.isPresent()).to.eventually.be.true.notify(next);
    });

};
