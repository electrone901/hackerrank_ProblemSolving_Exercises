/*
  Pseudo code:
    1: check if canBePalindrome   
        - by hashing every character
        - since we only care about odds we can delete the character if exist otherwise we set it to "odd"
    2: if hash has more then 1 key then palindrome cannot be made, else call makePalindrome(s)
    
    3: in makePalindrome: split every character and then check if start is not eaqual to end then look for the same character equals to end and swap them.
    4: Repeat until start < end 
    5: Return the palindrome  
*/
function canBePalindrome(s) {
  let hash = {};
  s.split('').forEach((char) => {
    if(hash[char]) {
      delete hash[char];
    }
    else {
      hash[char] = "odd";
    }
  });

  if(Object.keys(hash).length <= 1) {
    return makePalindrome(s);
  }
  else {
    return console.log('Cannot be a palindrome!')
  }

}
canBePalindrome("raecrac"); // true 
// canBePalindrome("yakak"); // true
// canBePalindrome("travel"); // false


function makePalindrome(s){
  s = s.split("");
  let start = 0;
  let end = s.length-1;

  while(start < end) {
    if(s[start] !== s[end]) {
      let count = start +1;
      let go = true;
      if(count >= end){
        return false;
      }
      while(count < end && go) {
        if(s[count] === s[end]) {
          // swap letters
          let temp = s[start];
          let temp2 = s[count];
          s[start] = temp2;
          s[count] = temp;
          go = false;
        }
        else{
          count++; 
        }
        
      }
      if(count > end) {
        return false;
      } 
      
    }
    start++;
    end--;
    
  }
  var answer = s.join('');
  return answer;
}
