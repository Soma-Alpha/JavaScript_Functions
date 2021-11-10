console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

/*
## Exercise 1: Minimum Number

- In the past, we created a selection statement inside a loop that counted from 1 to 100, and only printed out the odd numbers.
- Your task is to write a function printOdds() that takes one parameter, count, and uses a loop and selection statement to count to the number passed in, printing out the odd numbers.

1. Declare a function named `printOdds` using declaration notation (`function <name>(){...}`)
2. The function should take in one parameter named `count`
3. The function body should:
   - contain a `for loop` that counts to the parameter passed in,
   - an `if/else` statement that determines if the current value is odd,
   - and then `console.log()` the odd value to the console
4. BONUS: Now that you do not know exactly what number may be passed in as `count`, use an `if` statement to account for a negative `count` being passed in.
*/

function printOdds(count)
{   
    if(isNaN(count)){
        console.log("Not a number")
    }
    else{ 
         let num = 1;
            while(num<=count)
                {
                    if(num%2!=0)
                    {
                        console.log(num);
                    }
                 num++;
                }
            }
       
    
    
}

printOdds(25);

printOdds("wfff");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

/*

- Write a function that receives a name and age, and prints a greeting message to the console using the name.

1. Declare a function named `checkAge` using declaration notation (`function <name>(){...}`)
2. The function should take in one parameter named `age`
3. The function body should:
   - declare and initialize an `aboveSixteen` local variable with string value: `"You can drive!"`,
   - declare and initialize an `belowSixteen` local variable with string value: `"Sorry, but you need to wait until you're 16."`,
   - an `if/else` statement that determines if the `age` value is below 16,
   - and then `console.log()` the correct message to the console.
4. BONUS: Remember that paramaters are optional, and no `name` or `age` value could be passed in. Correctly account for no parameter being passed in.
*/

function nameAge(name,age){
 
    let theName = name;
    let theAge = age;
    console.log (`Welcome ${theName}!  Your age is ${theAge}`);
}

nameAge("Soma", 30);




function checkAge()
{
    let num_age = prompt("Please enter your age");
    let aboveSixteen = "You can drive!";
    let belowSixteen = "Sorry, but you need to wait until you're 16 years."

    if(num_age<16)
           {console.log(`Your age is ${num_age} and ${belowSixteen}`);}

     else 
          { console.log(`Your age is ${num_age} and ${aboveSixteen}`);
     }


}

checkAge();


