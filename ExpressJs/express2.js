let express = require("express")
let app = express();
let path = require("path");

// for string
app.get("/string", function (req,res){
    let str = "<h1> welcome to the page</h1>"
    res.send(str)  // 200 text/html
})

// for array
app.get("/array", function (req,res){
    let arr = ["aaa","bbb"]
    res.send(arr)  // 200 text/json
})

// for json
app.get("/json", function (req,res){
    let obj = {name:"darshan", age:25}
    res.send(obj)  // 200 text/json
})

//  for file
app.get("/file", function (req,res){
    res.sendFile(path.join(__dirname + '/summer.html'));  // 200 text/html
})

// for butter -- won't work now because i have my own reasons
app.get("/buffer", function (req,res){
    let buff = buffer.from("hello");
    res.send(buff) // 200 text/html
})

app.get(/\/products\/([^\/]+)\/?$/, function (req,res){
    res.send("Requested" + req.params[0])
})

app.listen(3000, () => {
    console.log("App is listening on http://localhost:3000")
})