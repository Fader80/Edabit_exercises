//https://edabit.com/challenge/pkJWJAvpnqp6rCY9y
//Find Unique Number in an Array - it has a unique number of occurrences

function findSingleNumber(numbers) {

  if (numbers.length === 0) return null;

  let combiArr = [];

  let uniqueArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (uniqueArr.indexOf(numbers[i]) === -1) {
      uniqueArr.push(numbers[i]);
    }
  }

  for (let k = 0; k < uniqueArr.length; k++) {
    combiArr[k] = numbers.filter(elem => elem === uniqueArr[k]);
  }

  combiArr.sort((a, b) => b.length - a.length);

  return combiArr[combiArr.length - 1][0];

}