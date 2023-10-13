// 1.   Write an function that contains an if/else statement for the following requirements:
// - If student gets 80 or higher: console log  You did a good job
// - If students get 70 or above: console log Keep trying
// - If students get 60 or above: console log ehhhh
// - If students get 55 or above: console log Not to good
// // - Any grade lower than 55 is Bad Grade But You'll Get Em Next Time


function comment_on_grade(grade){
  if (grade >= 80){console.log("You did a good job")}
  else if (grade >= 70){console.log("Keep trying")}
  else if (grade >= 60){console.log("ehhhhh")}
  else if (grade >= 55){console.log("Not too good")}
  else if (grade < 55){console.log("Bad Grade but You'll Get Em Nex Time")}
}
comment_on_grade(65)

// 2.   Write a function that prints out multiples of 10 up to a given input (argument)

function print_multiples_of_10(argument){
  for(let i = 10; i<=argument; i+=10){
    console.log(i)
  }
}
print_multiples_of_10(67)


// 3.   Write a function that takes bill amount and item price and says how many quarters they'd get in return

function num_of_quarters(payment_amt, price){
  if(payment_amt>= price){
    // in here need to get amount of change back first
    let change = payment_amt - price
    // now what ever change we get back we only care about the number
    // to the right of the decimal point. 
    let change_coins = change%1

    //the number of quarters would be the quotient of change_coins / 0.25
    let num_quarters = Math.floor(change_coins/0.25)
    
    console.log("you will receive " + num_quarters + " quarters back")
    
  }
  else{console.log("You need to pay more money for the item")}
}

num_of_quarters(1.44, .69)


//4.    Write a function that prints out how many bills you would recieve in 
//      change after paying a certain amount.  Return in as large denominations as possible. 
//      Parameters should be amount paind and amount cost

function num_of_bills(payment_amt, price){
  if(payment_amt>= price){
    // in here need to get amount of change back first
    let change = payment_amt - price
    // now what ever change we get back we only care about the number
    // to the right of the decimal point. 
  }
}
// 5.   Write a program that uses console.log to print all the numbers from 1 to 100 with 
//      two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and 
//      for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that 
//      working, modify your program to print "FizzBuzz", for numbers that are divisible by 
//      both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
