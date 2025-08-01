document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('messageForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('messageText').value.trim();

    if (!name || !email || !phone || !message) {
      alert('Semua kolom harus diisi!');
      return;
    }

    alert(`Terima kasih, ${name}! Pesan Anda telah terkirim.`);
    form.reset();
  });
});
