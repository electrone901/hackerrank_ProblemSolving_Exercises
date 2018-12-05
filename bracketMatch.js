/*
Bracket Match
A string of brackets is considered correctly matched if every opening bracket in the string can be paired up with a later closing bracket, and vice versa. For instance, “(())()” is correctly matched, whereas “)(“ and “((” aren’t. For instance, “((” could become correctly matched by adding two closing brackets at the end, so you’d return 2.

Given a string that consists of brackets, write a function bracketMatch that takes a bracket string as an input and returns the minimum number of brackets you’d need to add to the input in order to make it correctly matched.

Explain the correctness of your code, and analyze its time and space complexities.

Examples:

input:  text = “(()”
output: 1

input:  text = “(())”
output: 0

input:  text = “())(”
output: 2
  
    PSEUDO CODE:
    The trick for this problem is to realize that we need to match the number 
    of brackets so for any open/close we need to add 1 to completed but if we 
    have open we can substract and get a complement but if not we need to add 1 
    to close and @ the end return open + close;

    if(str[i] == '(') open++
    else if(open > 0 && str[i] == ')') open-- //that means we can substract to it
    but if we cannot do it we need to:
    else { close++}
    return open + close; // because that's how many we need to match them so that     are complete.
  */

  
function bracketMatch(str) {
  var open = 0;
  var close = 0;
  for(var i=0; i < str.length; i++) {
    if(str[i] == '(') {
      open++;
    } 
    else if(open > 0 && str[i] == ')') {
      open--;
    }
    else {
      close++;
    }
  }
  return open + close;
}