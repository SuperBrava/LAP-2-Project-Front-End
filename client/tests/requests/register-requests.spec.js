
const mock_value = ('hanibal', 'hanibal@gmail.com', '1234445@@');
const mock_return = {message: 'success'}

const fs = require('fs');
const { JSDOM } = require('jsdom');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../../static/js/register.js'), 'utf8');
const page = new JSDOM(html);


global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve()
}));
describe('testing register requests', () => {
    let response;
    describe('returns message when adding user', () => {
        beforeEach(async () => {
            response = newUser(mock_value)
        })
        it('returns response', () => {
            expect(repsonse).toEqual(mock_return);
        })
    })
})