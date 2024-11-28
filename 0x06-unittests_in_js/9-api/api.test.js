const { expect } = require('chai');
const request = require('request');

describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865/cart';

  it('should return correct status code when :id is a number', (done) => {
    request(`${baseUrl}/12`, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result when :id is a number', (done) => {
    request(`${baseUrl}/12`, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 when :id is not a number', (done) => {
    request(`${baseUrl}/hello`, (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
