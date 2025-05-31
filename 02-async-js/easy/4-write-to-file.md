## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.



var fs = require('fs');


console.log("Started reading file...");



function data1(err)
{
  if(err)
  {
    console.log("Error is found");
  }
  else
  {
    console.log("Writing completed");
  }
}


fs.writeFile('output.txt', 'HELLO IN FILE', data1);

