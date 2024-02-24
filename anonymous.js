
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr1 = [4, 2, 7];
const arr2 = [3, 1, 8];
const arr3 = [ 1, 3, 3, "hi", 5, "hi"];
let str = [ "mom", "hi", "bob"]
let flag = 0;

 //function to print odd numbers
const odd = function(arr){
    
    for(let key in arr){
        if(arr[key]%2 == 1){
        console.log(arr[key])
        }

    }
}


// //function to print the sum
const sum = function(arr){
    for(let key in arr){
        flag += arr[key]
    }
    console.log(flag)
}


// //function for capitalizing first letter
const cap = function(str) {
    str = str.toLowerCase().split(' ');
    
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
   return str.join(' ');
}





// to print all the prime
const isPrime = function(arr) {
    for (let ind = 2; arr > ind; ind++) {
      if (arr % ind == 0) {
        return false;
      }
    }
     if(arr>1)
     return arr

  }
  
 // to find palindrome in an array

    
const isPalindrome = function(str) {
    for( let ind=0; ind<str.length; ind++){
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev == str) {
        return str
    } 
}
}





// median of two arrays


const median = function(arr1, arr2){
    let comb = [...arr1, ...arr2]
    let n = (comb.length)/2
    let m1 = +comb[n-1];
    let m2 = +comb[n];
    let med = (m1+m2)/2
    console.log(med);


}


// remove duplicate in an array

const duplicate = function(arr3){

    
    let uniqueArr = [];
    for(let i of arr3) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);

}




// rotate array
   
const rotateArray = function(arr, k) {
    for (let i = 0; i < k; i++) {
    const first = arr.shift();
    arr.push(first);
    }
    console.log(arr)
    }


odd(arr);
sum(arr);
console.log(arr.filter(isPrime));
console.log(cap("first letter will be capitalized"));
console.log(str.filter(isPalindrome));
median(arr1, arr2);
duplicate(arr3)
rotateArray(arr, 4); 
