let myname='Adeel';
let age=25;
let areStudent=true;
let favnumber=[8, 17,23, 42];

function greeting(){
    console.log(`Hello, my name is ${myname}`);
}

function calculateAge(){
    console.log(`your age after next 5 years will be ${age + 5}`);
    
}

function showStudent(){
    if(areStudent){
        console.log('I am a student');
    } else {
        console.log('I am not a student');
    }
}
//here i used tree methods
//1) reduce
function showfavnumber(){
    console.log(`My favorite numbers are: [${favnumber}]`);
    let sum = favnumber.reduce((acc, num) => acc + num, 0);
    console.log(`The sum of my favorite numbers is: ${sum}`);
}
//2) for loop
function sumofFavNumByForLoop(){
    let sum=0
    for(let i=0; i<favnumber.length; i++){
        sum +=favnumber[i]
    }
    console.log(sum);   
}
//3) Sum foreach
function sumofFavNumByForeach(){
    let sum=0;
    favnumber.forEach((num)=>{
        sum+=num
    })
    console.log(sum);
    
}

function checkAge(){
    if (age < 18){
        console.log('You are a minor');
    }
}

greeting();
calculateAge();
showStudent();
showfavnumber();
sumofFavNumByForLoop();
sumofFavNumByForeach();