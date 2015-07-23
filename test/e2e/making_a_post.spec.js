var expect = require('chai').expect;

describe('making a post', function () {
  it('logs in and creates a new post', function () {
    // Go to homepage
    browser.get('http://localhost:3001');
    // click 'login'
    element(by.css('nav .login')).click();
    // fill out and submit login form
    element(by.model('username')).sendKeys('mcoronel');
    element(by.model('password')).sendKeys('password');
    element(by.css('form .btn')).click();

    // submit a new post on posts page
    var post = 'my new post'+Math.random(); 
    element(by.model('postBody')).sendKeys(post);
    element(by.css('form .btn')).click();
    // The user should now see their new posts as the first post on the page
    element.all(by.css('ul.list-group li')).first().getText().then(function (text) {
      expect(text).to.contain(post);
    });
  });
});