console.groupCollapsed('Variables, math operators');

// Kintamojo sukūrimas:
// 1. Iniciavimo žodelis (var, let, const)
// 2. Kintamojo pavadinimas
// 3. Lygybės ženklas
// 4. Kintamojo vertė

var vardas = "John"; // String (tekstas) tipo duomenys
let pavarde = 'Doe'; // String (tekstas) tipo duomenys
let miestas = `Vilnius`; // String (tekstas) tipo duomenys
const asmensKodas = 45646465464; // Number (skaičius) tipo duomenys
let yraStudentas = false; // Boolean (true/false) tipo duomenys
let amzius = 28; // Number (skaičius) tipo duomenys

console.log(vardas);
console.log(pavarde);
console.log(miestas);
console.log(asmensKodas);

// typeof parodo kokio tai tipo duomenys
console.log(vardas);
console.log(typeof vardas);

console.log(vardas, typeof vardas);
console.log(miestas, typeof miestas);
console.log(asmensKodas, typeof asmensKodas);
console.log(yraStudentas, typeof yraStudentas);
console.log(amzius, typeof amzius);

console.log('Hello, ' + vardas + ' ' + pavarde + '.');
console.log("Hello, " + vardas + " " + pavarde + ".");

// John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.

console.log(vardas + ' ' + pavarde + ' (amžius ' + amzius + ' m.), asmens kodas: ' + asmensKodas + ', gyvenamasis miestas: ' + miestas + '.');

amzius = 29;

console.log(vardas + " " + pavarde + " (amžius " + amzius + " m.), asmens kodas: " + asmensKodas + ", gyvenamasis miestas: " + miestas + ".");

console.log(`${vardas} ${pavarde} (amžius ${amzius} m.), asmens kodas: ${asmensKodas}, gyvenamasis miestas: ${miestas}.`);

// John said: "Good morning".
console.log('John said: "Good morning"');
console.log(`John said: "Good morning".`);

// That's my car.
console.log("That's my car.");
console.log(`That's my car.`);

// John said: "That's my car".
console.log(`John said: "That's my car".`);
console.log('John said: "That' + "'s my car" + '".');

// John `said`: "That's my car".
console.log('John `said`: "' + "That's" + ' my car.');

console.log("John said: \"Good morning\".");
console.log('That\'s my car.');
console.log("John said: \"That's my car\".");
console.log('John said: "That\'s my car".');
console.log('John `said`: "That\'s my car".');
console.log("John `said`: \"That's my car\".");
console.log(`John \`said\`: "That's my car".`);

// John `said`: "That's \my\ car".
console.log('John `said`: "That\'s \\my\\ car".');

// John \`said\`: "That's my car".
console.log(`John \\\`said\\\`: "That's my car".`);


// Matematiniai operatoriai
let num1 = 22;
let num2 = 10;
let num3 = '10';

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

console.log(num1 + num2 * num2);
console.log((num1 + num2) * num2);

console.log(num1 + num3);
console.log(num1 - num3);
console.log(num1 * num3);
console.log(num1 / num3);
console.log(num1 % num3);

console.log(num1 + num3 * num3);
console.log((num1 + num3) * num3);

console.log(num1 + num2 + num3);
console.log(num1 + num2)
console.log(32 + num3)

console.log(num3 + num2 + num1)
console.log(num3 + num2);
console.log('1010' + num1);

// SĄLYGOS

// Dviguba lygybė (loosely Equal ==): tikrina tik reikšmes. Ir nekreipia dėmesio į duomenų tipą. 

console.log(10 == 10); // true
console.log('vienas' == 'vienas'); // true
console.log('10' == '10'); // true
console.log(10 == '10'); // true

// Triguba lygybė (strictly equal ===): pirmiausiai tikrina duomenų tipą ir tik jeigu duomenų tipas sutampa, tada tikrina jų reikšmes.

console.log(10 === 10); // true
console.log('vienas' === 'vienas'); // true
console.log('10' === '10'); // true
console.log(10 === '10'); // false

console.log(10 > 10); // false
console.log(10 >= 10); // true
console.log(10 < 10); // false
console.log(10 <= 10); // true

console.log(10 == 10); // true
console.log(10 != 10); // false

console.log(10 === 10); // true
console.log(10 !== 10); // false

console.log(10 != '10'); // false
console.log(10 !== '10'); // true

console.log(true);
console.log(!true);
console.log(!!true);

console.groupEnd();






// IF, ELSE IF, ELSE
// let light = 'GrEeN';

// console.log(light);

// // OR (||) operator - AR operatorius

// if (light === 'green' || light === 'GREEN' || light === 'Green') {
//   console.log('Galima eiti!');
// } else if (light === 'yellow') {
//   console.log('Pasiruošk');
// } else if (light === 'red') {
//   console.log('STOP');
// } else {
//   console.log('Sugedo');
// }


console.groupCollapsed('Function-1'); 



function light(color) {

let light = color.toLowerCase();

let output

if (light === 'green') {
  output = ('Galima eiti!');
} else if (light === 'yellow') {
  output = ('Pasiruošk');
} else if (light === 'red') {
  output = ('STOP');
} else {
  output = ('Sugedo');
}

  return output;
}

console.log(light('yellow'))


function pirkimas(amzius) {

let age = amzius;

if (age >= 18) {
  console.log('Pirkti galima');
} else {
  console.log('Pirkti negalima');
}

if (age > 17) {
  console.log('Pirkti galima');
} else {
  console.log('Pirkti negalima');
}

if (age < 18) {
  console.log('Pirkti negalima');
} else {
  console.log('Pirkti galima');
}

if (age <= 17) {
  console.log('Pirkti negalima');
} else {
  console.log('Pirkti galima');
}

if (age >= 18) {
  console.log('Pirkti galima');
} else if (age >= 16) {
  console.log('Pirkti galima su tėvų sutikimu');
} else {
  console.log('Pirkti negalima');
}

if (age >= 18) {
  console.log('Pirkti galima');
} else if (age < 16) {
  console.log('Pirkti negalima');
} else {
  console.log('Pirkti galima su tėvų sutikimu');
}

}

pirkimas(17)



console.groupEnd();


console.groupCollapsed('Function-2-(&&-operators)'); 

// AND (&&) operatorius - IR operatorius


function pirkimas2(amzius) {

let age = amzius;

if (age > 120) {
  console.log('Amžius per didelis');
} else if (age < 0) {
  console.log('Amžius per mažas');
} else if (age >= 18 && age < 120) {
  console.log('Pirkti galima');
} else if (age >= 16 && age < 18) {
  console.log('Pirkti galima su tėvų sutikimu');
} else  {
  console.log('Pirkti negalima');
}


if (age >= 120) {
  console.log('Amžius per didelis');
} else if (age >= 18) {
  console.log('Pirkti galima');
} else if (age >= 16) {
  console.log('Pirkti galima su tėvų sutikimu');
} else if (age >= 0) {
  console.log('Pirkti negalima');
} else {
  console.log('Amžius per mažas');
}

}

pirkimas2(4)

console.groupEnd();


// // 1. Jeigu slaptažodis yra trumpesnis už 16 simbolių, tai parašyti jog „Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo."
// // 2. Jeigu slaptažodis yra ilgesnis už 15 simbolių, tai:
// // 2.1. Patikrinti ar jis yra ilgesnis už 20 simbolių. Jeigu ilgesnis, tai parašyti: „Slaptažodis tinkamas".
// // 2.2. Jeigu jis nėra ilgesnis už 20 simbolių, tai parašyti jog: „Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo."


console.groupCollapsed('Function-3'); 

function pwLenght (password) {

let originalPassword = password;
let passwordLength = originalPassword.replaceAll(' ', '').length;

console.log(passwordLength);

console.log(originalPassword.includes('#'));

if (originalPassword.includes('#')) {
  console.log('Slaptažodis privalo turėti # simbolį.');
} else if (passwordLength < 16) {
  console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.');
} else {
  if (passwordLength > 20) {
    console.log('Slaptažodis tinkamas');
  } else {
    console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.');
  }
}

}

pwLenght("asdassdsdsdsssssda")

console.groupEnd();

// if (passwordLength > 20) {
//   console.log('Slaptažodis tinkamas');
// } else if (passwordLength > 15) {
//   console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.');
// } else {
//   console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.');
// }



// // Pagal amžiu surašyti į kurią klasė eina mokinys:
// // 1. Iki 6 metų į mokyklą neina.
// // 2. 7-10 metų eina į pradinę klasę.
// // 3. 11-14 metų eina į pagrindinę.
// // 4. 15-18 metų eina į gimnaziją.
// // 5. 19+ mokyklą baigė.

// // let personAge = -5;

// // if (personAge >= 0 && personAge < 7) {
// //   console.log('Į mokyklą neina');
// // } else if (personAge >= 7 && personAge < 11) {
// //   console.log('Pradinukas');
// // } else if (personAge >= 11 && personAge < 15) {
// //   console.log('Pagrindinė');
// // } else if (personAge >= 15 && personAge < 19) {
// //   console.log('Gimnazija');
// // } else {
// //   console.log('Mokyklą baigė');
// // }

// // 6.1. Jeigu amžius yra mažiau nei 0, tai parašyti jog įvestas amžius yra per mažas.
// // 6.2. Jeigu amžius yra daugau nei 120, tai parašyti jog įvestas amžius yra per didelis.

// // 7.1. Jeigu amžius yra 6 metai, tai parašyti: "Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas."
// // 7.2. Jeigu amžius yra 10 metai, tai parašyti: "Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas."
// // 7.3. Jeigu amžius yra 14 metai, tai parašyti: "Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas."
// // 7.3. Jeigu amžius yra 18 metai, tai parašyti: "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs."

// // 8. Jeigu įvestas ne amžius (t.y. ne skaičius), tai parašyti: "Netinkamai nurodytas amžius, amžius privalo būti skaičius."
// // 9. Panaudoti prompt funkciją amžiui įvesti.

// // let personAge = prompt('Įvesti amžių');
// let personAge = '5';
// console.log(personAge);
// console.log(typeof personAge);
// console.log(isNaN(personAge));

// if (isNaN(personAge)) {
//   console.log('Netinkamai nurodytas amžius, amžius privalo būti skaičius.');
// } else if (personAge < 0) {
//   console.log('Įvestas skaičius yra per mažas');
// } else if (personAge < 6) {
//   console.log('Į mokyklą neina');
// } else if (personAge < 7) {
//   console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.');
// } else if (personAge < 10) {
//   console.log('Pradinukas');
// } else if (personAge < 11) {
//   console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.');
// } else if (personAge < 14) {
//   console.log('Pagrindinė');
// } else if (personAge < 15) {
//   console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.');
// } else if (personAge < 18) {
//   console.log('Gimnazija');
// } else if (personAge < 19) {
//   console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.');
// } else if (personAge < 120) {
//   console.log('Mokyklą baigė');
// } else if (personAge >= 120) {
//   console.log('Įvestas per didelis skaičius');
// } else {
//   console.log('Error...');
// }


// // UŽDUOTIS: sukurti galvosūkį su keletu klausimu
// // PIRMAS LYGIS: 
// // 1. Norint patekti į kitą lygį, reikia atsakyti bent į vieną klausimą iš dviejų:
// // 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris klausimas buvo neteisingas.

// // Kiek bus 123 + 456 = 579
// let correctAnswer11 = 579;
// // Kaip vadinasi arčiausiai Žemės esanti Žvaigždė? sun
// let correctAnswer12 = 'sun';

// let playerAnswer11 = 579;
// let playerAnswer12 = 'sun';

// if (correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12) {
//   console.log('Patekai i kita lygi: abu atsakymai teisingi.');
// } else if (correctAnswer11 === playerAnswer11) {
//   console.log('Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.');
// } else if (correctAnswer12 === playerAnswer12) {
//   console.log('Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.');
// } else {
//   console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.');
// }

// // ANTRAS LYGIS:
// // 1. Norint patekti į kitą lygį, reikia atsakyti į abu klausimus iš dviejų:
// // 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris atsakymas buvo neteisingas.

// let correctAnswer21 = 1;
// let correctAnswer22 = 1;

// let playerAnswer21 = 1;
// let playerAnswer22 = 1;

// // if (correctAnswer21 === playerAnswer21 && correctAnswer22 === playerAnswer22) {
// //   console.log('Patekai i kita lygi: abu atsakymai teisingi.');
// // } else if (correctAnswer21 === playerAnswer21) {
// //   console.log('Į kitą lygį nepatekai, tačiau pirmas atsakymas buvo teisingas.');
// // } else if (correctAnswer22 === playerAnswer22) {
// //   console.log('Į kitą lygį nepatekai, tačiau antras atsakymas buvo teisingas.');
// // } else {
// //   console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.');
// // }

// if (correctAnswer21 !== playerAnswer21 || correctAnswer22 !== playerAnswer22) {
  
//   if (correctAnswer21 === playerAnswer21) {
//     console.log('Į kitą lygį nepatekai, tačiau pirmas atsakymas buvo teisingas.');
//   } else if (correctAnswer22 === playerAnswer22) {
//     console.log('Į kitą lygį nepatekai, tačiau antras atsakymas buvo teisingas.');
//   } else {
//     console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.');
//   }

// } else {
//   console.log('Patekai i kita lygi: abu atsakymai teisingi.');
// }

// // TREČIAS LYGIS: 
// // 1. Trys klausimai ir į kitą lygį pereinama, jeigu atsakomi bent du klausimai.
// // 2. Jeigu atsakomi du klausimai, turi būti parodoma, kuris klausimas buvo neatsakytas.
// // 3. Jeigu atsakomi mažiau nei du klausimai, tai turi parodyti, kuris klausimas buvo atsakytas.

// // let correctAnswer31 = 1;
// // let correctAnswer32 = 1;
// // let correctAnswer33 = 1;

// // let playerAnswer31 = 1;
// // let playerAnswer32 = 1;
// // let playerAnswer33 = 1;

// // if (correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33) {
// //   console.log('Visi teisingi: patekai');
// // } else if (correctAnswer31 !== playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33) {
// //   console.log('Patekai: pirmas neteisingas');
// // } else if (correctAnswer31 === playerAnswer31 && correctAnswer32 !== playerAnswer32 && correctAnswer33 === playerAnswer33) {
// //   console.log('Patekai: antras neteisingas');
// // } else if (correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 !== playerAnswer33) {
// //   console.log('Patekai: trecias neteisingas');
// // } else if (correctAnswer31 === playerAnswer31 && correctAnswer32 !== playerAnswer32 && correctAnswer33 !== playerAnswer33) {
// //   console.log('Nepatekai: pirmas teisingas');
// // } else if (correctAnswer31 !== playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 !== playerAnswer33) {
// //   console.log('Nepatekai: antras teisingas');
// // } else if (correctAnswer31 !== playerAnswer31 && correctAnswer32 !== playerAnswer32 && correctAnswer33 === playerAnswer33) {
// //   console.log('Nepatekai: trecias teisingas');
// // } else {
// //   console.log('Nepatekai: visi neteisingi :(');
// // }

// let correctAnswer31 = 1;
// let correctAnswer32 = 1;
// let correctAnswer33 = 1;

// let playerAnswer31 = 1;
// let playerAnswer32 = 2;
// let playerAnswer33 = 2;

// let answer31 = correctAnswer31 === playerAnswer31;
// let answer32 = correctAnswer32 === playerAnswer32;
// let answer33 = correctAnswer33 === playerAnswer33;

// let output = '';

// if (answer31 && answer32 && answer33) {
//   output = 'Visi teisingi: patekai';
// } else if (answer32 && answer33) {
//   output = 'Patekai: pirmas neteisingas';
// } else if (answer31 && answer33) {
//   output = 'Patekai: antras neteisingas';
// } else if (answer31 && answer32) {
//   output = 'Patekai: trecias neteisingas';
// } else if (answer31) {
//   output = 'Nepatekai: pirmas teisingas';
// } else if (answer32) {
//   output = 'Nepatekai: antras teisingas';
// } else if (answer33) {
//   output = 'Nepatekai: trecias teisingas';
// } else {
//   output = 'Nepatekai: visi neteisingi :(';
// }

// console.log(output);


// let num = 5;
// console.log(num);

// num = 6;
// console.log(num);

// console.log(num + 1);
// console.log(num);

// // Sudėtis
// // Skaičiai
// num = num + 1;
// console.log(num);

// num += 1;
// console.log(num);

// num++;
// console.log(num);

// num = num + 2;
// console.log(num);

// num += 2;
// console.log(num);

// num += 5;
// console.log(num);

// // Atimtis
// console.log(num - 5);
// console.log(num);

// num = num - 5;
// console.log(num);

// num -= 2;
// console.log(num);

// num -= 1;
// console.log(num);

// num--;
// console.log(num);

// // Daugyba
// num = num * 2;
// console.log(num);

// num *= 2;
// console.log(num);

// // Dalyba
// num = num / 2;
// console.log(num);

// num /= 2;
// console.log(num);

// // Tekstas (string)
// let str = 'Labas';
// console.log(str);

// str = str + ' vakaras';
// console.log(str);

// str += '.';
// console.log(str);



// // Pasisveikinimas
// // 1. Jeigu vartotojas prisijungęs (true/false), tai prie pasisveikinimo reikia prirašyti jo vardą, pvz. „Good Morning, Tom.".
// // 2. Jeigu vartotojas nėra prisijungęs, tai išvesti tik tekstą „Good Morning...".
// // 3. Priklausomai nuo paros laiko, pasisveikinimas turėtų būti skirtingas:
// // 3.1. 5-12 val. „Good Morning"
// // 3.2. 13-18 val. „Good Afternoon"
// // 3.3. 19-4 val. „Good Evening"
// // 4. Jeigu vartotojas yra ir prisijungęs, ir šiandien yra jo gimtadienis, tai prie pasisveikinimo dar turi būti parašytas ir pasveikinimas, pvz.: „Good Morning, Tom and have a great birthday!"

// // let isLoggedIn = false;
// // let personName = 'John';
// // let time = 20;
// // let isBirthday = false;

// // let greetingOutput = '';

// // if (time >= 5 && time <= 12) {

// //   if (isLoggedIn && isBirthday) {
// //     greetingOutput = 'Good Morning, ' + personName + ' and have a great birthday!';
// //   } else if (isLoggedIn) {
// //     greetingOutput = 'Good Morning, ' + personName;
// //   } else {
// //     greetingOutput = 'Good Morning';
// //   }

// // } else if (time >= 13 && time <= 18) {

// //   if (isLoggedIn && isBirthday) {
// //     greetingOutput = 'Good Afternoon, ' + personName + ' and have a great birthday!';
// //   } else if (isLoggedIn) {
// //     greetingOutput = 'Good Afternoon, ' + personName;
// //   } else {
// //     greetingOutput = 'Good Afternoon';
// //   }

// // } else if ((time >= 19 && time <= 23) || (time >= 0 && time <= 4)) {

// //   if (isLoggedIn && isBirthday) {
// //     greetingOutput = 'Good Evening, ' + personName + ' and have a great birthday!';
// //   } else if (isLoggedIn) {
// //     greetingOutput = 'Good Evening, ' + personName;
// //   } else {
// //     greetingOutput = 'Good Evening';
// //   }

// // } else {
  
// //   if (isLoggedIn && isBirthday) {
// //     greetingOutput = 'Hello, ' + personName + ' and have a great birthday!';
// //   } else if (isLoggedIn) {
// //     greetingOutput = 'Hello, ' + personName;
// //   } else {
// //     greetingOutput = 'Hello';
// //   }

// // }

// // console.log(greetingOutput);

// // let isLoggedIn = true;
// // let personName = 'John';
// // let time = 20;
// // let isBirthday = true;

// // let greetingOutput = '';

// // if (time >= 5 && time <= 12) {
// //   greetingOutput = 'Good Morning';
// // } else if (time >= 13 && time <= 18) {
// //   greetingOutput = 'Good Afternoon';
// // } else if ((time >= 19 && time <= 23) || (time >= 0 && time <= 4)) {
// //   greetingOutput = 'Good Evening';
// // } else {
// //   greetingOutput = 'Hello';
// // }

// // if (isLoggedIn) {
// //   // greetingOutput = greetingOutput + ', ' + personName;
// //   greetingOutput += ', ' + personName;
// // }

// // if (isBirthday) {
// //   greetingOutput += ' and have a great birthday!';
// // }

// // console.log(greetingOutput);


// // let isLoggedIn = true;
// // let personName = 'John';
// // let time = 20;
// // let isBirthday = true;

// // let timeText = '';
// // let nameText = '';
// // let birthdayText = '';

// // let greetingOutput = '';

// // if (time >= 5 && time <= 12) {
// //   timeText = 'Good Morning';
// // } else if (time >= 13 && time <= 18) {
// //   timeText = 'Good Afternoon';
// // } else if ((time >= 19 && time <= 23) || (time >= 0 && time <= 4)) {
// //   timeText = 'Good Evening';
// // } else {
// //   timeText = 'Hello';
// // }

// // if (isLoggedIn && personName) {
// //   nameText = ', ' + personName;
// // }

// // if (isBirthday) {
// //   birthdayText = ' and have a great birthday!!!';
// // }

// // greetingOutput = timeText + nameText + birthdayText;

// // console.log(greetingOutput);



// let isLoggedIn = true;
// let personName = 'John';
// let time = 20;
// let isBirthday = true;

// let timeText = '';
// let nameText = (isLoggedIn && personName) ? ', ' + personName : '';
// let birthdayText = isBirthday ? ' and have a great birthday!!!' : '';

// let greetingOutput = '';

// if (time >= 5 && time <= 12) {
//   timeText = 'Good Morning';
// } else if (time >= 13 && time <= 18) {
//   timeText = 'Good Afternoon';
// } else if ((time >= 19 && time <= 23) || (time >= 0 && time <= 4)) {
//   timeText = 'Good Evening';
// } else {
//   timeText = 'Hello';
// }

// greetingOutput = timeText + nameText + birthdayText;

// console.log(greetingOutput);

// // Sukurti aprašymą apie asmenį pagal pateiktus kintamuosius ir punktus:
// // 1. Jeigu asmuo yra vyras, tai naudoti žodžius he/his, jeigu moteris, tai naudoti žodžius she/her.
// // 2. Jeigu nenurodyta asmens pavardė arba vardas, tai tekste turėtų būti naudojami tik nurodyti duomenys. Jeigu nenurodytas nei vardas, nei pavardė, tada tekste reikėtų naudoti žodį person.
// // 3. Jeigu asmuo yra pilnametis, tai tekste turi būti įvardintas jo darbas (personJob kintamasis).
// // 3.1. Jeigu personJob kintamasis neturi reikšmės, tai tekste reikėtų įvardinti jog asmuo yra bedarbis.
// // 3.2. Jeigu asmuo yra nepilnametis, tai tekste panaudoti personJob kintamąjį nurodant kuo asmuo norėtų būti užaugęs.
// // 3.3. Jeigu asmuo yra nepilnametis ir kintamasis personJob neturi reikšmės, tai tekste įvardinti jog asmuo dar neturi planų kuo bus užaugęs.

// // Pavyzdiniai tekstai:
// // „John Doe is 20 years old. He is a Designer."
// // „John Doe is 10 years old. He is still in school and his dream is to become a Designer."

// let pName = 'John';
// let pSurname = 'Doe';
// let pAge = 20;
// let pJob = 'Developer';
// let pGender = 'male';

// let genderText1;
// let genderText2;

// if (pGender === 'male') {
//   genderText1 = 'he';
//   genderText2 = 'his';
// } else if (pGender === 'female') {
//   genderText1 = 'she';
//   genderText2 = 'her';
// } else {
//   genderText1 = 'person';
//   genderText2 = 'person\'s';
// }

// let adressText = '';

// if (pName && pSurname) {
//   adressText = `${pName} ${pSurname}`;
// } else if (pName) {
//   adressText = pName;
// } else if (pSurname) {
//   adressText = pSurname;
// } else {
//   adressText = 'person';
// }


// let personOutput = `${adressText} is ${pAge} years old.`;

// if (pAge < 18) {
//   personOutput += ` ${genderText1} is still in school and`;

//   if (pJob) {
//     personOutput += ` ${genderText2} dream is to become a ${pJob}.`;
//   } else {
//     personOutput += ` ${genderText1} does not have a dream.`;
//   }

// } else {
//   if (pJob) {
//     personOutput += ` ${genderText2} job is a ${pJob}.`;
//   } else {
//     personOutput += ` ${genderText1} is unemployed.`;
//   }
// }

// console.log(personOutput);


// -- masyvai, cirklai -- //



// Masyvas / array
// let numsArray = [5, 4, 6, 456, 789, 4641, 4, 3154, 456.789, 45, 555];
// // Indeksai      0  1  2   3    4     5   6    7      8

// console.log(numsArray);
// console.log(numsArray.length);

// let arr = ['Vienas', 'Du', 'Trys', 3.5, 'Keturi', false, [2, 3, 5]];
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

// Sukurti funkcijas, kurios paleidžia ciklą su skaičiais nuo 1 iki 100. Šie ciklai:
// 1. Padaugina skaičių iš 2.
// 2. Padaugina skaičių iš 5.
// 3. Prideda prie skaičiaus 5.
// 4. Atima iš skaičiaus 2.
// 5. Pakelia skaičių kvadratu.
// 6. Pakelia skaičių kūbu.


// function task1() {
//   for (let i = 1; i <= 100; i++) {
//     console.log(i);
//   }
// }

// // task1();

// function task2() {
//   for (let i = 1; i <= 100; i++) {
//     console.log(i * 2);
//   }
// }

// // task2();

// function task3() {
//   for (let i = 1; i <= 100; i++) {
//     console.log(i * 5);
//   }
// }

// // task3();

// function task4() {
//   for (let i = 1; i <= 100; i++) {
//     console.log(i + 5);
//   }
// }

// // task4();

// function task5() {
//   for (let i = 1; i <= 100; i++) {
//     console.log(i - 2);
//   }
// }

// // task5();

// function task6() {
//   for (let i = 1; i <= 100; i++) {
//     console.log(Math.pow(i, 2));
//   }
// }

// // task6();

// function task7() {
//   for (let i = 1; i <= 100; i++) {
//     console.log(Math.pow(i, 3));
//   }
// }

// // task7();


// 7. Sukurti analogiškas funkcijas pirmoms užduotims, tačiau padaryti, jog ciklai skaičiuotųsi nuo 100 iki 1.

// function task1() {
//   for (let i = 100; i > 0; i--) {
//     console.log(i);
//   }
// }

// // task1();

// function task2() {
//   for (let i = 100; i > 0; i--) {
//     console.log(i * 2);
//   }
// }

// // task2();

// function task3() {
//   for (let i = 100; i > 0; i--) {
//     console.log(i * 5);
//   }
// }

// // task3();

// function task4() {
//   for (let i = 100; i > 0; i--) {
//     console.log(i + 5);
//   }
// }

// // task4();

// function task5() {
//   for (let i = 100; i > 0; i--) {
//     console.log(i - 2);
//   }
// }

// // task5();

// function task6() {
//   for (let i = 100; i > 0; i--) {
//     console.log(Math.pow(i, 2));
//   }
// }

// // task6();

// function task7() {
//   for (let i = 100; i > 0; i--) {
//     console.log(Math.pow(i, 3));
//   }
// }

// // task7();


// 8. Kiekvienos užduoties išvesties tekstą suformuluoti, jog būtų parašytas užduoties sprendimas, pvz.: 
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ir t.t.

function task1() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

// task1();


function task2() {
  for (let i = 1; i <= 100; i++) {
    let answer = i * 2;
    console.log(i + ' * 2 ' + answer);
  }
}

// task2();

function task3() {
  for (let i = 1; i <= 100; i++) {
    let answer = i * 5;
    console.log(i + ' * 5 ' + answer);
  }
}

// task3();

function task4() {
  for (let i = 1; i <= 100; i++) {
    let answer = i + 5;
    console.log(i + ' + 5 ' + answer);
  }
}

// task4();

function task5() {
  for (let i = 1; i <= 100; i++) {
    let answer = i - 2;
    console.log(i + ' -2 ' + answer);
  }
}

// task5();

function task6() {
  for (let i = 1; i <= 100; i++) {
    let answer = Math.pow(i, 2);
    console.log(' square of ' + i + answer);
  }
}

// task6();

function task7() {
  for (let i = 1; i <= 100; i++) {
    console.log(Math.pow(i, 3));
  }
}

// task7();


function task8() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    }
    else if (i % 3 === 0) {
      console.log('Fizz');
    }
    else if (i % 5 === 0) {
      console.log ('Buzz')
    }
    else {
      console.log (i)
    }
  }
}

// task8();



function task9() {
  for (let i = 1; i <= 300; i++) {

    if      (i % 7 === 0 && i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzzBiff')
    }
    else if (i % 7 === 0 && i % 5 === 0) {
      console.log('BuzzBiff')
    }
    else if (i % 7 === 0 && i % 3 === 0) {
      console.log('FizzBiff')
    }
    else if (i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz')
    }
    else if (i % 7 === 0) {
      console.log('Biff')
    }
    else if (i % 5 === 0) {
      console.log('Buzz')
    }
    else if (i % 3 === 0) {
      console.log('Fizz')
    }
    else {
      console.log(i)
    }
  }
}

// task9()

function task10() {
  for (let i = 1; i <= 1000; i++) {

    if      (i % 9 === 0 && i % 7 === 0 && i % 5 === 0 && i % 3 === 0) {
      console.log('BuzzBuzzBuzz')
    }
    else if (i % 9 === 0 && i % 7 === 0 && i % 5 === 0) {
      console.log('FizzBuzzBiff')
    }
    else if (i % 9 === 0 && i % 7 === 0 && i % 3 === 0) {
      console.log('FizzBiff')
    }
    else if (i % 9 === 0 && i % 7 === 0) {
      console.log('Biff')
    }
    else if (i % 9 === 0) {
      console.log('Biff')
    }


    else if (i % 7 === 0 && i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz')
    }
    else if (i % 7 === 0 && i % 5 === 0) {
      console.log('Buzz')
    }
    else if (i % 7 === 0 && i % 3 === 0) {
      console.log('Fizz')
    }
    else if (i % 7 === 0) {
      console.log('Buzz')
    }


    else if (i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz')
    }
    else if (i % 5 === 0) {
      console.log('FizzBuzz')
    }


    else if (i % 3 === 0) {
      console.log('FizzBuzz')
    }


    else {
      console.log(i)
    }
  }
}

// task10()



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

// 11 9 7 5 3 
// 11 9 7 5 
// 11 9 7 3 
// 11 9 5 3
// 11 9 7
// 11 9 5
// 11 9 3
// 11 7 5
// 11 7 3
// 11 5 3
// 11 7
// 11 5
// 11 3

// 9 7 5 3 
// 9 7 5 
// 9 7 3 
// 9 5 3
// 9 7
// 9 5
// 9 3
// 7 5
// 7 3
// 5 3

// 11
// 9
// 7
// 5
// 3



// Užduotis (masyvai):
// 1. Sukurti 3 masyvus, kuriuose būtų bent 10 narių.
// 2. Sukurti funkciją, kuri išveda visus masyve esančius narius į konsolę.


// let movies    = ["matrix", "terminator", "gladiator", "darkskies", "avatar", "alien", "fourofakind", "avengers", "blade", "wakanda"];
// let countries = ["latvia", "estonia", "america", "england", "ireland", "canada", "australia", "france", "germany", "italy"];
// let names     = ["monica", "john", "peter", "robert", "matthew", "daniel", "donald", "steven", "paul", "andrew"];

// function myArray (moviesArr, countrArr, namesArr)
//  for (i = 0; i <= 30; i++) {
//   console.log (moviesArr, countrArr, namesArr);
//  }


// myArray (moviesArr, countrArr, namesArr);


//----------------------

// pop, push, shift ir unshift metodai modifikuoja (mutuoja) originalų masyvą

// let cities = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiaulia', 'Panevėžys'];
// console.log(cities);

// // Pašalina paskutinį masyvo narį - pop() metodas
// // console.log(cities.pop());
// let lastCity = cities.pop();
// console.log(lastCity);
// console.log(cities);

// // Pašalina pirmą masyvo narį - shift() metodas
// let firstCity = cities.shift();
// console.log(firstCity);

// cities.shift();

// console.log(cities);

// // Pridedamas naujas narys į masyvo pabaigą - push() metoras
// let newArrayCount = cities.push('Jonava');
// console.log(newArrayCount);
// console.log(cities);

// cities.push('Jurbarkas', 'Palanga');
// console.log(cities);

// // Pridedamas narys į masyvo pradžią - ushift() metodas
// let newArrayCount2 = cities.unshift('Vilnius');
// console.log(newArrayCount2);

// cities.unshift('Kaunas', 'Vievis');

// console.log(cities);


// let countriesArr = ['Lithuania', 'Latvia', 'Poland', 'France', 'Germany', 'Italy'];
// Indeksas                   0           1        2          3         4         5
// Slice (+)           0           1         2         3         4          5
// Slice (-)          -6          -5        -4        -3        -2         -1

// SLICE - nemutuoja (nemodifikuoja) originalaus masyvo
// console.log(countriesArr);

// let slicedCountries1 = countriesArr.slice(2);
// console.log(slicedCountries1);

// let slicedCountries2 = countriesArr.slice(2, 4);
// console.log(slicedCountries2);

// let slicedCountries3 = countriesArr.slice(0, 3);
// console.log(slicedCountries3);

// let slicedCountries4 = countriesArr.slice(-4);
// console.log(slicedCountries4);

// let slicedCountries5 = countriesArr.slice(-4, -2);
// console.log(slicedCountries5);

// let slicedCountries6 = countriesArr.slice(-4, 2);
// console.log(slicedCountries6);

// let slicedCountries7 = countriesArr.slice(-4, 1);
// console.log(slicedCountries7);

// let slicedCountries8 = countriesArr.slice(-4, 4);
// console.log(slicedCountries8);

// let slicedCountries9 = countriesArr.slice(-2, -4);
// console.log(slicedCountries9);

// let slicedCountries10 = countriesArr.slice(1, -4);
// console.log(slicedCountries10);

// let slicedCountries11 = countriesArr.slice(0);
// console.log(slicedCountries11);

// SPLICE - modifikuoja originalų masyvą (keičia originalaus masyvo reikšmę)
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(numbers);

// let splicedNumbers = numbers.splice(0, 2);
// // let splicedNumbers = numbers.splice(2, 4);
// // let splicedNumbers = numbers.splice(2);
// // let splicedNumbers = numbers.splice(1, 1);
// // let splicedNumbers = numbers.splice(5, 1);
// let splicedNumbers = numbers.splice(-4, 1);
// // let splicedNumbers = numbers.splice(-1);
// // let splicedNumbers = numbers.splice(-3, -1);
// // let splicedNumbers = numbers.splice(3, -1);
// // let splicedNumbers = numbers.splice(2, 0);
// // let splicedNumbers = numbers.splice(2, 1, 10);
// // let splicedNumbers = numbers.splice(2, 1, 10, 15, 20);
// // let splicedNumbers = numbers.splice(2, 0, 10);
// // let splicedNumbers = numbers.splice(2, 0, 10, 15, 20);
// // let splicedNumbers = numbers.splice(2, 0, 'Du su puse');

// console.log(splicedNumbers);

// console.log(numbers);

//---------------------------------


