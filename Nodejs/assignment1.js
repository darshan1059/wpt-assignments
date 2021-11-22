exports.greets = function(){

    let n = new Date();

    let givenTime = n.getHours();

    if (givenTime > 5 && givenTime < 12) 
    {
        console.log("Good Morning..!");
    } 
    else if (givenTime > 12 && givenTime < 17) {
        console.log("Good Afternoon");
    } 
    else {
        console.log("Good evening");
    }

}