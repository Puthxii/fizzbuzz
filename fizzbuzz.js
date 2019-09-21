class FizzBuzz {
  static say(number) {
    let result = number;
    switch (true) {
      case number % 3 === 0 && number % 5 === 0:
        result = "fizz buzz";
        // code block
        break;
      case number % 3 === 0:
        result = "fizz";
        // code block
        break;
      case number % 5 === 0:
        result = "buzz";
        // code block
        break;
      default:
        result = number;
      // code block
    }
    return result;
  }
}

module.exports = FizzBuzz;
