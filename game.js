// Generate angka acak dari 1-100
const targetNumber = Math.floor(Math.random() * 100) + 1

// Mengambil elemen-elemen dari HTML
const guessSubmit = document.getElementById("guessSubmit");
const guessField = document.getElementById("guessField");
const message = document.getElementById("message");

//Inisialisasi variabel tebakan
let guesses = []
let attempts = 0

// Event listener untuk tombol tebak
guessSubmit.addEventListener("click", checkGuess);

function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guesses.includes(userGuess)) {
        message.textContent = "Anda Sudah Menebak Angka Ini Sebelumnya.";
    } else {
        guesses.push(userGuess);
    attempts ++;
    }
    if (userGuess === targetNumber) {
        message.textContent = `Selamat! Anda berhasil menebaknya dengan benar. Jumlah percobaan: ${attempts}`;
        guessSubmit.disabled = true;
    } else{
        const highOrLow = userGuess > targetNumber ? "terlalu tinggi" : "terlalu rendah";
        message.textContent =  `tebakan Anda ${highOrLow}. Jumlah Percobaan: ${attempts}`;
    }
    
    guessField.value = "";
    guessFIeld.focus(); }

