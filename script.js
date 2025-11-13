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


// === Popup Selamat Datang ===
window.addEventListener('load', () => {
  const popup = document.getElementById('popup');
  if (popup) {
    popup.style.display = 'flex';
  }
});

const tutupPopupBtn = document.getElementById('tutupPopup');
if (tutupPopupBtn) {
  tutupPopupBtn.addEventListener('click', () => {
    const popup = document.getElementById('popup');
    if (popup) {
      popup.style.display = 'none';
    }
  });
}

// === Lihat Lebih Banyak (Galeri) ===
const btnShowMore = document.getElementById('showMore');
const gallery = document.querySelector('.gallery');

if (btnShowMore && gallery) {
  btnShowMore.addEventListener('click', () => {
    gallery.classList.toggle('show-all');
    btnShowMore.textContent = gallery.classList.contains('show-all')
      ? 'Tampilkan Lebih Sedikit'
      : 'Lihat Lebih Banyak';
  });
}