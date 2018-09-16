/*

You have been asked to help study the population of birds migrating across the continent. 
Each type of bird you are interested in will be identified by an integer value. 
Each time a particular kind of bird is spotted, its id number will be added to your array of sightings.
You would like to be able to find out which type of bird is most common given a list of sightings. 
Your task is to print the type number of that bird and if two or more types of birds are equally common, 
choose the type with the smallest ID number.

For example, assume your bird sightings are of types . There are two each of types  and , 
and one sighting of type . Pick the lower of the two types seen twice: type .

Function Description

Complete the migratoryBirds function in the editor below. It should return the lowest type number 
of the most frequently sighted bird.

migratoryBirds has the following parameter(s):

arr: an array of integers representing types of birds sighted
Input Format

The first line contains an integer denoting , the number of birds sighted and reported in the array . 
The second line describes  as  space-separated integers representing the type numbers of each bird 
sighted.

Constraints

It is guaranteed that each type is , , , , or .
Output Format

Print the type number of the most common bird; if two or more types of birds are equally common, 
choose the type with the smallest ID number.

Sample Input 0

6
1 4 4 4 5 3
Sample Output 0

4
Explanation 0

The different types of birds occur in the following frequencies:

Type :  bird
Type :  birds
Type :  bird
Type :  birds
Type :  bird
The type number that occurs at the highest frequency is type , so we print  as our answer.


 PSEDUO CODE:
  1 - Make a list with the five types of birds
  2 - Loop through the array recording the types of birds in the list by checking the type
  	  for every type you find one add one: list[ar[i]] +=1;  
  3 - get the most seen type from the list 
  4 - get the type from the list by returning the type id 
*/

function migratoryBirds(ar) {
    let list = [0,0,0,0,0,0,0];
    for(let i =0; i<ar.length; i++) {
        list[ar[i]] +=1;
    }
    let max = Math.max(...list);
    let result = list.indexOf(max);
    return result;
}