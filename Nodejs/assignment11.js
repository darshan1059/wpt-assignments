var fs = require("fs");

var arrObj = [{
        "bookid": 101,
        "bname": "Tiple ki 101 kahaniya",
        "author": "babu",
        "price": 120
    },
    {
        "bookid": 102,
        "bname": "Manas ka kaufnak raaz",
        "author": "tabu",
        "price": 110
    },
    {
        "bookid": 103,
        "bname": "parshu ki jadui duniya",
        "author": "sabu",
        "price": 100
    }
]

fs.writeFile("book.txt", JSON.stringify(arrObj), (err) => {
    if (err) console.error(err);
    else console.log("File successfully written");
  });
  