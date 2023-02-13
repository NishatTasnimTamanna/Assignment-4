/*
Problem No.1 mindGame
Function Explanation:In this problem, "if...else" loop has been used. If number is positive ,then it shows result of the equation. If the input number is negative , then it directs to take positive number.
*/ 

function mindGame(num1){
const result= (num1*3+10)/2-5;
if(num1>0){
    return result;
}
else{
    console.log("Please put positive number!")
}
}
const numberValue=mindGame() ;
const finalResult=mindGame(numberValue);
console.log(finalResult);

/*
Problem No.2 evenOdd
Function Explanation: We know that when any number is divided by 2 and it's remainder is zero, the number is even. And if the remainder is not equal to zero, then it is odd number. By using this logic, this problem has been solved.
*/ 

let evenOdd= " ";
let i=evenOdd.length;
if(i%2==0 )
console.log("even");
else{
    console.log("odd");
}

/*
Problem No.3 isLGSeven
Function Explanation:The solution of this problem shows the result of the input number subtracted by 7 by adding conditions like if the result is greater than or equal to 7, then the input number is multiplied by 2 and that will be the output. On the other hand, it the result is less than 7, then that will be the output. 
*/ 

let num1= ;
let isLGSeven=num1;
const result=num1-7;
let i=result;
    if(i>=7){
        const i1= num1*2;
        console.log(i1);
    }
    else {
        const i2=num1-7;
        console.log(i2);
    }

/*
Problem No.4 findingBadData
Function Explanation:Here, Bad data means the negative data. At first, negative data from the array are searched  and then pushed it to an another array. The final array with the negative data is the output.
*/ 

const myArray = [ ];

function findingBadData(array) {

    const negatives = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negatives.push(array[i]);
        }
    }
    return negatives;

}

/*Problem No.5 gemsToDiamond
Function Explanation:In this problem, three input numbers have been taken. Then the numbers are multiplied by different values and added. The condition was if the total is greater than two times 1000, then 2000 is deducted from the result and that will be the output. On the other hand, if the total value is less than two times of 1000, then this will be the output. if..else loop has been used to solve this problem.
*/ 

function gemsToDiamond(num1,num2,num3){
    const total= num1*21+ num2*32+ num3*43;
    let i=total;
    if(i>1000*2){
        const total=i-2000;
        console.log(total);
    }
    else {
        return total;
    }
}
const numValue=gemsToDiamond();
const total= gemsToDiamond(numValue);
console.log(total);



