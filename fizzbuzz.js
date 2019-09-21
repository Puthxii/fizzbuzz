class FizzBuzz {
  static say(number) {
    if (number % 3 == 0 && number % 5 == 0) {
      return "fizz buzz";
    } else if (number % 3 == 0) {
      return "fizz";
    } else if (number % 5 == 0) {
      return "buzz";
    } else {
      return number;
    }
  }
}

module.exports = FizzBuzz;
