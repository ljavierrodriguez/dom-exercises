
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './styles.css'), 'utf8');

jest.dontMock('fs');

describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
        document.documentElement.innerHTML = html.toString();
    });
    afterEach(() => { jest.resetModules(); });

    it('alert() function should be called', function () {

        /*
            Here is how to mock the alert function:
            https://stackoverflow.com/questions/41885841/how-to-mock-the-javascript-window-object-using-jest
        */
        global.alert = jest.fn((text) => null);

        //then I import the index.js (which should have the alert() call inside)
        const file = require("./index.js");

        //and I expect the alert to be already called.
        expect(alert.mock.calls.length).toBe(1);
        expect(alert).toHaveBeenCalledWith("theTitle");
    });

    it('querySelector function should be called once', function () {

        /*
            Here is how to mock the alert function:
            https://stackoverflow.com/questions/41885841/how-to-mock-the-javascript-window-object-using-jest
        */
        //console.log(document);
        document.querySelector = jest.fn((selector) => {
            if(selector === '#theTitle') return { id: 'theTitle' };
            else return false;
        });

        //then I import the index.js (which should have the alert() call inside)
        const file = require("./index.js");

        //and I expect the alert to be already called.
        expect(document.querySelector.mock.calls.length).toBe(1);
        expect(document.querySelector).toHaveBeenCalledWith("#theTitle");
    });
});


describe('All the html should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
        document.documentElement.innerHTML = html.toString();
    });
    afterEach(() => { jest.resetModules(); });

    it('the html code should contain a script tag importing index.js', function () {

        // we can read from the source code
        expect(html.toString().indexOf(`<script src="./index.js"></script>`) > -1).toBeTruthy();

        //or use query selector to compare hoy mane scriptags do we have
        const scripts = document.querySelectorAll("script");
        expect(scripts.length).toBe(1);
    });
});