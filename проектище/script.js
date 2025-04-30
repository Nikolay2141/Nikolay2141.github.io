function initModal() {
    const rulesButton = document.getElementById("rules");
    const rulesModal = document.getElementById("rules-mod");
    const closeModal = document.querySelector(".close-rules");

    rulesButton.addEventListener("click", () => {
        rulesModal.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
        rulesModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === rulesModal) {
            rulesModal.style.display = "none";
        }
    });
}

window.onload = initModal;