const fishContainer = document.querySelector("#fish-container")
const arrayFish = ["images/decor/blue-light-right.png", "images/decor/blue-light-left.png"]

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

for (let i = 0; i < 40; i++) {

    const randomIndex = getRandomIntInclusive(0, 1)
    const randomDeg = getRandomIntInclusive(0, 180)
    const positionX = getRandomIntInclusive(0, 95)
    const positionY = getRandomIntInclusive(300, 6000)

    fishContainer.innerHTML += `<li class="light-fish" id="lf-${i}"><img alt="" src="${arrayFish[randomIndex]}"></li>`

    const fish = fishContainer.querySelector(`#lf-${i}`)
    const fishImg = fish.querySelector("img")
    fish.style.transform = `translate(${positionX}vw,${positionY}px)`
    fishImg.style.transform = `rotate(${randomDeg}deg)`

}



