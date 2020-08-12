
// // Функции

// //Function Declaration
// function greet(name) {
//     console.log(name);
// }

// greet('Lurke');

// //Function Expression
// let greet2 = function(name) {
//     console.log(name);
// }
// greet2('Ekrul');

// // Анонимные функции 
// let counter = 0;
// let = interval = setInterval( function() {
//     if (counter === 10) {
//         clearInterval(interval);
//     } else {
//         console.log(++counter)
//     }
    
// }, 1000)

// // Функции стрелки
// //1
// let heyName = (name) => {
//     console.log('Hey ' + name)
// }
// heyName('Валера');

// //2
// let heyName2 = (name) =>  console.log('Hey ' + name);
// heyName2('Аркадий')

// // Параметры по умолчанию
// let sum = (a = 1,b = 1) => a + b;

// //Без
// console.log(sum());

// //С параметрами
// console.log(sum(42,2));

// function summAll(...ALL){
//     let round = 0;
//     console.log(ALL);
//     for(let i of ALL){
//         round += i
//     }
//     return round
// }
// let abs = summAll(1,2,3,55,65,75,85,90,100,100);
// console.log(abs);

// // Массивы

// let muscleCars = ['Shevrolet', 'Ford', 'RollsRoys'];

// muscleCars.push('Добавить новый элем в Массив'); // В конец
// muscleCars.unshift('Lada'); // В начало
// console.log(muscleCars);

// // muscleCars.shift(); // Удаляет первый элемент
// //muscleCars.pop(); // Удаляет последний элемент из массива

// // muscleCars.reverse();
// //console.log(muscleCars); // Переворачивает массив

// console.log(muscleCars.indexOf('Lada')); //0

// let people = [
//     {name: 'Lurke', progSkill: 10},
//     {name: 'Jittox', progSkill: 0},
//     {name: 'Wheatley', progSkill: 20},
//     {name: 'Dndd', progSkill: 80}
// ]


// let index = people.findIndex(function(person){
//     return person.progSkill === 80
// })
// console.log(people[index]);







// Объекты

let lurke = {
    male: true,
    name: 'Alex',
    lastName: 'Uzenkov',
    age: 14,
    isProgremmer: true,
    loveTehnology: 'html',
    languages: ['ru', 'en', 'elf'],
    power() {
        console.log('Hello, World!');
    },
    info() {
        console.log (`This is ${this.name}, his age: ${this.age}, and his love tehnology: ${this.loveTehnology} `)
    }
}
console.log(lurke.name);
lurke.power();

delete lurke.isProgremmer;
console.log(lurke);

//Деструкторизация объекта
let {name, age, male} = lurke
console.log(name, age, male);





// for (let key in lurke) {
//     if (lurke.hasOwnProperty(key)){ //Проверка на то чтобы цикл не залев в методы  __proto__
//         console.log(key);
//         console.log(lurke[key]);
//     }
// }

let keysLurke = Object.keys(lurke)
keysLurke.forEach((key) => {
    console.log(key);
    console.log(lurke[key]);
})



// Контекст

// lurke.info();

// let logger = {
//     keys(){
//         console.log('Ojt keys ', Object.keys(this))
//     }
// }
// //  let bound = logger.keys.bind(lurke)
// //  bound();

// logger.keys.call(lurke)


let keysValue = {
    key() {
        // console.log('keys', Object.keys(this))
        // console.log('values', Object.values(this))

        let keysM = Object.keys(this)
        for (let y of keysM) {
            console.log(`keys: ${y} value: ${this[y]}`);
        }
    }
}
keysValue.key.call(lurke);



//Event Loop

// setTimeout( () => {
//     console.log('Что-то пишем')
// }, 2000)

// setInterval( () => {
//     console.log('Что-то пишем22')
// }, 2000)


//Промисы

// let delay = (callback, wait = 1000) => {
//     setTimeout(callback,wait)
// }

// delay( () => {
//     console.log('after 2 sec');
// }, 2000)

// let delay = (wait = 1000) => {
//     let promise = new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             resolve()
//         }, wait)
//     })
//     return promise
// }


// delay(2500)
//     .then( () => {
//         console.log('after 2 sec');
//     })
//     .catch( err => console.err(err))
//     .finally( () => {
//         console.log('finally');
//     })

//Работа с ДОМ

let oooops = document.querySelector('#DellBut');
oooops.addEventListener('click', () => {
    let body = document.querySelector('body');
    body.style.display = 'none';
})