const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const pointsText = document.getElementById("points");
const result = document.getElementById("result");
const resultText = document.getElementById("resultText");

let points = 0;
let rotation = 0;
let spinning = false;

const rewards = [10, 50, 20, 100, 30, 75, 40, 25];

spinBtn.addEventListener("click", () => {
    if (spinning) return;

    spinning = true;
    spinBtn.disabled = true;
    result.style.display = "none";

    const randomIndex = Math.floor(Math.random() * rewards.length);
    const reward = rewards[randomIndex];

    const segment = 360 / rewards.length;
    const target = 360 - (randomIndex * segment + segment / 2);

    rotation += 360 * 5 + target;

    wheel.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
        points += reward;
        pointsText.textContent = points;

        resultText.textContent =
            `Kamu mendapatkan ⭐ ${reward} poin virtual!`;

        result.style.display = "block";

        spinning = false;
        spinBtn.disabled = false;
    }, 4200);
});