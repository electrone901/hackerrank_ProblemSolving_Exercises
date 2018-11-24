 
    //dnotq -> crime
    subtract = 1
    char[] c = word.toCharArray();
    dnotq -> [d, n, o, t, q]
    cur = d
    cur - subtract = c
    append c to the string
    
    StringBuilder sb = new StringBuilder();
    for(int i = 0; i < word.length(); i++)
      {
        int cur = c[i]; //integer
        cur -= substract;
       while(cur < 'a') cur + 26;
        c[i] = (char) cur //character
        sb.append(c[i])
        subtract + cur;
      }
    



drawHTree()

Write a function drawHTree that constructs an H-tree, given its center (x and y coordinates), a starting length, and depth. Assume that the starting line is parallel to the X-axis.

//(x and y coordinates)
function drawHTree( 1, 1, 2, 3) {
  3 -> 2 -> 1 -> 0
 if (depth == 0):
        return
  x0 = x - length/2
  x1 = x + length/2
  y0 = y - length/2
  y1 = y + length/2
  
   drawLine(x0, y0, x0, y1)    # left segment
   drawLine(x1, y0, x1, y1)    # right segment
   drawLine(x0,  y, x1,  y)    # connecting segment
   
   newLength = length/root(2)
|--||--|
  |--|
|--||--|
  
  
  drawHTree(x0, y0, newLength, depth-1)     # lower left  H-tree
  drawHTree(x0, y1, newLength, depth-1)     # upper left  H-tree
  drawHTree(x1, y0, newLength, depth-1)     # lower right H-tree
  drawHTree(x1, y1, newLength, depth-1)     # upper right H-tree
  

console.log();  

Hola Dreamers! I want to make a free app that helps our students and 
provide a platform for them to build amazing things for our community.

any App Idea that allows me to do this?
 that you think it can help you to 
 about how to help our students in our community? 
 talent from 
underrepresented and diverse backgrounds and provide a platform for you to build 
amazing things for your community."

  for Lehman College hackathon 
"the focus is on highlighting, supporting, and encouraging student talent from 
underrepresented and diverse backgrounds and provide a platform for you to build 
amazing things for your community."

 https://nshacks.com/index.html#about


