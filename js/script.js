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