const FizzBuzz = require("./fizzbuzz");
describe("Test Fizz", () => {
  test("Test 1 expect 1", () => {
    const result = FizzBuzz.say(1);
    expect(result).toEqual(1); // assert function
  });

  test("Test 2 expect 2", () => {
    const result = FizzBuzz.say(2);
    expect(result).toEqual(2); // assert function
  });

  test("Test 3 expect fizz", () => {
    const result = FizzBuzz.say(3);
    expect(result).toEqual("fizz"); // assert function
  });

  test("Test 4 expect 4", () => {
    const result = FizzBuzz.say(4);
    expect(result).toEqual(4); // assert function
  });

  test("Test 5 expect buzz", () => {
    const result = FizzBuzz.say(5);
    expect(result).toEqual("buzz"); // assert function
  });

  test("Test 15 expect fizz buzz", () => {
    const result = FizzBuzz.say(15);
    expect(result).toEqual("fizz buzz"); // assert function
  });

  test("Test 18 expect fizz", () => {
    const result = FizzBuzz.say(18);
    expect(result).toEqual("fizz"); // assert function
  });
});
