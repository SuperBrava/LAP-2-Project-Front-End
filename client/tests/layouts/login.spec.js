const fs = require('fs');
const { JSDOM } = require('jsdom');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../../login-page.html'), 'utf8');
const page = new JSDOM(html);

describe('index.html', () => {
    describe('head', () => {
        test('it has a title', () => {
            const title = page.window.document.querySelector('head title');
            expect(title).toBeTruthy();
            expect(title.textContent).toBe("Habit Tracker: Login")
        })
    })

    describe('body', () => {
        describe('button', () => {
            let button;

            beforeEach(() => {
                button = page.window.document.getElementById('loginButton')
            })

            test('it exists', () => {
                expect(button).toBeTruthy();
            })

            test('it has a call to action', () => {
                expect(button.value.toLowerCase()).toContain('login')
            })

        })
        describe('logo', () => {
            let logo;

            beforeEach(() => {
                logo = page.window.document.getElementsByClassName('logo')
            })
            test('it exists', () => {
                expect(logo).toBeTruthy();
            })
        })
        describe('form', () => {
            let form;
            let username;
            beforeEach(() => {
                form = page.window.document.querySelector('#loginForm')
                username = form.querySelector('#email');
            })
    
            test('it exists', () => {
                expect(form).toBeTruthy();
            });
    
            describe('form inputs', () => {
                test('it has an id of "email"', () => {
                    expect(username).toBeTruthy();
                })

                test('it is a text input"', () => {
                    expect(username.type).toBe('text')
                })
        
                test('it has a label"', () => {
                    expect(page.window.document.querySelector('[for="email"]')).toBeTruthy();
                })
            })

        })
    })


})