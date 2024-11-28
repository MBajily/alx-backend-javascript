const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber', () => {
    const calculateNumberStub = sinon.spy(Utils, 'calculateNumber');
    
    sendPaymentRequestToApi(100, 20);
    
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    
    calculateNumberStub.restore();
  });
});
