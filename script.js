// Ambil parameter nama game dari URL
const urlParams = new URLSearchParams(window.location.search);
const game = urlParams.get('game');

const gameTitle = document.getElementById('gameTitle');
if (game && gameTitle) {
  const gameNames = {
    mlbb: "Mobile Legends",
    ff: "Free Fire",
    pubg: "PUBG Mobile"
  };
  gameTitle.textContent = `Top Up ${gameNames[game] || "Game"}`;
}

// Simulasi Form Submit
const form = document.getElementById('topupForm');
const resultBox = document.getElementById('result');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const userId = document.getElementById('userId').value;
    const server = document.getElementById('server').value;
    const nominal = document.getElementById('nominal').value;
    const metode = document.getElementById('metode').value;

    resultBox.style.display = 'block';
    resultBox.innerHTML = `
      <strong>Detail Transaksi:</strong><br>
      Game: ${gameTitle.textContent}<br>
      ID: ${userId}${server ? ` (${server})` : ""}<br>
      Nominal: ${nominal}<br>
      Metode Bayar: ${metode}<br><br>
      Silakan lanjutkan pembayaran melalui admin.
    `;

    form.reset();
  });
}
