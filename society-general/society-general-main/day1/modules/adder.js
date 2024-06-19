/* 
// inline export 
export function adder(num1, num2){
    return num1 + num2;
}; 
*/

import Pson from "./person.js";

function adder(num1, num2){
    return num1 + num2;
}; 

function multiplier(num1, num2){
    return num1 * num2;
}; 


// alias export
// export { adder as sum }

// named export
export default adder;
export { multiplier, Pson }

