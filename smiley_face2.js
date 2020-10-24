
let s = ':)::(()::'

function happinessNumber(s) {
  let sadReg = [];
  let happyReg = [];
	let sadReg1 = s.match(/:\(/g);
	let sadReg2 = s.match(/\):/g);

 let happyReg1 = s.match(/:\)/g);
 let happyReg2 = s.match(/\(:/g);

if (sadReg1 !== null) {
    sadReg1.forEach(elem => sadReg.push(elem));
}

if (sadReg2 !== null) {
  sadReg2.forEach(elem => sadReg.push(elem))
}

if (happyReg1 !== null) {
  happyReg1.forEach(elem => happyReg.push(elem));
}

if (happyReg2 !== null) {
  happyReg2.forEach(elem => happyReg.push(elem));
}

return happyReg.length - sadReg.length;

}
