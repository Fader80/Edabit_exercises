//URL of challenge: https://edabit.com/challenge/vvuAkYEAArrZvmp6X
//My solution was the most thorough of all of them -> deep understanding of bitwise operators

function bitwiseAND(n1, n2) {
	let n1Bin = n1.toString(2).padStart(8,0);
  let n2Bin = n2.toString(2).padStart(8,0);

  let resNum = [];
  let bitNum = [];
  let exp = 0;

  for (let i = 0; i < n1Bin.length; i++) {
    if (n1Bin[i] === '1' && n2Bin[i] === '1') {
      resNum.push(1);
    } else {
      resNum.push(0);
    }
  }

  for (let k = resNum.length - 1; k >= 0; k--) {
    bitNum.unshift(resNum[k] * (2 ** exp));
    exp++;
  }
  
  return bitNum.reduce((accum, elem) => accum + elem);
}

function bitwiseOR(n1, n2) {
	let n1Bin = n1.toString(2).padStart(8,0);
  let n2Bin = n2.toString(2).padStart(8,0);

  let resNum = [];
  let bitNum = [];
  let exp = 0;

  for (let i = 0; i < n1Bin.length; i++) {
    if (n1Bin[i] === '1' || n2Bin[i] === '1') {
      resNum.push(1);
    } else {
      resNum.push(0);
    }
  }

  for (let k = resNum.length - 1; k >= 0; k--) {
    bitNum.unshift(resNum[k] * (2 ** exp));
    exp++;
  }
  
  return bitNum.reduce((accum, elem) => accum + elem);
}

function bitwiseXOR(n1, n2) {
	let n1Bin = n1.toString(2).padStart(8,0);
  let n2Bin = n2.toString(2).padStart(8,0);

  let resNum = [];
  let bitNum = [];
  let exp = 0;

  for (let i = 0; i < n1Bin.length; i++) {
    if (n1Bin[i] !== n2Bin[i]) {
      resNum.push(1);
    } else {
      resNum.push(0);
    }
  }

  for (let k = resNum.length - 1; k >= 0; k--) {
    bitNum.unshift(resNum[k] * (2 ** exp));
    exp++;
  }
  
  return bitNum.reduce((accum, elem) => accum + elem);
	
}