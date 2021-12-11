document.getElementById('length').oninput = function() {
    document.getElementById('password-length').innerHTML = this.value;
}

let arr2 = [];
let arr3 = [];
let arr4 = [];
let arr5 = [];

for (let i = 48; i <= 57; i++) {
    arr2.push(String.fromCharCode(i));
}
for (let i = 97; i <= 122; i++) {
    arr3.push(String.fromCharCode(i));
}
for (let i = 65; i <= 90; i++) {
    arr4.push(String.fromCharCode(i));
}
for (let i = 33; i <= 47; i++) {
    arr5.push(String.fromCharCode(i));
}
for (let i = 58; i <= 64; i++) {
    arr5.push(String.fromCharCode(i));
}
for (let i = 123; i <= 126; i++) {
    arr5.push(String.fromCharCode(i));
}


document.getElementById('generator').onclick = generatorPass;

function generatorPass() {
    let result = [];
    if (document.getElementById('number').checked) {
        result = result.concat(arr2);
    }
    if (document.getElementById('lowercase').checked) {
        result = result.concat(arr3);
    }
    if (document.getElementById('uppercase').checked) {
        result = result.concat(arr4);
    }
    if (document.getElementById('symbol').checked) {
        result = result.concat(arr5);
    }
    result.sort(compareRandom);

    let pass = '';
    let passLength = document.getElementById('length').value;

    for (let i = 0; i < passLength; i++) {
        pass += result[randomInteger(0, result.length - 1)];
    }

    document.getElementById('password').value = pass;
}

function compareRandom() {
    return Math.random() - 0.5;
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

document.getElementById('copy').onclick = function() {
    let copyPass = document.getElementById("password").value;
    navigator.clipboard.writeText(copyPass);
}