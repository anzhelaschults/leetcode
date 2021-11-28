/**
 * answer [i] == "FizzBuzz" if i divisible by 3 and 5
 * answer [i] == "Fizz" if i divisible by 3
 * answer [i] == "Buzz" if i divisible by 5
 * anzswer [i] == i if non of the above conditions are true
 *
 * constrains 1 <= n <= 10000
 * */

for (let i=1; i < 10000; i++){
    if (i % 3 && 5 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else console.log(i);
}

// (function (){
//     var array = [];
//
//     for (var i = 1; i <= 100; i++) {
//         array.push(i);
//
//         if (i % 3 === 0) {
//             array.splice(i - 1, 1, 'Fizz');
//         }
//
//         if (i % 5 === 0) {
//             array.splice(i - 1, 1, 'Buzz');
//         }
//
//         if (i % 15 === 0) {
//             array.splice(i - 1, 1, 'FizzBuzz');
//         }
//     }
//
//     console.log(array);
// })();

