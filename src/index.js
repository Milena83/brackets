module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let allBrackets = bracketsConfig.join('').replace(/,/g, '');
  for (let bracket of str) {
      let bracketsIndex = allBrackets.indexOf(bracket)
        if (bracketsIndex % 2 === 0) {    
            if (bracket === allBrackets[bracketsIndex + 1] && stack[stack.length - 1] === bracketsIndex){
                    stack.pop();
            } else if (bracket === allBrackets[bracketsIndex + 1] && stack[stack.length - 1] !== bracketsIndex) {
                    stack.push(bracketsIndex)
            }
            else{
                    stack.push(bracketsIndex)
                }
            } 
        else {
                if (stack.pop() !== bracketsIndex-1){
                    return false;
                }
            }
            
        }
        return stack.length === 0
}