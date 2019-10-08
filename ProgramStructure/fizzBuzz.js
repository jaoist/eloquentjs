/**
 * FizzBuzz: 
 * Log every number from 1 to 100. If a number is divisible by 3, 
 * print 'Fizz', if by 5, 'Buzz'
 */

for (let number = 1; number <= 100; number++){
    let output = '';
    if (number % 3 === 0){
        output = 'Fizz'
    }
    if (number % 5 === 0){
        output += 'Buzz';
    }    
    console.log(output || number); //This is a short circuit OR. '' == false.
}