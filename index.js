'use strict';

/* 1 uzduotis LOOPS */

// Parasykite funkcija, kuri priima skaiciu kaip argumenta ir naudoja for cikla, 
// kad atspausdintu visus sveikus skaicius nuo 1 iki to skaiciaus, 
// kurie dalinasi is 3.

function dalinasiIs3(n){
    for(let i = 0; i <= n; i++){
        if(i % 3 == 0){
            console.log(i);
        }
    }
}
// dalinasiIs3(15);
// dalinasiIs3(38);



/* 2 uzduotis ARRAY METHODS */

// Sukurkite array su skaiciais ir parasykite funkcija, 
// kuri grazina visus porinius skaicius masyve.

const arr = Array(10).fill().map(() => Math.floor(Math.random() * 10));

function masyvoPoros(array){
    let poros = [];
    for(let i in array){
        if(array[i] % 2 == 0){
            poros.push(array[i]);
        }
    }
    console.log(poros);
};
masyvoPoros(arr);


/* 3 uzduotis OBJECTS */

// Sukurkite objekta, kuris apibudina gyvuna 
// (tipas, vardas, gimimo metai) 
// ir metoda, kuris grazina gyvuno amziu.

const animal = {
    type: "parrot",
    name: "Kukis",
    birthYear: 2015,
    getAge: function(){
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }
}

console.log(animal.getAge());
