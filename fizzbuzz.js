class FizzBuzz {
  static say(number) {
    let result = number;
    switch (true) {
      case this.mod(number, 15) === 0:
        result = "fizz buzz";
        // code block
        break;
      case this.mod(number, 3) === 0:
        result = "fizz";
        // code block
        break;
      case this.mod(number, 5) === 0:
        result = "buzz";
        // code block
        break;
      default:
        result = number;
      // code block
    }
    return result;
  }

  static mod(number, base) {
    return number - Math.floor(number / base) * base;
  }
}

module.exports = FizzBuzz;
