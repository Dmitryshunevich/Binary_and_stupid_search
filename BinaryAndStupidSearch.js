'use strict';

function getRandomInt(min, max) {
    return Math.floor(Math.random()*(max - min)) + min;
}
function stupidSearch(list, item) {
    for(let i = 0; i < list.length; i++){
        if(list[i] === item){
            return i;
        }
    }
}
function compareNumeric(a,b) {
    if (a>b) return 1;
    if (b>a) return -1;
}
function binarySearch(list, item) {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];
        if (guess === item) {
            return mid;
        }
        if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null;
}
function identifyTheFastest(minNumber, maxNumber, lookingNumber) {
    let arr = [];
    for(let j = minNumber; j < maxNumber; j++){
        let randomNumber = getRandomInt(0,100);
        arr.push(randomNumber);
    }
    let indexOfMyNumber = getRandomInt(minNumber,maxNumber);
    arr[indexOfMyNumber] = lookingNumber;


    let dateA = Date.now();
    console.log('stupid search value = ' + stupidSearch(arr, lookingNumber));
    let dateB = Date.now();

    let dateC = Date.now();
    arr.sort(compareNumeric);
    console.log('The array sorting time was ' + (Date.now() - dateC) + ' milliseconds')
    console.log('binary search value = ' + binarySearch(arr, lookingNumber));
    let dateD = Date.now();

    console.log(
        (dateB - dateA) > (dateD - dateC)
        ?
        'binary faster (' + (dateB - dateA) + ' ms > ' + (dateD - dateC) + ' ms)'
        :
        'stupid faster (' + (dateB - dateA) + ' ms < ' + (dateD - dateC) + ' ms)');

    console.log('___');
    let dateE = Date.now();
    console.log('indexOf() search value = ' + arr.indexOf(lookingNumber))
    let dateF = Date.now();
    console.log((dateF - dateE) + ' milliseconds')
}

identifyTheFastest(0,100000,99999);
