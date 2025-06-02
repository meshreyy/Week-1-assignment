## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```



var fs = require ('fs');

function data1(err, data)
{
  if(err)
  {
    console.log("Error is found.");
  }
  else
  {
    // read the ffile's content 
    let content = data.toString();
    content = content.replace(/\s+/g, ' ');

    fs.writeFile('output.txt', content , data2)
    
  }
}

function data2(err)   //in writing only err is passed as parameter
{
  if(err)
  {
    console.log("Error is found");
  }
  else
  {
    console.log("File cleaned and saved");
  }
}




fs.readFile('output.txt', data1);
