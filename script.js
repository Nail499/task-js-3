/// 1.

const array = [1,2,3,4,5];
const array1 = []
for(let i=array.length-1; i>=0; i--){
    array1.push(array[i]);
}
console.log(array);
console.log(array1);


/// 2.

const strArray = ["cat","mouse","panter","chicken"];

strArray.shift();
strArray.push("bird");
console.log(strArray);

// 3.

const number = [1, 2, 3, 4, 5];


for (let i = 0; i < 5; i++) {
    number.push(number[i] ** 2);
}
console.log(number);

// 4.

const arry1 = [1, 2, 3, 4, 5, 6,7,8];
const arry2 = [];


for( let i=0; i<arry1.length; i++){
    if([i]%2==1){
        arry2.push(arry1[i]);
    }
}

console.log(arry2);

