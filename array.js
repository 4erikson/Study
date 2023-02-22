// UZDUOTIS dirbant su pirkinių sąrašu (bent 7 pirkiniai):
// Kiekvienam iš punktų sukurti po atskirą kintamąjį ir jame išsaugoti reikšmę. Šią reikšmę atvaizduoti konsolėje.
// 1. Išimti pirmus du pirkinius.           
// 2. Išimti tris paskutinius pirkinius.
// 3. Išimti ketvirtą ir penktą pirkinį.
// 4. Išimti antrą ir trečią pirkinį.
// 5. Išimti visus, išskyrus pirmą pirkinį.

// let products = ["meat", "milk", "egss", "oats", "cheese", "bread", "potato"];
// console.log(products)

// let output1 = products.slice(0, 2)
// console.log(output1)

// let output2 = products.slice(4, 6)
// console.log(output2)

// let output3 = products.slice(3, 5)
// console.log(output3)

// let output4 = products.slice(1, 3)
// console.log(output4)

// let output5 = products.slice(1, 7)
// console.log(output5)


//---------------------------------


// Sukurti 10-ties filmų masyvą ir iš jo:
// (nemodifikuoti originalaus masyvo)
// 1. Išimti pirmus 5 filmus.
// 2. Išimti 4 paskutinius filmus.
// 3. Išimti nuo trečio iki septinto filmo.
// 4. Išimti antrą ir trečią filmą.
// 5. Išimti visus, išskyrus pirmą filmą.
// 6. Išimti 5 filmus skaičiuojant nuo trečio.
// 7. Išimti tris filmus nuo galo, tačiau palikti paskutinį.

// let movies = ["matrix", "terminator", "gladiator", "darkskies", "avatar", "alien", "fourofakind", "avengers", "blade", "wakanda"];

// let output1 = movies.splice(0, 5)
// console.log(output1)

// let output2 = movies.splice(6, 10)
// console.log(output2)

// let output3 = movies.splice(2, 5)
// console.log(output3)

// let output4 = movies.splice(1, 2)
// console.log(output4)

// let output5 = movies.splice(1, 9)
// console.log(output5)

// let output6 = movies.splice(2, 5)
// console.log(output6)

// let output7 = movies.splice(6, 3)
// console.log(output7)


//---------------------------------


// (galima modifikuoti originalų masyvą)
// 8. Vietoje penkto filmo įrašyti du naujus filmus.
// 9. Pašalinti pirmą filmą.
// 10. Įrašyti naują filmą į masyvo pradžią.
// 11.1. Išimti pirmus tris filmus, skaičiuojant nuo antro filmo.
// 11.2. Išimti paskutinius tris filmus, skaičiuojant nuo priešpaskutinio filmo.
// 11.3. Šiuos išimtus filmus išsaugoti naujame masyve ir padaryti, jog jo nariai būtų apsukti.

// let movies = ["matrix", "terminator", "gladiator", "darkskies", "avatar", "alien", "fourofakind", "avengers", "blade", "wakanda"];
// console.log(movies)

// let output8 = movies.splice(4, 1, 'riddick', 'gravity')
// console.log(output8)

// let output9 = movies.splice(0, 1)
// console.log(output9)

// let output10 = movies.splice(0, 0, 'scream')
// console.log(output10)

// let output11 = movies.splice(2, 6).reverse()
// console.log(output11)


//------------------------------------------------------------------

// 5. Atlikti ta patį, kaip ir ketvirtoje užduotyje, tačiau atsakymus išvesti ne į konsolę, o į ul elementus.
// 5.1. Kiekvienai užduočiai HTML faile sukurti naują ul elementą ir jam priskirti unikalų id, pvz.:
//   <ul id="task-41"></ul>
//   <ul id="task-42"></ul>
//   <ul id="task-43"></ul>
//   Ir t.t.
// 5.2. JavaScript'e paselektinti šiuos elementus.
// 5.3. Kiekvienas ketvirtos užduoties ciklo atsakymas turėtų būti įdėtas į li elementą.
// 5.4. Kiekvienas li elementas turėtų būti įdėtas į atitinkamą ul elementą.

//------------------------------------------------------------------

// 6. Visoms prieš tai atliktoms užduotims sukurti funkcijas. Jeigu tą pačia funkciją galima panaudoti keletui užduočių - taip ir padaryti.
// 6.1. Funkcija privalo priimti bent vieną parametrą, t.y. masyvą, su kuriuo dirbama.
// 6.2. Jeigu įmanoma ir logiška, pridėti ir daugiau parametrų.

//----------------------------------------------------------------

// 7. Naudojant posts masyvą, atlikti žemiau nurodytas užduotis ir atsakymus išvesti į konsolę. Visoms užduotis kurti funkciją ir jai, kaip parametrą, paduoti nurodytą masyvą.
// 7.1. Gauti pirmo masyvo nario reikšmę.
// 7.2. Gauti paskutinio masyvo nario reikšmę.
// 7.3. Gauti 15 masyvo nario reikšmę.
// 7.4. Gauti 13 masyvo nario reikšmę skaičiuojant nuo galo.
// 7.5. Gauti vidurinio masyvo nario reikšmę.
// 7.6. Gauti pirmų keturių masyvo narių reikšmes.
// 7.7. Gauti paskutinių penkių masyvo narių reikšmes.
// 7.8. Gauti nuo penkto iki penkiolikto masyvo narių reikšmes.
// 7.9. Gauti kas antro masyvo nario reikšmes.
// 7.10. Gauti pirmo ir paskutinio masyvo narių reikšmes.
// 7.11. Gauti pirmo masyvo narį ir į konsolę išvesti jo property "title" reikšmę.
// 7.12. Gauti antro masyvo narį ir į konsolę išvesti jo property "body" reikšmę.
// 7.13. Gauti trečią masyvo narį ir į konsolę išvesti jo property "title" ir "body" reikšmes tokiu formatu: Post title is: 'post title' and the content is: 'post content'.
// 7.14. Išvesti visus masyvo narius į konsolę.
// 7.15. Išvesti visų masyvo narių property "title" į konsolę.
// 7.16. Išvesti visų masyvo narių property "body" į konsolę.
// 7.17. Išvesti visų masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
// 7.18. Išvesti pirmų keturių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
// 7.19. Išvesti paskutinių septynių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
// 7.20. HTML faile sukurti ul elementą ir kiekvieną masyvo nario property "title" reikšmę, kaip li elementą, išvesti į ul elementą.
// 7.21. HTML faile sukurti ul elementą ir kiekvieną masyvo nario property "title" ir "body" išvesti tokiu formatu: Title: "post title". Content: "post content".
// 7.22. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas prasideda raide "s".
// 7.23. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas baigiasi "t" arba "m".
// 7.24. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi daugiau simbolių nei 15.
// 7.25. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi mažiau simbolių nei 20 ir kurių "body" turi daugiau simbolių nei 50.
// 7.26. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi tarp 20 ir 30 simbolių ir kurių "body" turi tarp 70 ir 100 simbolių.
// 7.27. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi simbolių junginį "it", o "body" turi simbolių junginį "quo".
// 7.28. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių "body" turi žodį "sit". Jeigu žodis turi šį simbolių junginį, tačiau tai nėra pilna jo reikšmė (pvz. žodžiai "sitto" ar "quasit"), jie neturėtų būti atvaizduojami.
// 7.29. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi daugiau nei 3 "a" raides, o "body" turi mažiau nei 5 "o" raides.

//----------------------------------------------------------------

// 6. Visoms prieš tai atliktoms užduotims sukurti funkcijas. Jeigu tą pačia funkciją galima panaudoti keletui užduočių - taip ir padaryti.
// 6.1. Funkcija privalo priimti bent vieną parametrą, t.y. masyvą, su kuriuo dirbama.
// 6.2. Jeigu įmanoma ir logiška, pridėti ir daugiau parametrų.

//----------------------------------------------------------------

// 7.30. Ankstesnėse užduotyse sukurtus li elementus papildyti numeracija (nenaudoti ol elemento) pradedant nuo 1, pvz.: 
// 1. Title: "post title". Content: "post content". 
// 2. Title: "post title". Content: "post content". 
// ir t.t.

// ---------------------------------------------------

// // MAP RETURN
// let citiesMap = citiesArr.map(function(city, index){
//     return (index + 1) + '. ' + city;
//   }).reverse();
//   console.log(citiesMap);0
  
// //   forEach negali grąžinti (return) reikšmės ir negalima chain'inti
//   let forEachMap = citiesArr.forEach(function(city, index){
//     return (index + 1) + '. ' + city;
//   }).reverse();
//   console.log(forEachMap);


//--------------------------------------------------------------------------------
// Perasyti funkcija su map ir forEach ciklu 

// let movies = ["matrix", "terminator", "gladiator", "darkskies", "avatar", "alien", "fourofakind", "avengers", "blade", "wakanda"];
// let countries = ["latvia", "estonia", "america", "england", "ireland", "canada", "australia", "france", "germany", "italy"];
// let names = ["monica", "john", "peter", "robert", "matthew", "daniel", "donald", "steven", "paul", "andrew"];


// function arrayLoop(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// arrayLoop(movies);


// function arrayMap(arr) {
//     arr.map(function(element){
//         console.log(element)
//     }) 
// }

// arrayMap(movies)


// function arrayforEach(arr) {
//     arr.forEach(function(element){
//         console.log(element)
//     }) 
// }

// arrayforEach(movies)
   
//--------------------------------------------------------------------------------

// Dirbti su šiuo masyvu:
// let array = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

// 1. Dirbant su šiuo masyvu eilės tvarka atlikti žemiau pateiktas užduotis. Naudoti metodus: pop, push, shift, unshift, splice.
// 1.1. Pašalinti pirmą masyvo narį.
// 1.2. Pašalinti paskutinį masyvo narį.
// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.
// 1.4. Pašalinti priešpaskutinį masyvo narį.
// 1.5. Pašalinti antrą masyvo narį.
// 1.6. Pašalinti 7 ir 8 masyvo narius.
// 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.
// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
// 1.16. Į masyvo vidurį pridėti skaičių 0.
// 1.17. Pašalinti pirmą masyvo narį.
// 1.18. Pašalinti paskutinį masyvo narį.
// 1.19. Į masyvo pradžią pridėti žodį "start".
// 1.20. Į masyvo pabaigą pridėti žodį "end".

// Atlikus šias užduotis eilės tvarka masyvas turėtų atrodyti taip:
// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

// let array = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];
// console.log(array)

// let output1 = array.shift()
// console.log(array)

// let output2 = array.pop()
// console.log(array)

// let output3 = array.splice(10,1)
// console.log(array)

// let output4 = array.splice(18,1)
// console.log(array)

// let output5 = array.splice(1,1)
// console.log(array)

// let output6 = array.splice(6,2)
// console.log(array)

// let output7 = array.splice(10,3)
// console.log(array)

// let output8 = array.splice(2,1,888)
// console.log(array)

// let output9 = array.splice(9,1,33,789,6543)
// console.log(array)

// let output10 = array.splice(14,1,321,654,987)
// console.log(array)

// let output11 = array.splice(1,0,11)
// console.log(array)

// let output12 = array.splice(13,0,1)
// console.log(array)

// let output13 = array.splice(18,0,-1)
// console.log(array)

// let output14 = array.unshift(1,2,3)
// console.log(array)

// let output15 = array.push(-333,-321,-312)
// console.log(array)

// let output16 = array.splice(13,0,0)
// console.log(array)

// let output17 = array.shift()
// console.log(array)

// let output18 = array.pop()
// console.log(array)

// let output19 = array.unshift('start')
// console.log(array)

// let output20 = array.push('end')
// console.log(array)

// Rezultatas:
// (27) ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

//-------------------------------------------------------

// Atlikus šias užduotis eilės tvarka masyvas turėtų atrodyti taip:
// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

// 2. Tęsiant darbą su šiuo masyvu atlikti šias užduotis naudojant slice metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina slice metodas, ir šį kintamąjį išvesti į konsolę:
// 2.1. Gauti pirmą masyvo narį.
// 2.2. Gauti paskutinį masyvo narį.
// 2.3. Gauti antrą masyvo narį.
// 2.4. Gauti priešpaskutinį masyvo narį.
// 2.5. Gauti aštuntą masyvo narį.
// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.
// 2.7. Gauti vidurinį masyvo narį.
// 2.8. Gauti pirmus tris masyvo narius.
// 2.9. Gauti paskutinius tris masyvo narius.
// 2.10. Gauti pirmus 10 masyvo narius.
// 2.11. Gauti paskutinius 10 masyvo narius.
// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).
// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).
// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
// 2.16. Gauti visus masyvo narius išskyrus pirmą.
// 2.17. Gauti visus masyvo narius išskyrus paskutinį.
// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.
// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.
// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).
// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).
// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.
// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
// 2.27. Gauti 9 narius skaičiuojant nuo 11.
// 2.28. Gauti 12 narių skaičiuojant nuo 8.
// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.

// let array2 = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
// console.log(array2)
// console.log(array2.length)

// let output1 = array2.slice(0, 1)
// console.log(output1)

// let output2 = array2.slice(26, 27)
// console.log(output2)

// let output3 = array2.slice(1, 2)
// console.log(output3)

// let output4 = array2.slice(25, 26)
// console.log(output4)

// let output5 = array2.slice(7, 8)
// console.log(output5)

// let output6 = array2.slice(18,19)
// console.log(output6)

// let output7 = array2.slice(13, 14)
// console.log(output7)

// let output8 = array2.slice(0, 3)
// console.log(output8)

// let output9 = array2.slice(24, 27)
// console.log(output9)

// let output10 = array2.slice(0, 10)
// console.log(output10)

// let output11 = array2.slice(17, 27)
// console.log(output11)

// let output12 = array2.slice(2, 8)
// console.log(output12)

// let output13 = array2.slice(18, 23)
// console.log(output13)

// let output14 = array2.slice(10, 19)
// console.log(output14)

// let output15 = array2.slice(8, 17)
// console.log(output14)

// let output16 = array2.slice(1, 28)
// console.log(output16)

// let output17 = array2.slice(0, 26)
// console.log(output17)

// let output18 = array2.slice(5, 27)
// console.log(output18)

// let output19 = array2.slice(0, 22)
// console.log(output19)

// let output20 = array2.slice(0, 13) 
// console.log(output20)

// let output21 = array2.slice(14, 27) 
// console.log(output21)

// let output22 = array2.slice(1, 26)
// console.log(output22)

// let output23 = array2.slice(5, 24)
// console.log(output23)

// let output24 = array2.slice(1, 19)
// console.log(output24)

// let output25 = array2.slice(7, 26)
// console.log(output25)

// let output26 = array2.slice(9, 15) 
// console.log(output26)

// let output27 = array2.slice(10,19)
// console.log(output27)

// let output28 = array2.slice(7, 19)
// console.log(output28)

// let output29 = array2.slice(0, 5)
// let output30 = array2.slice(21, 27)
// let output31 = output29.concat(output30)  
// console.log(output31)
 
// let output32 = array2.slice(2, 6)
// let output33 = array2.slice(14, 18)
// let output34 = output32.concat(output33)  
// console.log(output34)


//---------------------------------------------------------------

// 3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant filter metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį išvesti į konsolę:
// 3.1. Gauti tik teigiamus skaičius.
// 3.2. Gauti tik neigiamus skaičius.
// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.
// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.
// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.
// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.
// 3.7. Gauti tik skaičius, kurie dalinasi iš 31.
// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.
// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.
// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.
// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.
// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.
// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.
// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.
// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.
// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.
// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.
// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.
// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.
// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.
// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.
// 3.22. Gauti tik skaičius, kurie yra didesni už 100.
// 3.23. Gauti tik skaičius, kurie yra didesni už 555.
// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.
// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.
// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.
// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.
// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.
// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.
// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.
// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.
// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.
// 3.51. Gauti tik skaičius.
// 3.52. Gauti tik tekstus (string).
// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.
// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
// 3.55. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
// 3.56. Gauti tik tekstus (string), kurie turi raidę t.
// 3.57. Gauti tik tekstus (string), kurie turi raidę y.
// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.
// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
// 3.70. Gauti tik tekstus (string), kurie baigiasi raide d.
// 3.71. Gauti tik tekstus (string), kurie baigiasi raide s.
// 3.72. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
// 3.73. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
// 3.74. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
// 3.75. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
// 3.76. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
// 3.77. Gauti tik tekstus (string), kurių trečias simbolis yra a.
// 3.78. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
// 3.79. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
// 3.80. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.

// let array3 = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
// console.log(array3)

// let result1 = array3.filter(function (x){return x > 0})
// console.log(result1)

// let result2 = array3.filter(function (x){return x < 0})
// console.log(result2)

// let result3 = array3.filter(function (x){return x % 2 === 0})
// console.log(result3)

// let result4 = array3.filter(function (x){return x % 3 === 0})
// console.log(result4)

// let result5 = array3.filter(function (x){return x % 5 === 0})
// console.log(result5)

// let result6 = array3.filter(function (x){return x % 11 === 0})
// console.log(result6)

// let result7 = array3.filter(function (x){return x % 31 === 0})
// console.log(result7)

// let result8 = array3.filter(function (x){return x % 2 === 0 && x % 3 === 0})
// console.log(result8)

// let result9 = array3.filter(function (x){return x % 3 === 0 && x % 7 === 0})
// console.log(result9)

// let result10 = array3.filter(function (x){return x % 5 === 0 && x % 9 === 0})
// console.log(result10)

// let result11 = array3.filter(function (x){return x % 5 === 0 && x % 11 === 0})
// console.log(result11)

// let result12 = array3.filter(function (x){return x % 2 === 0 && x % 8 === 0 && x % 12 === 0})
// console.log(result12)

// let result13 = array3.filter(function (x){return x % 2 === 0 || x % 3 === 0})
// console.log(result13)

// let result14 = array3.filter(function (x){return x % 3 === 0 || x % 5 === 0})
// console.log(result14)

// let result15 = array3.filter(function (x){return x % 5 === 0 || x % 6 === 0})
// console.log(result15)

// let result16 = array3.filter(function (x){return x % 7 === 0 || x % 8 === 0})
// console.log(result16)

// let result17 = array3.filter(function (x){return x % 9 === 0 || x % 13 === 0})
// console.log(result17)

// let result18 = array3.filter(function (x){return x % 2 === 0 || x % 3 === 0 || x % 5 === 0})
// console.log(result18)

// let result19 = array3.filter(function (x){return x % 5 === 0 || x % 7 === 0 || x % 9 === 0})
// console.log(result19)

// let result20 = array3.filter(function (x){return x % 7 === 0 || x % 8 === 0 || x % 11 === 0})
// console.log(result20)

// let result21 = array3.filter(function (x){return x % 9 === 0 || x % 12 === 0 || x % 13 === 0})
// console.log(result21)

// let result22 = array3.filter(function (x){return x > 100})
// console.log(result22)

// let result23 = array3.filter(function (x){return x > 555})
// console.log(result23)

// let result24 = array3.filter(function (x){return x >= 888})
// console.log(result24)

// let result25 = array3.filter(function (x){return x >= 6789})
// console.log(result25)

// let result26 = array3.filter(function (x){return x < 50})
// console.log(result26)

// let result27 = array3.filter(function (x){return x < 1000})
// console.log(result27)

// let result28 = array3.filter(function (x){return x <= -1})
// console.log(result28)

// let result29 = array3.filter(function (x){return x <= -5564})
// console.log(result29)

// let result30 = array3.filter(function (x){return x < 1000 && x > 500})
// console.log(result30)

// let result31 = array3.filter(function (x){return x < 100 && x > 0})
// console.log(result31)

// let result32 = array3.filter(function (x){return x < 0 && x > -50})
// console.log(result32)

// let result33 = array3.filter(function (x){return x <= 0 && x > -100})
// console.log(result33)

// let result34 = array3.filter(function (x){return x >= 0 && x < 55})
// console.log(result34)

// let result35 = array3.filter(function (x){return x >= 444 && x <= 654})
// console.log(result35)

// let result36 = array3.filter(function (x){return x > 0 && x % 2 === 0})
// console.log(result36)

// let result37 = array3.filter(function (x){return x > 0 && x % 3 === 0})
// console.log(result37)

// let result38 = array3.filter(function (x){return x < 0 && x % 4 === 0})
// console.log(result38)

// let result39 = array3.filter(function (x){return x < 0 && x % 111 === 0})
// console.log(result39)

// let result40 = array3.filter(function (x){return x > 500 && x % 2 === 0})
// console.log(result40)

// let result41 = array3.filter(function (x){return x > 1000 && x % 3 === 0})
// console.log(result41)

// let result42 = array3.filter(function (x){return x < 1000 && x % 9 === 0})
// console.log(result42)

// let result43 = array3.filter(function (x){return x < 500 && x % 2 === 0})
// console.log(result43)

// let result44 = array3.filter(function (x){return x >= 33 && x % 3 === 0})
// console.log(result44)

// let result45 = array3.filter(function (x){return x >= 444 && x % 12 === 0})
// console.log(result45)

// let result46 = array3.filter(function (x){return x <= 155 && x % 5 === 0})
// console.log(result46)

// let result47 = array3.filter(function (x){return x <= -333 && x % 9 === 0})
// console.log(result47)

// let result48 = array3.filter(function (x){return x > 100 && x < 500 && x % 5 === 0})
// console.log(result48)

// let result49 = array3.filter(function (x){return x >= 888 && x < 1000 && x % 2 === 0})
// console.log(result49)

// let result50 = array3.filter(function (x){return x <= 888 && x >= -333 && x % 3 === 0 && x !== 0})
// console.log(result50)

// let result51 = array3.filter(numbersOnly)
// function numbersOnly(x) {return typeof (x) === 'number'}
// console.log(result51)

// let result52 = array3.filter((x) => typeof x === 'string')
// console.log(result52)

// let result53 = array3.filter(function (x) {if (typeof (x) === 'string' && x.length > 5) {return true;}})
// console.log(result53)

// let result54 = array3.filter(function (x) {if (typeof (x) === 'string' && x.length <= 5) {return true;}})
// console.log(result54)

// // 3.55 uzduotys sutampa su 3.54
// let result55 = array3.filter(function (x) {if (typeof (x) === 'string' && x.length <= 5) {return true;}})
// console.log(result55)


// let result56 = array3.filter(function (x) {
//     let letter = "t"
//     if (typeof (x) === 'string' && x.includes(letter)) {
//             return true;
//         }
//     }
// )
// console.log(result56)


// let result57 = array3.filter(function (x) {
//     let letter = "y"
//     if (typeof (x) === 'string' && x.includes(letter)) {
//             return true;
//         }
//     }
// )
// console.log(result57)


// let result58 = array3.filter(function (x) {
//     let letter = "e"
//     let letter2 = "a"
//     if (typeof (x) === 'string' && (x.includes(letter) || x.includes(letter2))) {
//             return true;
//         }
//     }
// )
// console.log(result58)


// let result59 = array3.filter(function (x) {
//     let letter = "t"
//     let letter2 = "i"
//     if (typeof (x) === 'string' && (x.includes(letter) && x.includes(letter2))) {
//             return true;
//         }
//     }
// )
// console.log(result59)


// let result60 = array3.filter(function (x) {
//     let letter = "t"
//     let letter2 = "k"
//     if (typeof (x) === 'string' && (x.includes(letter) && x.includes(letter2) === false)) {
//             return true;
//         }
//     }
// )
// console.log(result60)


// let result61 = array3.filter(function (x) {
//     let letter = "a"
//     let letter2 = "s"
//     if (typeof (x) === 'string' && (x.includes(letter) && x.includes(letter2) === false)) {
//             return true;
//         }
//     }
// )
// console.log(result61)


// let result62 = array3.filter(function (x) {
//     if (typeof (x) === 'string') {
//             return x;
//         }
//     }).filter(function (x) {
//         const xWithoutT = x.replaceAll("t", "");
//         return x.length - xWithoutT.length >= 2;
//     }
// )
// console.log(result62)


// let result63 = array3.filter(function (x) {
//     let letter = "st"
//     if (typeof (x) === 'string' && x.includes(letter)) {
//             return true;
//         }
//     }
// )
// console.log(result63)


// let result64 = array3.filter(function (x) {
//     let letter = "nd"
//     if (typeof (x) === 'string' && x.includes(letter)) {
//             return true;
//         }
//     }
// )
// console.log(result64)


// let result65 = array3.filter(function (x) {
//     let letter = "s"
//     if (typeof (x) === 'string' && x.includes(letter) === false) {
//             return true;
//         }
//     }
// )
// console.log(result65)


// let result66 = array3.filter(function (x) {
//     let letter = "t"
//     if (typeof (x) === 'string' && x.includes(letter) === false) {
//             return true;
//         }
//     }
// )
// console.log(result66)


// let result67 = array3.filter(function (x) {
//     let letter = "r"
//     let letter2 = "l"
//     if (typeof (x) === 'string' && x.includes(letter) === false && x.includes(letter2) === false) {
//             return true;
//         }
//     }
// )
// console.log(result67)


// let result68 = array3.filter(function (x) {
//     function startsWithNumber(x) {
//         return /^\d/.test(x);
//     }
//     if (typeof (x) === 'string' && startsWithNumber(x)) {
//             return true;
//         }
//     }
// )
// console.log(result68)


// let result69 = array3.filter(function (x) {if (typeof (x) === 'string' && x.startsWith('s')) {return true;}})
// console.log(result69)

// let result70 = array3.filter(function (x) {if (typeof (x) === 'string' && x.startsWith('o')) {return true;}})
// console.log(result70)

// let result71 = array3.filter(function (x) {if (typeof (x) === 'string' && x.endsWith('d')) {return true;}})
// console.log(result71)

// let result72 = array3.filter(function (x) {if (typeof (x) === 'string' && x.endsWith('s')) {return true;}})
// console.log(result72)

// let result73 = array3.filter(function (x) {if (typeof (x) === 'string' && x.includes('o') && x.length > 4) {return true;}})
// console.log(result73)

// let result74 = array3.filter(function (x) {if (typeof (x) === 'string' && x.includes('a') && x.length >= 5) {return true;}})
// console.log(result74)


// let result75 = array3.filter(function (x) {
//     function hasRepeats (x) {
//         return /(.).*\1/.test(x);
//     }
//     if (typeof (x) === 'string' && hasRepeats(x)) {
//             return true;
//         }
//     }
// )
// console.log(result75)


// let result76 = array3.filter(function (x) {
//     function isUnique(str) {
//         return new Set(str).size == str.length;
//     }
//     let letter = 's'
//     if (typeof (x) === 'string' && isUnique(x) && x.includes(letter)) {
//             return true;
//         }
//     }
// )
// console.log(result76)


// let result77 = array3.filter(function (x) {if (typeof (x) === 'string' && x.charAt(2) === "a" ) {return true;}})
// console.log(result77)

// let result78 = array3.filter(function (x) {if (typeof (x) === 'string' && x.charAt(3) === "l" ) {return true;}})
// console.log(result78)

// let result79 = array3.filter(function (x) {if (typeof (x) === 'string' && x.charAt(4) !== "t" && x.length > 4) {return true;}})
// console.log(result79)


// let result80 = array3.filter(function (x) {
//     function startsWithNumber(x) {
//         return /^\d/.test(x);
//     }
//     if (typeof (x) === 'string' && x.charAt(0) !== "e" && x.length < 6 && startsWithNumber(x) === false) {
//             return true;
//         }
//     }
// )
// console.log(result80)

// ------------------------------


// 4. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant for ciklą ir map metodą. Kiekvieną užduotį atlikti abiem būdais (for ciklu ir map metodu). Visus narius išvesti į konsole pagal žemiau pateiktas sąlygas:

let array3 = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
console.log(array3)

// 4.1. Tik skaičius (number tipo duomenis).
function arrayLoop1(arr){
    for (let i = 0; i < array3.length; i++){
        if (!isNaN(arr[i])) {
            console.log(arr[i])
        }
    }
}

arrayLoop1(array3);

let arrayLoopMap1 = array3.map(function(x){
        if (!isNaN(x)){
            console.log(x)
        }
    }
)


// 4.2. Tik tekstą (string tipo duomenis).
function arrayLoop2(arr){
    for (let i = 0; i < array3.length; i++){
        if (typeof arr[i] === 'string') {
            console.log(arr[i])
        }
    }
} 

arrayLoop2(array3);

let arrayLoopMap2 = array3.map(function(x){
        if (isNaN(x)){
            console.log(x)
        }
    }
)


// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.
function arrayLoop3(arr){
    for (let i = 0; i < array3.length; i++){
        if (typeof arr[i] === 'number') {
            console.log(arr[i] ** 4)
        }
    }
} 

arrayLoop3(array3);

let arrayLoopMap3 = array3.map(function(x){
        if (!isNaN(x)){
            console.log(x ** 4)
        }
    }
)


// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.
function arrayLoop4(arr){
    for (let i = 0; i < array3.length; i++){
        if (typeof arr[i] === 'number') {
            console.log(arr[i] + 55)
        }
    }
} 

arrayLoop4(array3);

let arrayLoopMap4 = array3.map(function(x){
        if (!isNaN(x)){
            console.log(x + 55)
        }
    }
)


// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.
function arrayLoop5(arr){
    for (let i = 0; i < array3.length; i++){
        if (typeof arr[i] === 'number') {
            console.log(arr[i] / 2)
        }
    }
} 

arrayLoop5(array3);

let arrayLoopMap5 = array3.map(function(x){
        if (!isNaN(x)){
            console.log(x / 2)
        }
    }
)


// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".
function arrayLoop6(arr){
    for (let i = 0; i < array3.length; i++){
        if (typeof arr[i] === 'number') {
            console.log('Number: ' + arr[i])
        }
    }
} 

arrayLoop6(array3);

let arrayLoopMap6 = array3.map(function(x){
        if (!isNaN(x)){
            console.log('Number: ' + x)
        }
    }
)


// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
//   "Index: 0, Number: 2"
//   "Index: 1, Number: 3"
//   "Index: 2, Number: 5"
//   Ir t.t.
function arrayLoop7(arr){
    for (let i = 0; i < array3.length; i++){
        if (typeof arr[i] === 'number') {
            console.log('Index: ' + i + ', ' + 'Number: ' + arr[i])
        }
    }
}

arrayLoop7(array3);

let arrayLoopMap7 = array3.map(function(x, i){
        if (!isNaN(x)){
            console.log('Index: ' + i + ', Number: ' + x)
        }
    }
)


// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.
function arrayLoop8(arr){
    for (let i = 0; i < array3.length; i++){
        if (typeof arr[i] === 'number') {
            console.log(arr[i] * i)
        }
    }
}

arrayLoop8(array3);

let arrayLoopMap8 = array3.map(function(x, i){
        if (!isNaN(x)){
            console.log(x * i)
        }
    }
)


// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
//   - Pirmo skaičiaus dauginti nereikia.
//   - Antrą skaičių dauginti iš pirmo.
//   - Trečią skaičių dauginti iš antro.
//   - Ketvirta skaičių dauginti iš trečio.
//   - Penktą skaičių dauginti iš ketvirto.
//   Ir t.t.
let numbersArray = array3.filter(item => !isNaN(item))
function arrayLoop9(arr){
    for (let i = 0; i < numbersArray.length; i++){
        if (i > 0) {
            console.log(arr[i] * arr[i - 1])
        }
        else {
            console.log(arr[i])
        }
    }
}

arrayLoop9(numbersArray);

let onlyNumbers = array3.filter(item => !isNaN(item))
let arrayLoopMap9 = onlyNumbers.map(function(x, i, a){
        if (i === 0){
            console.log(x)
        }
        else {
            console.log(x * a[i - 1])
        }
    }
)


// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.
function arrayLoop10(arr){
    for (let i = 0; i < array3.length; i++){
        if (arr[i] * 5 > 350) {
            console.log(arr[i])
        }
    }
}

arrayLoop10(array3);

let arrayLoopMap10 = array3.map(function(x){
        if (!isNaN(x) && x * 5 > 350){
            console.log(x)
        }
    }
)


// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".
function arrayLoop11(arr){
    for (let i = 0; i < array3.length; i++){
        if (isNaN(arr[i])) {
            console.log(arr[i] + ' has ' + arr[i].length + ' symbols')
        }
    }
}

arrayLoop11(array3);

let arrayLoopMap11 = array3.map(function(x){
        if (isNaN(x)){
            console.log(x + ' has ' + x.length + ' symbols.')
        }
    }
)


// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".
function arrayLoop12(arr){
    for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string') {

            let lettersArray = arr[i].split('');
            let updatedWord = lettersArray.join('-').toUpperCase();
            console.log(updatedWord);
        }
    }
}

arrayLoop12(array3);

let arrayLoopMap12 = array3.map(function(x){
        if (isNaN(x)){
            let lettersArray = x.split('');
            let updatedWord = lettersArray.join('-').toUpperCase();
            console.log(updatedWord);
        }
    }
)


// 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";
function arrayLoop13(arr){
    for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string') {

            let lettersArray = arr[i].split('');
            lettersArray[0] = '_';
            lettersArray[2] = '_';
            let updatedWord = lettersArray.join('');
            console.log(updatedWord);
        }
    }
}

arrayLoop13(array3);

let arrayLoopMap13 = array3.map(function(x){
        if (isNaN(x)){
            let lettersArray = x.split('');
            lettersArray[0] = '_';
            lettersArray[2] = '_';
            let updatedWord = lettersArray.join('');
            console.log(updatedWord);
        }
    }
)

// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";
function arrayLoop14(arr){
    for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string') {
                let splitedArray = arr[i].split('').reverse()
                let joinedArray = splitedArray.join('')
                console.log(joinedArray)
        }
    }
}

arrayLoop14(array3)

let arrayLoopMap14 = array3.map(function(x){
        if (isNaN(x)){
            let splitedArray = x.split('').reverse()
            let joinedArray = splitedArray.join('')
            console.log(joinedArray)
        }
    }
)


// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".
function arrayLoop15(arr){
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] === 'string'){
            if (i < 1) {
                console.log("Word " + arr[i] + ' is first in the list. Task cannot be completed.')
            }
            else if (i > arr.length - 2){
                console.log("Word " + arr[i] + ' is last in the list. Task cannot be completed.')
            }
            else {
                console.log("Word " + arr[i] + ' is between ' + arr[i - 1] + ' and ' + arr[i + 1] + ' in the array.')
            }
        }
    }
}
arrayLoop15(array3)

let arrayLoopMap15 = array3.map(function(x, i){
        if (typeof x === 'string'){
            if (i < 1) {
                console.log("Word " + x + ' is first in the list. Task cannot be completed.')
            }
            else if (i > array3.length - 2){
                console.log("Word " + x + ' is last in the list. Task cannot be completed.')
            }
            else {
                console.log("Word " + x + ' is between ' + array3[i - 1] + ' and ' + array3[i + 1] + ' in the array.')
            }
        }
    }
)