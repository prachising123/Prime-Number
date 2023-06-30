// Write a JavaScript program to check if a given number is prime.
let num = prompt("Enter the number");
// let isPrime = ture;
if(num>1){
    for(let i=2;i<num;i++){
        if(num%i==0){
            isPrime=false;
            break;
        }
    }
    if(isPrime==true){
        document.write("Prime number");
    }
    else{
        document.write("Not a Prime Number");
    }
}
