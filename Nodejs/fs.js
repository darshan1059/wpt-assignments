let fs = require("fs");

// sync methods
//fs.writeFileSync("test.txt","Welcome to file system..!");

//var data = fs.readFileSync("test.txt");
//console.log(data); // gives data in the form of buffer utf
//console.log(data.toString()); string format

//var data = fs.readFileSync("test.txt","utf8");
//console.log(data);

//fs.writeFileSync("test.txt","This is darshan..!");

//fs.appendFileSync("test.txt","This is darshan..!");

// async methods
fs.readFile("test.txt", function(err,data){
    if(err)
        console.error("Error Occured");
    console.log(data.toString());
})

fs.writeFile("data.txt","This is some data to be writen", function(err){
    if(err)
        console.error("Error Occured");
    console.log("data.txt successfully written..!");
})