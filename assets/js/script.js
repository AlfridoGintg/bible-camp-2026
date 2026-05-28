// MOBILE MENU
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// COPY REKENING
function copyRekening() {
    navigator.clipboard.writeText("2059593532");

    // Membuat popup
    const popup = document.createElement("div");
    popup.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: #1e293b;
            color: white;
            padding: 14px 20px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            font-family: sans-serif;
            z-index: 9999;
            animation: slideIn 0.3s ease;
        ">
            <div style="
                width: 24px;
                height: 24px;
                background: #22c55e;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
            ">
                ✔
            </div>
            <span>Rekening sudah di copy</span>
        </div>
    `;

    document.body.appendChild(popup);

    // Hapus popup setelah 3 detik
    setTimeout(() => {
        popup.remove();
    }, 3000);
}

// Animasi popup
const style = document.createElement("style");
style.innerHTML = `
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(100px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}


`;
document.head.appendChild(style);