console.groupCollapsed();

// Masyvas / array
let numsArray = [5, 4, 6, 456, 789, 4641, 4, 3154, 456.789, 45, 555];
// Indeksai      0  1  2   3    4     5   6    7      8

// console.log(numsArray);
// console.log(numsArray.length);

let arr = ['Vienas', 'Du', 'Trys', 3.5, 'Keturi', false, [2, 3, 5]];
// index      0       1       2     3      4        5        6
//                                                        0  1  2

// console.log(arr);
// console.log(arr.length);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[6][0]);
// console.log(arr[6][1]);
// console.log(arr[6][2]);

// console.log(numsArray);

// console.log(numsArray[0]);
// console.log(numsArray[1]);
// console.log(numsArray[2]);
// console.log(numsArray[3]);
// console.log(numsArray[4]);
// console.log(numsArray[5]);
// console.log(numsArray[6]);
// console.log(numsArray[7]);
// console.log(numsArray[8]);

/* 

FOR CIKLAS

for (kintamasis; sąlyga; kintamojo pakeitimas) {
  ...
}


*/

// for (let i = 0; i < numsArray.length; i++) {
//   console.log(i + '. ' + numsArray[i]);
// }


// Sukurti funkcijas, kurios paleidžia ciklą su skaičiais nuo 1 iki 100. Šie ciklai:
// 1. Padaugina skaičių iš 2.
// 2. Padaugina skaičių iš 5.
// 3. Prideda prie skaičiaus 5.
// 4. Atima iš skaičiaus 2.
// 5. Pakelia skaičių kvadratu.
// 6. Pakelia skaičių kūbu.

// 7. Sukurti analogiškas funkcijas pirmoms užduotims, tačiau padaryti, jog ciklai skaičiuotųsi nuo 100 iki 1.

// 8. Kiekvienos užduoties išvesties tekstą suformuluoti, jog būtų parašytas užduoties sprendimas, pvz.: 
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ir t.t.

// 9. Papildyti funkcijas, jog jos priimtu šiuos argumentus:
// 9.1. Nusakytų nuo kokio skaičiaus prasidės ciklas.
// 9.2. Nusakytų iki kokio skaičiaus ciklas tęsis.
// 9.3. Nusakytų kelinto ciklo metu turi išvesti atsakymą į konsolę.

function task1(start = 1, end = 100, nth = 1) {
  for (let i = start; i <= end; i += nth) {
    // console.log(i + '*' + 2 + ' = ' + (i * 2));
    
    let answer = i * 2;
    let output = `${i} * 2 = ${answer}`;
    
    console.log(output);
  }
}

// task1(1, 100, 15);

function task11(start = 100, end = 1, nth = 1) {
  for (let i = start; i >= end; i -= nth) {
    let answer = i * 2;
    let output = `${i} * 2 = ${answer}`;
    
    console.log(output);
  }
}

// task11(100, 1, 15);

function task61(start = 1, end = 100, nth = 1) {
  for (let i = start; i <= end; i += nth) {
    // console.log(i * i * i);
    // console.log(Math.pow(i, 3));
    console.log(i**3);
  }
}

// task61();

// 1. Skaičius nuo 1 iki 100.
// 2. Skaičiai, kurie dalinasi iš 3 turi būti pakeisti į žodį „Fizz";
// 3. Skaičiai, kurie dalinasi iš 5 turi būti pakeisti į žodį „Buzz";
// 4. Skaičiai, kurie dalinasi iš 3 ir 5 turi būti pakeisti į žodį „FizzBuzz";

// 5. Skaičiai, kurie dalinasi iš 7, turi būti pakeisti į žodį „Biff".
// 5.1. Skaičiai, kurie dalinasi iš 7 ir 3 turi būti pakeisti į žodį „FizzBiff";
// 5.2. Skaičiai, kurie dalinasi iš 7 ir 5 turi būti pakeisti į žodį „BuzzBiff";
// 5.3. Skaičiai, kurie dalinasi iš 7, iš 5 ir iš 3 turi būti pakeisti į žodį „FizzBuzzBiff";

// 6. Skaičiai, kurie dalinasi iš 9, turi būti pakeisti į žodį „Fuzz".

// 7. Skaičiai, kurie dalinasi iš 11, turi būti pakeisti į žodį „Bizz".

// 3 5 7 9 11
// 3 5 7 9
// 3 5 7 11
// 5 7 9 11
// 3 5 7
// 3 5 9
// 3 7 9
// 5 7 9
// 3 5 11
// 3 7 11
// 3 9 11
// 5 7 11
// 5 9 11
// 7 9 11
// 3 5
// 3 7
// 5 7
// 3 9
// 5 9
// 7 9
// 3 11
// 5 11
// 7 11
// 9 11
// 3
// 5
// 7
// 9
// 11


function fizzBuzz1() {
  for (let i = 1; i <= 500; i++) {

    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0 && i % 9 === 0) {
      console.log('FizzBuzzBiffFuzz');
    } else if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      console.log('FizzBuzzBiff');
    } else if (i % 3 === 0 && i % 5 === 0 && i % 9 === 0) {
      console.log('FizzBuzzFuzz');
    } else if (i % 3 === 0 && i % 7 === 0 && i % 9 === 0) {
      console.log('FizzBiffFuzz');
    } else if (i % 5 === 0 && i % 7 === 0 && i % 9 === 0) {
      console.log('BuzzBiffFuzz');
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0 && i % 7 === 0) {
      console.log('FizzBiff');
    } else if (i % 5 === 0 && i % 7 === 0) {
      console.log('BuzzBiff');
    } else if (i % 3 === 0 && i % 9 === 0) {
      console.log('FizzFuzz');
    } else if (i % 5 === 0 && i % 9 === 0) {
      console.log('BuzzFuzz');
    } else if (i % 7 === 0 && i % 9 === 0) {
      console.log('BiffFuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 7 === 0) {
      console.log('Biff');
    } else if (i % 9 === 0) {
      console.log('Fuzz');
    } else {
      console.log(i);
    }

  } 
}

// fizzBuzz1();

function fizzBuzz2() {
  for (let i = 1; i <= 500; i++) {
    let output = '';

    if (i % 3 === 0) {
      output += 'Fizz';
    }

    if (i % 5 === 0) {
      output += 'Buzz';
    }

    if (i % 7 === 0) {
      output += 'Biff';
    }

    if (i % 9 === 0) {
      output += 'Fuzz';
    }

    if (i % 11 === 0) {
      output += 'Bizz';
    }

    if (i % 37 === 0) {
      output += 'Puzz';
    }
    
    if (!output) {
      output = i;
    }

    console.log(output);
  } 
}

// fizzBuzz2();


function fizzBuzz3(start, end) {
  for (let i = start; i <= end; i++) {
    let output = '';

    // i % 3 === 0 && (output += 'Fizz');
    // i % 5 === 0 && (output += 'Buzz');
    // i % 7 === 0 && (output += 'Biff');
    // i % 9 === 0 && (output += 'Fuzz');
    // i % 11 === 0 && (output += 'Bizz');
    // i % 37 === 0 && (output += 'Puzz');
    // i % 111 === 0 && (output += 'jusu zodis');
    // !output && (output = i);

    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    if (i % 7 === 0) output += 'Biff';
    if (i % 9 === 0) output += 'Fuzz';
    if (i % 11 === 0) output += 'Bizz';
    if (i % 37 === 0) output += 'Puzz';
    if (i % 111 === 0) output += 'jusu zodis';
    if (!output) output = i;

    console.log(output);
  } 
}

// fizzBuzz3(150, 500);


// Užduotis (masyvai):
// 1. Sukurti 3 masyvus, kuriuose būtų bent 10 narių.
// 2. Sukurti funkciją, kuri išveda visus masyve esančius narius į konsolę.

let movies = ["matrix", "terminator", "gladiator", "darkskies", "avatar", "alien", "fourofakind", "avengers", "blade", "wakanda"];
let countries = ["latvia", "estonia", "america", "england", "ireland", "canada", "australia", "france", "germany", "italy"];
let names = ["monica", "john", "peter", "robert", "matthew", "daniel", "donald", "steven", "paul", "andrew"];

function arrayLoop(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// arrayLoop(movies);
// arrayLoop(countries);
// arrayLoop(names);

function mapLoop(arr) {
  arr.map(function(element){
    console.log(element);
  });
}

function forEachLoop(arr) {
  arr.forEach(function(element){
    console.log(element);
  });
}

mapLoop(movies)



let nums = [1, 4, 5, 10];
console.log(nums);
console.log(nums[0]);
console.log(nums[1]);

nums[1] = 'labas';
console.log(nums);
console.log(nums[1]);

// nums[4] = 20;
nums[nums.length] = 20;
console.log(nums);

// pop, push, shift ir unshift metodai modifikuoja (mutuoja) originalų masyvą

let cities = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiaulia', 'Panevėžys'];
console.log(cities);

// Pašalina paskutinį masyvo narį - pop() metodas
// console.log(cities.pop());
let lastCity = cities.pop();
console.log(lastCity);
console.log(cities);

// Pašalina pirmą masyvo narį - shift() metodas
let firstCity = cities.shift();
console.log(firstCity);

cities.shift();

console.log(cities);

// Pridedamas naujas narys į masyvo pabaigą - push() metoras
let newArrayCount = cities.push('Jonava');
console.log(newArrayCount);
console.log(cities);

cities.push('Jurbarkas', 'Palanga');
console.log(cities);

// Pridedamas narys į masyvo pradžią - ushift() metodas
let newArrayCount2 = cities.unshift('Vilnius');
console.log(newArrayCount2);

cities.unshift('Kaunas', 'Vievis');

console.log(cities);


let countriesArr = ['Lithuania', 'Latvia', 'Poland', 'France', 'Germany', 'Italy'];
// Indeksas              0           1        2          3         4         5
// Slice (+)       0           1         2         3         4          5
// Slice (-)      -6          -5        -4        -3        -2         -1

// SLICE - nemutuoja (nemodifikuoja) originalaus masyvo
console.log(countriesArr);

let slicedCountries1 = countriesArr.slice(2);
console.log(slicedCountries1);

let slicedCountries2 = countriesArr.slice(2, 4);
console.log(slicedCountries2);

let slicedCountries3 = countriesArr.slice(0, 3);
console.log(slicedCountries3);

let slicedCountries4 = countriesArr.slice(-4);
console.log(slicedCountries4);

let slicedCountries5 = countriesArr.slice(-4, -2);
console.log(slicedCountries5);

let slicedCountries6 = countriesArr.slice(-4, 2);
console.log(slicedCountries6);

let slicedCountries7 = countriesArr.slice(-4, 1);
console.log(slicedCountries7);

let slicedCountries8 = countriesArr.slice(-4, 4);
console.log(slicedCountries8);

let slicedCountries9 = countriesArr.slice(-2, -4);
console.log(slicedCountries9);

let slicedCountries10 = countriesArr.slice(1, -4);
console.log(slicedCountries10);

let slicedCountries11 = countriesArr.slice(0);
console.log(slicedCountries11);

// SPLICE - modifikuoja originalų masyvą (keičia originalaus masyvo reikšmę)
let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers);

// let splicedNumbers = numbers.splice(0, 2);
// let splicedNumbers = numbers.splice(2, 4);
// let splicedNumbers = numbers.splice(2);
// let splicedNumbers = numbers.splice(1, 1);
// let splicedNumbers = numbers.splice(5, 1);
// let splicedNumbers = numbers.splice(-4, 1);
// let splicedNumbers = numbers.splice(-1);
// let splicedNumbers = numbers.splice(-3, -1);
// let splicedNumbers = numbers.splice(3, -1);
// let splicedNumbers = numbers.splice(2, 0);
// let splicedNumbers = numbers.splice(2, 1, 10);
// let splicedNumbers = numbers.splice(2, 1, 10, 15, 20);
// let splicedNumbers = numbers.splice(2, 0, 10);
// let splicedNumbers = numbers.splice(2, 0, 10, 15, 20);
let splicedNumbers = numbers.splice(2, 0, 'Du su puse');

console.log(splicedNumbers);

console.log(numbers);


// UZDUOTIS dirbant su pirkinių sąrašu (bent 7 pirkiniai):
let goods = ['Duona', 'Apelsinai', 'Sūris', 'Sviestas', 'Jogurtas', 'Mėsa', 'Sultys'];
console.log(goods);

// Kiekvienam iš punktų sukurti po atskirą kintamąjį ir jame išsaugoti reikšmę. Šią reikšmę atvaizduoti konsolėje.
// 1. Išimti pirmus du pirkinius.
let sliceTask1 = goods.slice(0, 2);
console.log(sliceTask1);

// 2. Išimti tris paskutinius pirkinius.
let sliceTask2 = goods.slice(-3);
console.log(sliceTask2);

// 3. Išimti ketvirtą ir penktą pirkinį.
let sliceTask3 = goods.slice(3, 5);
console.log(sliceTask3);

// 4. Išimti antrą ir trečią pirkinį.
let sliceTask4 = goods.slice(1, 3);
console.log(sliceTask4);

// 5. Išimti visus, išskyrus pirmą pirkinį.
let sliceTask5 = goods.slice(1);
console.log(sliceTask5);


// Sukurti 10-ties filmų masyvą ir iš jo:
let moviesArr = ['Godfather', 'Shawshank redemption', 'Batman', 'Superman', 'Spiderman', 'Green Mile', 'Forest Gump', 'Men in black', 'Rush hour', 'Hangover'];
console.log(moviesArr);
// (nemodifikuoti originalaus masyvo)
// 1. Išimti pirmus 5 filmus.
let moviesTask1 = moviesArr.slice(0, 5);
console.log(moviesTask1);

// 2. Išimti 4 paskutinius filmus.
let moviesTask2 = moviesArr.slice(-4);
console.log(moviesTask2);

// 3. Išimti nuo trečio iki septinto filmo.
let moviesTask3 = moviesArr.slice(2, 7);
console.log(moviesTask3);

// 4. Išimti antrą ir trečią filmą.
let moviesTask4 = moviesArr.slice(1, 3);
console.log(moviesTask4);

// 5. Išimti visus, išskyrus pirmą filmą.
let moviesTask5 = moviesArr.slice(1);
console.log(moviesTask5);

// 6. Išimti 5 filmus skaičiuojant nuo trečio.
let moviesTask6 = moviesArr.slice(2, 7);
console.log(moviesTask6);

// 7. Išimti tris filmus nuo galo, tačiau palikti paskutinį.
let moviesTask7 = moviesArr.slice(-4, -1);
console.log(moviesTask7);

// (galima modifikuoti originalų masyvą)
// 8. Vietoje penkto filmo įrašyti du naujus filmus.
let moviesTask8 = moviesArr.splice(4, 1, 'Naujas filmas', 'Dar vienas naujas filmas');
console.log(moviesTask8);

// 9. Pašalinti pirmą filmą.
// let moviesTask9 = moviesArr.shift();
let moviesTask9 = moviesArr.splice(0, 1);
console.log(moviesTask9);

// 10. Įrašyti naują filmą į masyvo pradžią.
// let moviesTask10 = moviesArr.splice(0, 0, 'Trecias naujas filmas');
let moviesTask10 = moviesArr.unshift('Trecias naujas filmas');
console.log(moviesTask10);

console.log(moviesArr);

// 11.1. Išimti pirmus tris filmus, skaičiuojant nuo antro filmo.
let moviesTask111 = moviesArr.slice(1, 4);
console.log(moviesTask111);

// 11.2. Išimti paskutinius tris filmus, skaičiuojant nuo priešpaskutinio filmo.
let moviesTask112 = moviesArr.slice(-4, -1);
console.log(moviesTask112);

// 11.3. Šiuos išimtus filmus išsaugoti naujame masyve ir padaryti, jog jo nariai būtų apsukti.
// let moviesTask113 = moviesTask111.concat(moviesTask112).reverse();
// let moviesTask113 = [moviesTask111, moviesTask112].flat().reverse();
let moviesTask113 = [...moviesTask111, ...moviesTask112].reverse();
console.log(moviesTask113);

arrayLoop(moviesTask113);

console.groupEnd();

let citiesArr = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys', 'Marijampolė', 'Alytus'];

console.log(citiesArr);

// for (let i = 0; i < citiesArr.length; i++) {
//   // console.log(citiesArr);
//   console.log(i);
//   console.log('For ciklas: ' + citiesArr[i]);
// }

// MAP if foreach masyvo metodas - paleidzia funkcija kiekvienam masyvo nariui
// map ir forEach metodai nemodifikuoja (nemutuoja) originalaus masyvo

// citiesArr.map((city) => {
//   console.log(city);
// });

// citiesArr.forEach((city) => {
//   console.log(city);
// });

// citiesArr.map(function(city) {
//   console.log(city);
// });

// citiesArr.forEach(function(city) {
//   console.log(city);
// });

// citiesArr.map(function(city, index, array) {
//   // console.log(array);
//   console.log(index);
//   console.log('Map ciklas: ' + city);
// });

// citiesArr.forEach(function(city, index, array) {
//   // console.log(array);
//   console.log(index);
//   console.log('forEach ciklas: ' + city);
// });

// MAP RETURN
let citiesMap = citiesArr.map(function(city, index){
  return (index + 1) + '. ' + city;
}).reverse();
console.log(citiesMap);0

// forEach negali grąžinti (return) reikšmės ir negalima chain'inti
// let forEachMap = citiesArr.forEach(function(city, index){
//   return (index + 1) + '. ' + city;
// }).reverse();
// console.log(forEachMap);

// FILTER
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numArray);

let filterArray = numArray.filter(function(num){
  return num > 5;
});

console.log(filterArray);

// HTML elemento selectinimas
let h1Element = document.querySelector('h1');
console.dir(h1Element);
console.dir(h1Element.textContent);

let greeting = 'Hello';

// h1Element.textContent = 'Labas <mark>vakaras</mark>';
h1Element.innerHTML = 'Labas <mark>vakaras</mark>';

let divElement1 = document.querySelector('div#container-1');
divElement1.innerHTML = '<h1>' + greeting + '</h1>';

divElement1.innerHTML += '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae laborum, itaque quaerat, consequatur maxime officia assumenda quam a excepturi ab veniam enim? Earum mollitia cum pariatur sequi distinctio, at quibusdam.</p>';

let isLoggedIn = false;

if (isLoggedIn) {
  divElement1.innerHTML += '<button>Click</button>';
}


let divElement2 = document.querySelector('div#container-2');
divElement2.innerHTML = `<div>
                           <h1>${greeting}</h1>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae laborum, itaque quaerat, consequatur maxime officia assumenda quam a excepturi ab veniam enim? Earum mollitia cum pariatur sequi distinctio, at quibusdam.</p>
                         </div>
                         <button>Click</button>`;
                  
let ulElement1 = document.querySelector('#test-1');
// ulElement1.innerHTML += '<li>Vienas</li>';
// ulElement1.innerHTML += '<li>Du</li>';
// ulElement1.innerHTML += '<li>Trys</li>';

console.log(numArray);

// numArray.map((num) => {
//   ulElement1.innerHTML += `<li>${num}</li>`;
// })


// 12. Filmų sąrašą išvesti į ekraną (ul - li elementuose). Prie filmo pavadinimo pridėti filmo eilės numerį.

let moviesArr2 = ['Godfather', 'Shawshank redemption', 'Batman', 'Superman', 'Spiderman', 'Green Mile', 'Forest Gump', 'Men in black', 'Rush hour', 'Hangover'];

function task12(arr) {
  let ulElement = document.querySelector('#task-12');

  // for (let i = 0; i < arr.length; i++) {
  //   let num = i + 1;
  //   let name = arr[i];

  //   let item = `<li>${num}. ${name}</li>`;

  //   ulElement.innerHTML += item;
  // }

  arr.map((item, index) => {
    let num = index + 1;
    let output = `<li>${num}. ${item}</li>`;

    ulElement.innerHTML += output;
  });
}

// task12(moviesArr2);

// 13. Modifikuoti duomenis taip kad filmai turėtų ne tik pavadinimus, tačiau ir išleidimo datą.
let movieNames = ['Godfather', 'Shawshank redemption', 'Batman', 'Superman', 'Spiderman', 'Green Mile', 'Forest Gump', 'Men in black', 'Rush hour', 'Hangover'];
let movieYears = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009];

// 13.1. Prie filmų sąrašo (ul - li elementuose) pridėti išleidimo datą.
function task13(names, years) {
  console.log(names);
  console.log(years);

  let ulElement = document.querySelector('#task-13');

  // if (names.length === years.length) {
  //   for (let i = 0; i < names.length; i++) {
  //     // let yearText = years[i] ? ` (${years[i]})` : '';
  //     let yearText = '';
  
  //     if (years[i]) {
  //       yearText = ` (${years[i]})`;
  //     }
  
  //     let output = `<li>${i + 1}. ${names[i]}${yearText}</li>`;
  //     ulElement.innerHTML += output;
  //   }
  // }


  if (names.length === years.length) {
    names.map((name, index) => {
      let movieYear = years[index];
      let movieNumber = index + 1;

      let output = `<li>${movieNumber}. ${name} (${movieYear})</li>`;
      ulElement.innerHTML += output;
    });
  } else {
    console.error('Masyvų ilgiai privalo būti vienodi');
  }
}

// task13(movieNames, movieYears);

let allMovies = [
  ['Godfather', 2000], 
  ['Shawshank redemption', 2001], 
  ['Batman', 2002], 
  ['Superman', 2003],
  ['Spiderman', 2004],
  ['Green Mile'], 
  ['Forest Gump', 2006], 
  ['Men in black', 2007], 
  ['Rush hour', 2008],
  ['Hangover', 2009],
];

// let movieYears = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009];

function task131(movies) {
  console.log(movies);
  let ulElement = document.querySelector('#task-131');

  // movies.map((movie, index) => {
  //   let movieNumber = index + 1;
  //   let movieName = movie[0];
  //   // let movieYear = movie[1] ? ` (${movie[1]})` : '';

  //   let movieYear;

  //   if (movie[1]) {
  //     movieYear = ` (${movie[1]})`;
  //   } else {
  //     movieYear = '';
  //   }

  //   let output = `<li>${movieNumber}. ${movieName}${movieYear}</li>`;

  //   ulElement.innerHTML += output;
  // })

  for (let i = 0; i < movies.length; i++) {
    let movieNumber = i + 1;
    let movieName = movies[i][0];
    let movieYear = movies[i][1] ? ` (${movies[i][1]})` : '';

    let output = `<li>${movieNumber}. ${movieName}${movieYear}</li>`;
    ulElement.innerHTML += output;
  }
}

task131(allMovies);

// 14. Sukurti dar 2 naujus masyvus, kuriuose būtų po keletą filmų ir:
// 14.1. Išvesti visuose 3 masyvuose esančius filmus į ekraną kaip vieną sąrašą.

let movies1 = ['Godfather', 'Shawshank redemption', 'Batman'];
let movies2 = ['Superman', 'Spiderman', 'Green Mile'];
let movies3 = ['Forest Gump', 'Men in black', 'Rush hour', 'Hangover'];

// let moviesAll = [];
// moviesAll.push(movies1, movies2, movies3)
let moviesAll = [movies1, movies2, movies3];

// console.log(moviesAll)
// console.log(moviesAll[0])
// console.log(moviesAll[0][0])
// console.log(moviesAll[0][1])
// console.log(moviesAll[0][2])
// console.log(moviesAll[1])
// console.log(moviesAll[1][0])
// console.log(moviesAll[1][1])
// console.log(moviesAll[1][2])
// console.log(moviesAll[2])
// console.log(moviesAll[2][0])
// console.log(moviesAll[2][1])
// console.log(moviesAll[2][2])
// console.log(moviesAll[2][3])

function listAllMovies(movies) {
  let ulElement = document.querySelector('#task-14');
  let movieNumber = 1;

  // for (let i = 0; i < movies.length; i++) {
  //   for (let j = 0; j < movies[i].length; j++) {
  //     console.log(movies[i][j]);

  //     ulElement.innerHTML += `<li>${movieNumber}. ${movies[i][j]}</li>`;
  //     movieNumber++;
  //   }
  // }

  for (let i = 0; i < movies.length; i++) {
    let moviesList = movies[i];

    for (let j = 0; j < moviesList.length; j++) {
      let movie = moviesList[j];

      let output = `<li>${movieNumber}. ${movie}</li>`;
      ulElement.innerHTML += output;
      movieNumber++;
    }

    // for (let j = 0; j < movies[i].length; j++) {
    //   console.log(movies[i][j]);

    //   ulElement.innerHTML += `<li>${movieNumber}. ${movies[i][j]}</li>`;
    //   movieNumber++;
    // }
  }

  // movies.map(moviesList => {
  //   moviesList.map(movie => {
  //     let output = `<li>${movieNumber}. ${movie}</li>`;
  //     ulElement.innerHTML += output;

  //     movieNumber++;
  //   })
  // });
}

// listAllMovies(moviesAll);


function listAllMoviesClean(movies, selector) {
  let ulElement = document.querySelector(selector);
  let movieNumber = 1;

  for (let i = 0; i < movies.length; i++) {
    let moviesList = movies[i];

    for (let j = 0; j < moviesList.length; j++) {
      let movie = moviesList[j];

      let output = `<li>${movieNumber}. ${movie}</li>`;
      ulElement.innerHTML += output;
      movieNumber++;
    }
  }
}

listAllMoviesClean(moviesAll, '#task-14');
listAllMoviesClean(moviesAll, '#task-test');

// REDUCE metodas
let numbersForReduce = [1, 2, 4, 5, 7, 8, 10];

// let numbersAfterReduce = numbersForReduce.reduce((sum, current, index) => {
//   console.log('Index: ' + index);
//   console.log('Current: ' + current);
//   console.log('Sum: ' + sum);
//   console.log('---------');
//   return sum + current;
// }, 0);

// let numbersAfterReduce = numbersForReduce.reduce((sum, current) => {
//   return sum + current;
// });

let numbersAfterReduce = numbersForReduce.reduce((sum, current) => sum + current);

console.log(numbersAfterReduce);

// REDUCE:
// 1. Sukurti masyvą su bent 7 pasaulio valstybėmis.
// 2. Sukurti naują kintamąjį, kurio jo reikšmė bus visos pasaulio valstybės iš pirmojo masyvo sudėtos į vieną string'ą (naudoti reduce metodą).
// 3. Šio kintamojo reikšmę išvesti į konsolę.

let flags = ['Madagascar', 'Switzerland', 'Canada', 'Brazil', 'Peru', 'France', 'Germany'];

let countriesStr = flags.reduce((str, current, index, arr) => {
  if (index === 1) {
    return 'List of countries: ' + str + ', ' + current;
  }

  if (index === arr.length - 1) {
    return str + ', ' + current + '.';
  }

  return str + ', ' + current;
});

console.log(countriesStr);