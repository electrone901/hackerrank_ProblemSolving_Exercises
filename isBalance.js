/*
Write a funcion that it takes a string and 
checks if it a balance parenthesis;

PSEUDO CODE:
 - have an object with open character set to true
 - have an obj with closed char set to its pair
 - check if it is open push to the stock
 - if it is close check if equals stack.pop()
 - if not return false 
 - if yes continue and increase i
*/

function isBalanced(str) {
  isOpen = {
    '{': true,
    '(': true,
    '[': true
  };
  isClosed = {
    '}':'{',
    ')': '(',
    ']': '['
  };
  let stack = [];
  let i =0;
  
  while(i < str.length) {
    if(isOpen[str[i]]) {
      stack.push(str[i]);
    }
    else if(isClosed[str[i]]) {
      corresp = isClosed[str[i]];
      if(corresp !== stack.pop()){
        return false;
      }
    }
    i++;
  }
  if(stack.length > 0) {
    return false;
  }
  else {
    return true;
  }
}
isBalanced('{(){}}');


