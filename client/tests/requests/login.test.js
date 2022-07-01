/** @jest-environment jsdom */
global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;


const jsdom = require('jsdom')
const {JSDOM} = jsdom;
global.fetch = require('jest-fetch-mock');
//const login = require('../../static/js/login');
//global.document = new JSDOM(html).window.document;

describe('code', () => {

    let fetchMock;
    let assignMock;
    //jest.mock('../../static/js/login')
    beforeEach(() => {
      // Jest uses jsdom as the default test environment which emulates
      // a browser and provides a document object for the unit tests.
      // Initialize the document body with the HTML needed for the tests
        document.body.innerHTML += `
            <form id="loginForm">
            <input type="text" id="email" name="email" value="the email">
            <input type="text" id="password" value="the password">
            <i class="far fa-eye" id="togglePassword" style="margin-left: -30px; cursor: pointer;"></i>
            <input type="submit" id="loginButton">
            </form>
            <div id="white"></div>
        `;
        const login = require('../../static/js/login');

      // Create a mock for fetch and provide a mock implementation
      // so the unit tests aren't actually making network requests
      fetchMock = jest.spyOn(global, 'fetch');
      fetchMock.mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({ message: 'Your account was created' })
      }));
      // Create a mock for window.location.assign()
      // so the unit tests aren't actually changing the window location
    //   assignMock = jest.spyOn(window.location, 'assign');
    //   assignMock.mockImplementation(() => {});
    //   // With everything set up, require the code
    //   require('./code');
    });
  
    afterEach(() => {
      // After each test call mockRestore() to restore the original functions
      fetchMock.mockRestore();
      assignMock.mockRestore();
      // resetModules() resets the module registry in Jest and ensures
      // a fresh copy of './code' executes on require()
      jest.resetModules();
    });
  
    it('should fetch data, change contents of #white, and change the page location on submit', async () => {
      // Submit the form
      document.getElementById('loginButton').click();
  
      // Check that fetch was called with the expected arguments
      expect(fetchMock).toHaveBeenCalledTimes(1);
      const fetchArgs = fetchMock.mock.calls[0];
      expect(fetchArgs[0]).toBe('https://diaryapi-v2.herokuapp.com/api/login');
      expect(fetchArgs[1]).toEqual({
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: 'the username',
          password: '123',
        })
      });
  
      // pause synchronous execution of the test for two event loop cycles
      // so the callbacks queued by the then()'s within signUp have a chance to run    
      await Promise.resolve().then();
  
      // Check that window.location.assign() was called with the expected arguments
      expect(assignMock).toHaveBeenCalledTimes(1);
      expect(assignMock.mock.calls[0][0]).toBe('/signin');
  
      // Check that #white was updated
      expect(document.getElementById('white').innerHTML).toBe('Your account was created');
    });
  
  });
