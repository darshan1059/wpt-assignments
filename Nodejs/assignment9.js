var fs = require("fs");

var arrObj = [{"empid":1001,"empname":"Harry","empsalary":23000},
           {"empid":1002,"empname":"Sarita","empsalary":20000},    
           {"empid":1003,"empname":"Monika","empsalary":35000}]

var data = "";
for(ele of arrObj){
    console.log(ele);
    data = data + ele.empid+":"+ele.empname+":"+ele.empsalary+"\n";
    console.log(data);
    fs.writeFile("textForAss9.txt", data, (err) => {
        if(err) 
            console.error("Error Occured: "+err);
        else
            console.log("Added Successfully");
    })
};
