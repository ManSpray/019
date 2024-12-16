rand = (min, max) =>{
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// 1. Programiškai sukurti masyvą masyvas01, kuriame būtų 10 elementų - atsitiktinių skaičių nuo 10 iki 100.
const masyvas01 = [];
for (i = 0; i<10; i++) {
    masyvas01.push(rand(10, 100));
}
console.log(masyvas01);