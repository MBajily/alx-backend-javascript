const { expect } = require('chai');
const request = require('request');

describe('Available Payments', () => {
  const url = 'http://localhost:7865/available_payments';

  it('should return correct payment methods', (done) => {
    request(url, (error, response, body) => {
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('Login', () => {
  const url = 'http://localhost:7865/login';

  it('should welcome the user', (done) => {
    const options = {
      url,
      method: 'POST',
      json: { userName: 'Betty' }
    };

    request(options, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
