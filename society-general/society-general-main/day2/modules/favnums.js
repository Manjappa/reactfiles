let favNum = [9,11,6,14,5,6,99,88,17,4,59,22,7,13,20,76];
let favNumGtThan50 = favNum.filter(val => val > 50 );
let total = favNumGtThan50.reduce((initVal,val) => initVal + val, 0)
export default favNum;
export { favNumGtThan50, total };