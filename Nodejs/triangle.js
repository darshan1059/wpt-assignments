const isEquilateral = (side1, side2, side3) => {
    if (side1 == side2 && side1 == side3)
        return true;
    else
        return false;
};

const calcPerimeter = (side1, side2, side3) => {
    if (side1 + side2 < side3 || side2 + side3 < side1 || side1 + side3 < side2)
        return "Not a Valid Triangle for calculating perimeter";
    else
         return side1 + side2 + side3;
}

module.exports = {isEquilateral, calcPerimeter};