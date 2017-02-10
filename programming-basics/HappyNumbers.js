/*

Let's say that "happy numbers" are those ones for which sum of their squares = 1, for example:

7 => 7^2 = 49, 49 => 4^2 + 9^2 = 16 + 81 = 97, 97 => 9^2 + 7^2 = 81 + 49 = 130, 130 => 1^2 + 3^2 + 0^2 = 10, 10 => 1^2 + 0^2 = 1

Task: write the finction happyNumber, that returns 'true', if a number is "happy", and 'false' if not. Maximum amount of iterations = 10

*/

const sumDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < strings.length(numAsStr); i++) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};

export const happyNumber = (num) => {
  const iter = (current, acc) => {
    if (acc === 10) {
      return false;
    }
    if (sumDigits(current) === 1) {
      return true;
    }
    return iter(sumDigits(current), acc + 1);
  };
  return iter(num, 1);
};
