function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber = getRandomInt(1, 16);
console.log(randomNumber);
function addHello() {
    console.log(hello);
}