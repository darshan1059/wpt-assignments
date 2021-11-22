const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    fs.readFile("./welcome.html", (err,data) => {
        if(err){
            res.writeHead(400, { "Content-Type": "text/plain" });
            res.write("error");
        }
        else{
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        }
    });
});

server.listen(3000,"localhost", () => {
    console.log("listening");
});