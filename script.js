function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addHello() {
  const elem = document.querySelector("#c"+getRandomInt(1, 16))
  console.log(elem)
  elem.innerHTML='Hello'
}