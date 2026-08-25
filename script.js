const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const result = document.getElementById("result");
const pointsText = document.getElementById("points");

let rotation = 0;
let points = 0;

spinBtn.addEventListener("click", () => {
    // Tambah putaran
    rotation += 1800 + Math.floor(Math.random() * 360);

    wheel.style.transform = `rotate(${rotation}deg)`;

    // Matikan tombol sementara
    spinBtn.disabled = true;

    setTimeout(() => {
        // Pilih angka hasil
        const angka = Math.floor(Math.random() * 8) + 1;

        result.textContent = "Hasil: " + angka;

        // Tambah poin
        points += angka;
        pointsText.textContent = points;

        spinBtn.disabled = false;
    }, 3000);
});