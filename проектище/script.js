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

function initGameStart() {
    const startButton = document.getElementById("start");
    const rulesButton = document.getElementById("rules");
    const buttonContainer = document.querySelector(".button-container");

    const categoriesContainer = document.createElement('div');
    categoriesContainer.className = 'categories-container';
    categoriesContainer.style.display = 'none';
    const categoryNames = ["Линейная алгебра", "Мат. анализ", "Python"];

    categoryNames.forEach(name => {
        const categoryBtn = document.createElement('button');
        categoryBtn.className = 'button category-button';
        categoryBtn.textContent = name; 
        categoriesContainer.appendChild(categoryBtn);
    });
    const backButtonWrapper = document.createElement('div');
    backButtonWrapper.className = 'back-button-wrapper';
    const backButton = document.createElement('button');
    backButton.className = 'button back-button';
    backButton.innerHTML = '← Назад'; 
    backButtonWrapper.appendChild(backButton);
    categoriesContainer.appendChild(backButtonWrapper);
    buttonContainer.parentNode.insertBefore(categoriesContainer, buttonContainer.nextSibling);
    startButton.addEventListener('click', () => {
        buttonContainer.style.display = 'none';
        categoriesContainer.style.display = 'flex';
    });

    backButton.addEventListener('click', () => {
        categoriesContainer.style.display = 'none';
        buttonContainer.style.display = 'flex';
    });
}

window.onload = function() {
    initModal();
    initGameStart();
};