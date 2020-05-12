
//EXERCISE 1: Palindrome Checker
function palindrome(param) {
 
  var re = /[\W_]/g;
  //puts the string in lower case and replaces every non A-Z and a-z with ''
  var originalParam = param.toLowerCase().replace(re, '');
  
  //takes the originalParam splits it, reverses it, and the joins it back
  var reverseParam = originalParam.split('').reverse().join(''); 
 
 //compares the two param's that only contain lowercase letters now
 
 return (reverseParam === originalParam);
}

//EXERCISE 2: FIZZ BUZZ
// for mutiples of 3
let fizz = 'fizz'
// for mutiples of 5
let buzz = 'buzz'

function fizzbuzz(){
for (i = 0; i < 101; i++){
  if(i % 3 == 0 && i % 5 == 0){
    console.log(fizz+buzz);
  }
  //i / 3 with no remainder print fizz 
  else if (i % 3 == 0){
  console.log(fizz);
  } else if 
  //i / 5 with no remainder print buzz
    (i % 5 == 0){
      console.log(buzz);
    }else{
  //print numbers not mutiples of 3 and 5    
      console.log(i);
    }
  }
}


//EXERCISE 3: Array / Object Manipulation
const products = [
  {name: "Stainless 10\"", weight: 1.5, price: 65, size: 10, id: 12},
  {name: "Stainless 12\"", weight: 1.8, price: 85, size: 12, id: 13},
  {name: "Carbon Steel 10\"", weight: 1.5, price: 75, size: 10, id: 23},
  {name: "Carbon Steel 12\"", weight: 1.95, price: 75, size: 12, id: 24},
  {name: "Nonstick 10\"", weight: 2.0, price: 70, size: 10, id: 3},
  {name: "Nonstick 12\"", weight: 2.0, price: 70, size: 12, id: 4}
];
//EXERCISE 3.1
//return array of prices greater than 75
function priceGreaterThan(num){
greaterThanNum = []  
for (i=0; i < products.length; i++ ){
  if (products[i].price >= num){
    greaterThanNum.push(products[i]);
  } else {
    continue;
  }
}
return greaterThanNum;
}

//EXERCISE 3.2
//return an array of products that heavier than 1.8
function priceHeavierThan(num){
greaterThanNum = []  
for (i=0; i < products.length; i++ ){
  if (products[i].weight >= num){
    greaterThanNum.push(products[i]);
  } else {
    continue;
  }
}
return greaterThanNum;
}

//EXERCISE 3.3
//return an array of objects where the keys are IDS and values are the remaining properties
function transform(){
transformedArray = {};
for (i=0; i < products.length; i++ ){
    let k = products[i].id;
    delete products[i].id;
    let v = products[i];
    transformedArray[k] = v;
}
return transformedArray;
}

//display results from exercise 1
function exercise1(){
console.log("EXERCISE 1 RESULTS")
console.log("is 'oscar' a palindrome? " + palindrome("oscar"));
console.log("is'aaaaa' a palindrome? " + palindrome("aaaaa"));
console.log("is 'Racecar' a palindrome? " + palindrome("Racecar"));
console.log("is 'madam, I'm adam' a palindrome? " + palindrome("madam, I'm adam"));
}

//display results from exercise 2
function exercise2(){
console.log("EXERCISE 2 RESULTS");
fizzbuzz();
}

//display results from exercise 3
function exercise3(){
console.log("EXERCISE 3 RESULTS");
console.log(priceGreaterThan(75));
console.log(priceHeavierThan(1.8));
console.log(transform());
}

//menu of options to choose from
function menu(){
  const options = "1. Exercise 1 results\n2. Exercise 2 results\n3. Exercise 3 results\n4. All exercise results\n5. Quit";
  console.log(options);
}



//input from the user
function menuInput(){
response = prompt("Please Enter a number (1 - 5)");
return Number(response);
}

//display menu and collect input from the user
menu()
let responseToNum = menuInput();

//choose what EXERCISE results to display
switch(responseToNum){
  case 1:
    //EXERCISE 1
    console.log("----------");
    exercise1();
    console.log("----------");
    break;
  case 2:
    //EXERCISE 2
    console.log("----------");
    exercise2();
    console.log("----------");
    break;
  case 3:
    //EXERCISE 3
    console.log("----------");
    exercise3();
    console.log("----------");
    break;
  case 4:
    console.log("----------");
    //EXERCISE 1
    console.log("----------");
    exercise1();
    //EXERCISE 2
    console.log("----------");
    exercise2();
    //EXERCISE 3
    console.log("----------");
    exercise3();
    console.log("----------");
    break;
  case 5:
    console.log("Thank you and have a nice day!");
    break;
  default:
    console.log("not a valid entry");
    console.log("Displaying all results.");
    //EXERCISE 1
    console.log("----------");
    exercise1();
    //EXERCISE 2
    console.log("----------");
    exercise2();
    //EXERCISE 3
    console.log("----------");
    exercise3();
    console.log("----------");
    break;
  }
  

