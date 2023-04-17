//1.Найдите общие элементы(в виде массива) между двумя массивами.
//Пример: [1,2,3], [4,2,1] => [1,2]
//  let firstArry = [1, 2, 3];
//  let secondArry = [4, 2, 1];

//  let common = firstArry.filter((x) => secondArry.includes(x));
// console.log("Common elements are: " + common);
////////////////////////////////////////////////////////////////////////
//2.Создать функцию, которая получает в качестве аргумента число и возвращает массив из чисел от 0 до указанного числа.
// function getNumbersArray(num) {
//   const arrNumbers = [];
//   for (let i = 0; i < num; i++) {
//     arrNumbers.push(i);
//   }
//   return arrNumbers;
// }

// console.log(getNumbersArray(2));
////////////////////////////////////////////////////////////////////////
//3.Предыдущее задание делаем с объектом. (как ключ передаем i).
// function getNumbersObject(num) {
//   const objectNumbers = {};
//   for (let i = 0; i < num; i++) {
//     objectNumbers[i] = i;
//   }
//   return objectNumbers;
// }
// console.log(getNumbersObject(9));
//////////////////////////////////////////////////////////////////////////
//4.Описать функцию, которая получает в качестве аргумента число и строку, где число обозначает сколько раз должна быть добавлена
//  эта строка в массив. Возвращает массив из этих строк.
//   Например: передаем строку “dog” и цифру 3, в результате мы получаем [“dog”,”dog”,”dog"].

// function getWordsArr(string, num) {
//   let array = [];
//   for (let i = 0; i < num; i++) {
//     array.push(string);
//   }
//   return array;
// }
//////////////////////////////////////////////////////////////////////////
//5.Создайте функцию, которая как аргумент принимает одну строку.Функция возвращает это слово в развернутов виде.
//Пример: “cat” => “tac”

// function reverse(string) {
//   return string.split("").reverse().join("");
// }
// console.log(reverse);
////////////////////////////////////////////////////////////////////////
//6.Напишите функцию, которая в качестве аргументов получает слово и определяет, является ли оно палиндромом.
// Если да, функция возвращает true, в ином случае false.
// function checPalindrom(str) {
//   return str === str.split("").reverse().join("");
// }
// console.log(checPalindrom("arrarat"));
// console.log(checPalindrom("dod"));

/////////////////////////////////////////////////////////////////////////
//7.Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром.
//let max = -Infinity;

// function mostExpensiveItem(items) {
//   let item = items[0];
//   for (let i = 1; i < items.length; i++) {
//     //const arrSum = items[i];
//     if (items[i].price > item.price) {
//       item = items[i];
//     }
//   }
//   return item;
//   //console.log(sum);
// }
// const texnik = [
//   { name: "laptop", price: 100 },
//   { name: "mouse", price: 57 },
//   { name: "ketbourd", price: 588 },
//   { name: "monitor", price: 900 },
// ];
// console.log(mostExpensiveItem(texnik));

/////////////////////////////////////////////////////////////////////////
//8.Сделайте генератор случайных дразнилок со своим набором слов.
// let arrSmiles = ["legs", "hands", "elbows", "knees"];
// let arrAnimalsBody = ["tail", "hooves", "ass eagle"];
// let smile = arrSmiles[Math.floor(Math.random() * arrSmiles.length)];
// let animal = arrAnimalsBody[Math.floor(Math.random() * arrAnimalsBody.length)];
// console.log("Better than your", smile, "the best of", animal);
////////////////////////////////////////////////////////////////////////
// for (let num = 3; num < 10000; num = num * 3) {
//   console.log(num);
// }
