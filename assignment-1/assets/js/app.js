
//Question 1

let num1 = +prompt(`Enter first number: `);
let num2 = +prompt(`Enter second number: `);

if (num1 > num2) {

    console.log(num1 + ` is greater than ` + num2);

} else {

    console.log(num2 + ` is greater than ` + num1);

}



//Question 2

let num3 = +prompt(`Enter a number after + or - : `);

if (num3 < 0) {

    console.log(`The sign is -`);

} else if (num3 > 0) {

    console.log(`The sign is +`);

} else {

    console.log(`Zero cannot be positive or negative`);

}



//Question 3

let num4 = +prompt(`Enter first number: `);
let num5 = +prompt(`Enter second number: `);
let num6 = +prompt(`Enter third number: `);
let num7 = +prompt(`Enter fourth number: `);
let num8 = +prompt(`Enter fifth number: `);

if (num4 > num5 && num4 > num6 && num4 > num7 && num4 > num8) {

    console.log(num4 + ` is the greatest number.`);

} else if (num5 > num4 && num5 > num6 && num5 > num7 && num5 > num8) {

    console.log(num5 + ` is the greatest number.`);

} else if (num6 > num4 && num6 > num5 && num6 > num7 && num6 > num8) {

    console.log(num6 + ` is the greatest number.`);

} else if (num7 > num4 && num7 > num5 && num7 > num6 && num7 > num8) {

    console.log(num7 + ` is the greatest number.`);

} else {

    console.log(num8 + ` is the greatest number.`);
}



//Question 4

for (let i = 0; i <= 15; i++) {

    if (i % 2 === 0) {

        console.log(i + ` is even`);

    } else if (i % 2 !== 0) {

        console.log(i + ` is odd`);

    }
}



//Question 5

let html = +prompt(`Enter HTML marks: `);
let css = +prompt(`Enter CSS marks: `);
let js = +prompt(`Enter JavaScript marks: `);
let mongoDb = +prompt(`Enter MongoDB marks: `);
let node = +prompt(`Enter Node.js marks: `);

let average = (html + css + js + mongoDb + node) / 5;

console.log(`The average is: ` + average);

if (average <= 60) {

    console.log(`F Grade`);

} else if (average <= 70) {

    console.log(`D Grade`);

} else if (average <= 80) {

    console.log(`C Grade`);

} else if (average <= 90) {

    console.log(`B Grade`);

} else if (average <= 100) {

    console.log(`A Grade`);
}



// Question 6

for (let i = 1; i <= 100; i++) {

    if (i % 5 === 0 && i % 3 === 0) {

        console.log(`FizzBuzz`);

    } else if (i % 5 === 0) {

        console.log(`Buzz`);

    } else if (i % 3 === 0) {

        console.log(`Fizz`);

    } else {

        console.log(i);
    }
}



//Question 7

let star = "";

for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= i; j++) {

        star += "*"
    }

    star += "\n"

}

console.log(star);