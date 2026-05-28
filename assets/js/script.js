// MOBILE MENU
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// COPY REKENING
function copyRekening() {

    navigator.clipboard.writeText("2059593532");

    alert("Nomor rekening berhasil disalin.");
}