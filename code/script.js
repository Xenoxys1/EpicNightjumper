const cat = document.getElementById("cat");
const bullet = document.getElementById('bullet');
let score = 0;
let highScore = 0;

function jump() {
    if (cat.classList != "jump") {
        cat.classList.add("jump")
        setTimeout(function () {
            cat.classList.remove("jump");
        }, 500)
    }
}
let isAlive = setInterval(function () {
    let catTop = parseInt(window.getComputedStyle(cat).getPropertyValue("top"));
    let bulletLeft = parseInt(window.getComputedStyle(bullet).getPropertyValue("left"));

    if (bulletLeft < 40 && bulletLeft > 0 && catTop >= 110) {
        alert('miau morreu');
        score = 0;
    } else {
        score += 1;
        let scoreElement = document.getElementById("score");
        scoreElement.innerHTML = "pontos: " + score;
        if (score > highScore) {
            highScore = score;
            let highScoreElement = document.getElementById("highScore");
            highScoreElement.innerHTML = "pontuação mais alta: " + highScore;
        }
    }

}, 10);

document.addEventListener("keydown", function (event) {
    jump();
})