var fs = require("fs");

fs.readFile("emp.txt", function(err, data) {
    if(err)
        console.error("Error occured: ", err);
    
    //console.log(data);

    var arr = data.toString().split("\n");
    console.log(arr);

    var sum = 0;
    for(let i=0; i<arr.length; i++){
        
        console.log(arr[i].split(":")[3]);
        sum += parseInt(arr[i].split(":")[3]);
    }

    console.log("Sum is: ",sum);
});