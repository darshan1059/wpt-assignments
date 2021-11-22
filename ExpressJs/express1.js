let express = require("express")
let app = express();

// app.get("/", function (req,res){
//     res.send("<h1> welcome to the page</h1>")
// })

app.get("/", function (req,res){
    let str = "<h1> Welcome to the firts page</h1>";
    let d1 = new Date();
    str += "today is" + d1.toString();
    res.send(str);
})

app.get("/admin", function (req,res){
    res.send("<h1> welcome to the admin page</h1>")
})


app.get("/foo", function (req,res){
    res.send("<h1> welcome to the foo page</h1>")
})


app.listen(3000, () => {
    console.log("App is listening on http://localhost:3000")
})

