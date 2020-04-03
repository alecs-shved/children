let ff = "shved";
console.log(ff);

function getRandomInt(min, max) {
    min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
console.log(getRandomInt(1, 100));
console.log(getRandomInt(1, 100));
console.log(getRandomInt(1, 100));
console.log(getRandomInt(1, 100));
console.log(getRandomInt(1, 100));

