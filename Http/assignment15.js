const fs = require("fs");
const url = require("url");
const http = require("http");

const server = http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    if (req.method == "GET" && q.pathname == "/") {
        fs.readFile("./assignment15.html", (err, data) => {
            if (err) {
                res.writeHead(404, {
                    "Content-Type": "text/html"
                });
                res.write("<h1>404 Error Not Found</h1>");
                res.end();
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                res.write(data);
                res.end();
            }
        });
    } else if (req.method == "GET" && q.pathname == "/process") {
        let length = q.query.l;
        let breadth = q.query.b;
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.write("The Area is: " + length * breadth);
        res.end();
    } else {
        res.writeHead(404, {
            "Content-Type": "text/html"
        });
        res.write("Not Found");
        res.end();
    }
});

server.listen(3000,"localhost", () => {
    console.log("listening");
});