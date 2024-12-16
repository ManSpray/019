rand = (min, max) =>{
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const randColor = _ => Math.floor(Math.random()*16777215).toString(16).padEnd(6, '0');

// 1. Programiškai sukurti masyvą masyvas01, kuriame būtų 10 elementų - atsitiktinių skaičių nuo 10 iki 100.
const masyvas01 = [];
for (let i = 0; i<10; i++) {
    masyvas01.push(rand(10, 100));
}
console.log(masyvas01);

// 2. Programiškai sukurti masyvą masyvas02, kuriame būtų 10 elementų - atsitiktinių spalvų.

const masyvas02 = [];
for (let i = 0; i<10; i++) {
    masyvas02.push(randColor());
}
console.log(masyvas02);

// 3. Programiškai sukurti masyvą masyvas03, kuriame būtų 10 elementų - atsitiktinai raidė "A" arba "B".

const masyvas03 = [];
for (let i = 0; i<10; i++) {
    const r = rand(0, 1);
    if (r==0) {
        masyvas03.push("A");
    } else {
        masyvas03.push("B");
    }
    
}
console.log(masyvas03);
