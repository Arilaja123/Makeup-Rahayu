// === Update Jam WIB (Tampilan Estetik) ===
function updateJam() {
  const options = {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  const time = new Date().toLocaleTimeString('id-ID', options);
  const jamElement = document.getElementById('jamWIB');
  if (jamElement) {
    jamElement.textContent = time + " WIB";
  }
}
setInterval(updateJam, 1000);
updateJam();


// === Toggle Menu Navigasi (Mobile) ===
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Tutup menu otomatis ketika klik link di dalamnya (UX lebih baik)
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}


// === Popup Selamat Datang (dengan kontrol sessionStorage) ===
window.addEventListener('load', () => {
  const popup = document.getElementById('popup');
  const tutupPopupBtn = document.getElementById('tutupPopup');

  if (popup && !sessionStorage.getItem('popupShown')) {
    setTimeout(() => {
      popup.style.display = 'flex';
      sessionStorage.setItem('popupShown', 'true');
    }, 500); // delay biar muncul halus
  }

  if (tutupPopupBtn) {
    tutupPopupBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  }
});


// === Auto Refresh Aman 1x per Sesi (hindari loop reload) ===
if (!sessionStorage.getItem('refreshedOnce')) {
  sessionStorage.setItem('refreshedOnce', 'true');
  window.location.reload();
}


// === Lihat Lebih Banyak (Galeri) ===
const btnShowMore = document.getElementById('showMore');
const gallery = document.querySelector('.gallery');

if (btnShowMore && gallery) {
  let isAnimating = false;

  btnShowMore.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;

    gallery.classList.toggle('show-all');
    btnShowMore.textContent = gallery.classList.contains('show-all')
      ? 'Tampilkan Lebih Sedikit'
      : 'Lihat Lebih Banyak';

    setTimeout(() => (isAnimating = false), 400);
  });
}