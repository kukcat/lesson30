// let z = 2;

// for(let i = 0; i < 10; i++){
//     console.log( z *= 2 )
// }

//=================================

// let start = prompt()
// let finish = prompt()

// for(;start<=finish; start++){
//      console.log(start)
// }

//=================================

//let i = prompt('Введите число');

// while(i == null){

//let  i = prompt('Введите число');

// }

// console.log(i);
//=================================

// let i;

// do{

// i = prompt('Введите число');

// }while(i == null)

// console.log(i);
//=================================

// let w = prompt('Введите число')


// while(isNaN(w)){
//      console.log(isNaN(w))
//      w = prompt('Введите число')  
// }


// console.log(isNaN(w))
// console.log(w)

//=================================

// let N = prompt('Введите число N')
// let A = prompt('Введите число A')

// let result = 0;

// for(let i = 0; i <= N; i++){
//      result += A**i;
// }

// console.log(result);

//=================================

// let N = prompt('Введите число N')
// let result = 1;

// for(let i = 1; i<=N; i++){

//      result *= i;
     
// }

// console.log(result)






//================= lesson 33






// let str = 'как дела'
// console.log(str)

// let arr = [];
// let arr = ['Привет','Как дела','Что-то', 10, true, 219391n]

// console.log(arr[10]);

// if(arr[2]){
//      console.log('Есть')
// }else{
//      console.log('Нет')
// }

// arr.push('Шестой индекс')

// console.log(arr)

// arr.pop()

// console.log(arr)

// arr.unshift('Записать что-то')

// console.log(arr)

// arr.shift();

// console.log(arr)

// arr.splice(3, 1)

// console.log(arr)

// console.log(arr[arr.length-1])


//let arr = new Array(4);
// let arr = [];

// console.log(arr)

// arr[100] = 10;

// arr.push(2)

// console.log(arr)

// let arr = [];

// for (let i = 0; i < 10; i++) {
    
//      arr[i] = i**i;

// }

// console.log(arr)

// let arr = ['Привет','Как дела','Что-то', 10, true, 219391n, 15]


// for (let i = 0; i < arr.length; i++){
    
//      console.log(arr[i])

// }


//let arr = ['Привет','Как дела','Что-то', 10, true, 219391n, 15]
// let arr2 = arr; 

// console.log(arr2);

//arr.push('Еще одно значение')

// console.log(arr2)

// =============================== Первое задание

// let styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles[1] = "Классика";
// styles.shift();
// styles.unshift("Рэп", "Регги");

// =============================== Второе задание

let ans = prompt('Введите число')
let array = [];

while(!isNaN(ans) && ans != '' && ans != null){

     array.push(+ans);
     ans = prompt('Введите число')
}

let result = 0;

console.log(array)

for (let i = 0; i < array.length; i++) {
    
     result += array[i];
     console.log(array[i]);

}

console.log(result)