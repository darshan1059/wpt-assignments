var fs = require("fs");

fs.readFile("customer.json", function(err, data) {
    if(err)
        console.error("Error occured: ", err);
    else
        console.log(data.toString());
        var jsObj = JSON.parse(data);
        console.log(jsObj);
        for(element of jsObj){
            console.log(`Name of the customer is: ${element.name}  and his contact no is: ${element.ph_no}`);
        }
})