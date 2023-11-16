/* Testing in js */
/*
Documentation: https://www.freecodecamp.org/news/how-to-start-unit-testing-javascript/

Mocha, Jest,  Jasmine, Karma, Puppeteer - A JavaScript testing framework.

Different types of testing:
Unit tests
Integration tests

We can write tests in the same file, but a good practice is to separate unit tests into a dedicated file.

The common naming patterns include {filename}.test.js and {filename}.spec.js. 

*/

const englishCode = "en-US";
const spanishCode = "es-ES";
function getAboutUsLink(language){
    switch (language.toLowerCase()){
      case englishCode.toLowerCase():
        return '/about-us';
      case spanishCode.toLowerCase():
        return '/acerca-de';
    }
    return '';
}
module.exports = getAboutUsLink;