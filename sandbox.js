/* 
Leap Year can be:
    evenly divided by 4
    cannot be evenly divided by 100
    evenly divided by 400
*/

const { log } = console;

let userInput = 2000;

const is_leap = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  } else {
    return false;
  }
};

log(`${userInput} : ${is_leap(userInput)}`);

// HAPPY CODING!
// TIMMYSTROGE
