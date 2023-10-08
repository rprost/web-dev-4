let userName = "Andrew";
let userAge = 21;
let userPets = ["Cat", "Dog"];
let userBalance = 1200;
const EVERY_DAY_SPENDING = 15.3;
let everyDaySpendingPerPet = 2.4;
let daysSurvived = 0;


//console.log("Text", variable) allows you to write to the console

console.log("User Name", userName);
console.log("User Age", userAge);
console.log("userBalance: ", userBalance);
console.log("everyDaySpendingPerPet: ", everyDaySpendingPerPet)
console.log("daysSurvived: ", daysSurvived);

while (userBalance > 0) {
	let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length
	userBalance -= spending
	daysSurvived++
}

console.log("User have sufficient money for " + daysSurvived + " days")

function nameVertical(name) {
    console.log(name)
    for (let i = 0; i < name.length; i++) {
      console.log(name[i]);
    }
  }
  
  nameVertical("Richard");

  function code(n) {
    return  (n >= 100 && n < 200) ? "Informational responses (100-199)" :
    (n >= 200 && n < 300) ? "Successful responses (200-299)" :
    (n >= 300 && n < 400) ? "Redirection messages (300-399)" :
    (n >= 400 && n < 500) ? "Client error responses (400-499)" :
    (n >= 500 && n < 600) ? "Server error responses (500-599)" :
    "Not a valid code";
  }

  console.log(code(110))

  function compareVariables(var1, var2) {
    console.log("Value of var1:", var1);
    console.log("Value of var2:", var2);
  
    if (var1 === var2 && typeof var1 === typeof var2) {
      console.log("The two variables have the same value and type");
    } else if (var1 == var2) {
      console.log("The two variables have the same value but not the same type");
      console.log("The type of var1 is", typeof var1);
      console.log("The type of var2 is", typeof var2);
    } else if (typeof var1 == typeof var2) {
      console.log("The two variables have the same type but not the same value")
    } else {
      console.log("The two variables do not have the same value nor the same type");
    }
  }
  
  // Test the function with different values for var1 and var2
  compareVariables(5, 5); // Example 1: Same value and type
  compareVariables(5, "5"); // Example 2: Same value but different types
  compareVariables(5, 10); // Example 3: Different values same type
  compareVariables(5, "10"); // Example 4: Different values different type

  function fibonacci(n) {
    let num1 = 0;
    let num2 = 1;
    let nextNum = 0;
    
    console.log("Fibonacci Sequence:");
    
    // Handle the special case when n is 0
    if (n >= 0) {
      console.log(num1);
    }
    
    while (nextNum <= n) {
      console.log(nextNum);
      num1 = num2;
      num2 = nextNum;
      nextNum = num1 + num2;
    }
  }
  
  // Test the function with different values of n
  fibonacci(50); // Example: Generating Fibonacci sequence up to 50
  
  