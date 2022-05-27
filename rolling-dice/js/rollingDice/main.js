// Put your code here
console.log("Let's roll some dice, baby!");
console.log("---------------------------");


// This method is automatically called when we create the "message" variable above
// By the way, a JavaScript object can have a toString() method too...
const getDieString = (value) => {

    let dieString = "Unknown";

    // This "switch" statement behaves like a series of "if/else if" statements.
    //  We compare the numeric value of the current object accross different "cases".
    //  When we find a matching case we return a string that represents an image of a die
    // Did you kow that JavaScript also has "switch" statements?
    switch (value) {
        /* "case 1:" is like the following "if" statement
        if (this.value == 1) {
            dieString = "one";
        }
        */
        case 1:
            dieString = "one"; // These \uXXXX values are fancy unicode characters
            break;
        case 2:
            dieString = "two";
            break;
        case 3:
            dieString = "three";
            break;
        case 4:
            dieString = "four";
            break;
        case 5:
            dieString = "five";
            break;
        case 6:
            dieString = "six";
            break;
    }

    return dieString;
}


const setDieValue = (value) => {
    value = value;
}

const Roll = () => {
    let max = 6;
    let min = 1;
    const dieValue = Math.floor(Math.random() * (max - min) + min);
    setDieValue(dieValue);
    return dieValue;
}

for (let i = 0; i < 10; i++) {
    let die1 = Roll();
    let die2 = Roll();

    let message = `${getDieString(die1)} + ${getDieString(die2)} = ${die1 + die2}`;
    if (die1 == die2) {
        message += " DOUBLES!";
    }

    console.log(message);
}

