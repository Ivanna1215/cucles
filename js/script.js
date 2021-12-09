function sample() {
    let num =0;
    while (num<5) {
        console.log (num);
        num ++;
 
    }
}

function number() {
    let num = 5;
    while (num) {
        console.log (num);
        num --;
    }
}

function ex() {
    let num = 5;
    while (num) console.log (num--);
}
function forfunk() {
    for (let num=0; num<5; num++) {
        console.log (num);
    }
}
function BReak () {
    let num =0;
    for (;num<5;num++) {
        console.log (num);
        if (num == 2) break;
        console.log (`Work end, num = ${num}`)
    }
}


function cOntINue() {
    let num = 0;
    for (; num < 5; num++){
        if (num==2) continue;
        console.log (num);
    }
}
function getSymbol () {
    let text = "holiday";
    let firstSymbol = text [0];
    console.log (firstSymbol);
    let lastSumbol = text [text.length-1];
    console.log (lastSumbol);
    lastSumbol = text [text.length-2];
    console.log (lastSumbol);

    for (const ivanna of text) {
        console.log (ivanna);
    }
}

 function cOnfirm () {
     let result = confirm ("want to continue?")
 }

 function getTransformation () {
let userAge = 58;
console.log (userAge);
console.log (typeof userAge);
userAge = String (userAge);
console.log (userAge);
console.log (typeof userAge);

 }

 function multiplicationTable () {
    let i = 1;
    let msg = " ";
    while (i<11) {
       msg+= i + 'x 3=' + (i*3)+ '<br>';
       i++; 
    }
  document.write (msg);
 
}
function getcountSymbol () {
    let a = ' HelloIvanna!'
    let count = 0;
    for (let i = 0; i<a.length; i++) {
        if (a [i]==='a') {
            count++;
        }
    }
    console.log (count);
}