const http = require("http");
const server = http.createServer((req, res) => {
    const d = new Date();
    const hour = d.getHours();
    let str = "";
    if (hour >= 5 && hour < 12) str = "<h1>Good Morning<h1>";
    else if (hour >= 12 && hour < 17) str = "<h1>Good Afternoon<h1>";
    else str = "<h1>Good Evening</h1>";
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(str);
    res.end(); 
});

server.listen(3000,"localhost", () => {
    console.log("listening");
});