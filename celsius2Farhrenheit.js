// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9 / 5, plus 32.

// You are given a variable celsius representing a temperature in Celsius.Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature.Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

// Don't worry too much about the function and return statements as they will be covered in future challenges. For now, only use operators that you have already learned.

function celsiusToF(temp) {
    return (temp * (9 / 5)) + 32;
}

celsiusToF2 = (temp) => (temp * (9 / 5)) + 32;

require('mocha');
const expect = require('chai').expect;
const log = console.log;

describe('ES5 Unit Testing: Celsius To  Fahrenheit', () => {
    const temps = [0, -30, -10, 20, 30]
    const convertedTemps = [32, -22, -14, 68, 86]

    const tests = temps.map((el, index) => {
        return `it('should convert celsius to fahrenheit', () => {
        result = celsiusToF(${temps[index]});
        expect(result).to.equal(${convertedTemps[index]});
    });`;

    })
    it('should convert celsius to fahrenheit', () => {
        result = celsiusToF(temps[4]);
        expect(result).to.equal(86);
    });

    it('should convert celsius to fahrenheit', () => {
        result = celsiusToF(temps[0]);
        expect(result).to.equal(32);
    });

    it('should convert celsius to fahrenheit', () => {
        result = celsiusToF(temps[1]);
        expect(result).to.equal(-22);
    });

    it('should convert celsius to fahrenheit', () => {
        result = celsiusToF(temps[2]);
        expect(result).to.equal(14);
    });
});
describe('ES6 Unit Testing: Celsius To  Fahrenheit', () => {
    const temps = [0, -30, -10, 20, 30]
    it('should convert celsius to fahrenheit', () => {
        result = celsiusToF2(temps[4]);
        expect(result).to.equal(86);
    });

    it('should convert celsius to fahrenheit', () => {
        result = celsiusToF2(temps[0]);
        expect(result).to.equal(32);
    });

    it('should convert celsius to fahrenheit', () => {
        result = celsiusToF2(temps[1]);
        expect(result).to.equal(-22);
    });

    it('should convert celsius to fahrenheit', () => {
        result = celsiusToF2(temps[2]);
        expect(result).to.equal(14);
    });
});