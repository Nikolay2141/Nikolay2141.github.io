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
    const area = document.getElementById("area");

    const categoriesContainer = document.createElement('div');
    categoriesContainer.className = 'categories-container';
    categoriesContainer.style.display = 'none';

    const categoryNames = ["Линейная алгебра", "Мат. анализ", "Python"];

    categoryNames.forEach(name => {
        const categoryBtn = document.createElement('button');
        categoryBtn.className = 'button category-button';
        categoryBtn.textContent = name;
        categoryBtn.addEventListener('click', () => startQuiz(name));
        categoriesContainer.appendChild(categoryBtn);
    });

    const backButton = document.createElement('button');
    backButton.className = 'button back-button';
    backButton.textContent = '← Назад';
    categoriesContainer.appendChild(backButton);

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

function resetToMainMenu() {
    if (window.clock) window.clock.stop();
    const area = document.getElementById("area");

    while (area.firstChild) {
        area.removeChild(area.firstChild);
    }

    const title = document.createElement('h1');
    title.className = 'game-title';
    title.textContent = 'Викторина';
    area.appendChild(title);

    const divider = document.createElement('div');
    divider.className = 'divider';

    const line1 = document.createElement('div');
    line1.className = 'divider-line';
    divider.appendChild(line1);

    const icon = document.createElement('div');
    icon.className = 'divider-icon';
    icon.textContent = '✻';
    divider.appendChild(icon);

    const line2 = document.createElement('div');
    line2.className = 'divider-line';
    divider.appendChild(line2);

    area.appendChild(divider);

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    const startButton = document.createElement('button');
    startButton.id = 'start';
    startButton.className = 'button';

    const startIcon = document.createElement('span');
    startIcon.className = 'icon';
    startIcon.textContent = '▶';
    startButton.appendChild(startIcon);

    const startText = document.createTextNode(' Начать игру');
    startButton.appendChild(startText);
    buttonContainer.appendChild(startButton);

    const rulesButton = document.createElement('button');
    rulesButton.id = 'rules';
    rulesButton.className = 'button';

    const rulesIcon = document.createElement('span');
    rulesIcon.className = 'icon';
    rulesIcon.textContent = '?';
    rulesButton.appendChild(rulesIcon);

    const rulesText = document.createTextNode(' Правила');
    rulesButton.appendChild(rulesText);
    buttonContainer.appendChild(rulesButton);

    area.appendChild(buttonContainer);

    initModal();
    initGameStart();
}

function addBackToMenuButton() {
    const area = document.getElementById("area");
    const oldButton = document.querySelector('.back-to-menu-button');
    if (oldButton) {
        oldButton.remove();
    }

    const backButton = document.createElement('button');
    backButton.className = 'back-to-menu-button';
    backButton.textContent = '← На главную';
    backButton.addEventListener('click', resetToMainMenu);
    area.insertBefore(backButton, area.firstChild);
}

function displayQuestion() {
    const quizData = JSON.parse(localStorage.getItem('currentQuiz'));
    const currentQuestionData = quizData.questions[quizData.currentQuestion];
    const area = document.getElementById("area");

    while (area.firstChild) {
        area.removeChild(area.firstChild);
    }

    addBackToMenuButton();

    const questionElement = document.createElement('div');
    questionElement.className = 'question-container';

    const categoryHeader = document.createElement('h2');
    categoryHeader.className = 'question-category';
    categoryHeader.textContent = quizData.category;
    questionElement.appendChild(categoryHeader);

    const questionText = document.createElement('div');
    questionText.className = 'question-text';
    questionText.textContent = currentQuestionData.question;
    questionElement.appendChild(questionText);

    const progressText = document.createElement('div');
    progressText.className = 'question-progress';
    progressText.textContent = `Вопрос ${quizData.currentQuestion + 1} из ${quizData.questions.length}`;
    questionElement.appendChild(progressText);

    const timerContainer = document.createElement('div');
    timerContainer.className = 'flip-clock-container';
    questionElement.appendChild(timerContainer);

    const answersContainer = document.createElement('div');
    answersContainer.className = 'answers-container';
    questionElement.appendChild(answersContainer);

    const nextButton = document.createElement('button');
    nextButton.className = 'next-button';
    nextButton.textContent = 'Следующий вопрос →';
    nextButton.style.display = 'none';
    questionElement.appendChild(nextButton);

    const quizTimer = new QuizTimer(
        timerContainer,
        30,
        () => {
            handleTimeExpired(answersContainer, nextButton, quizData);
        }
    );
    quizTimer.start();

    nextButton.addEventListener('click', () => {
        if (quizTimer) {
            quizTimer.stop();
        }
        quizData.currentQuestion++;
        localStorage.setItem('currentQuiz', JSON.stringify(quizData));
    
        if (quizData.currentQuestion < quizData.questions.length) {
            displayQuestion();
        } else {
            endQuiz();
        }
    });

    const answersToDisplay = currentQuestionData.answers
        .map((answer, index) => ({
            text: answer,
            originalIndex: index
        }))
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

    answersToDisplay.forEach(answer => {
        const answerButton = document.createElement('button');
        answerButton.className = 'answer-button';
        answerButton.textContent = answer.text;
        answerButton.dataset.correct = answer.originalIndex === currentQuestionData.correct;
    
        answerButton.addEventListener('click', function() {
            if (quizTimer && !quizTimer.isExpired) {
                quizTimer.stop();
                const allButtons = answersContainer.querySelectorAll('.answer-button');
                allButtons.forEach(btn => {
                    btn.disabled = true;
                    if (btn.dataset.correct === 'false') {
                        btn.classList.add('incorrect-answer');
                    }
                });
                const correctButton = answersContainer.querySelector('[data-correct="true"]');
                if (correctButton) {
                    correctButton.classList.add('correct-answer');
                }

                if (this.dataset.correct === 'true') {
                    quizData.score++;
                    localStorage.setItem('currentQuiz', JSON.stringify(quizData));
                }

                nextButton.style.display = 'block';
            }
        });
        
        answersContainer.appendChild(answerButton);
    });

    area.appendChild(questionElement);
}

function endQuiz() {
    const quizData = JSON.parse(localStorage.getItem('currentQuiz'));
    const area = document.getElementById("area");

    while (area.firstChild) {
        area.removeChild(area.firstChild);
    }

    const resultContainer = document.createElement('div');
    resultContainer.className = 'result-container';

    const resultHeader = document.createElement('h2');
    resultHeader.textContent = 'Викторина завершена!';
    resultContainer.appendChild(resultHeader);

    const resultScore = document.createElement('div');
    resultScore.className = 'result-score';
    resultScore.textContent = `Ваш результат: ${quizData.score} из ${quizData.questions.length}`;
    resultContainer.appendChild(resultScore);

    const restartButton = document.createElement('button');
    restartButton.className = 'button restart-button';
    restartButton.textContent = 'Играть снова';
    restartButton.addEventListener('click', () => startQuiz(quizData.category));
    resultContainer.appendChild(restartButton);

    const mainMenuButton = document.createElement('button');
    mainMenuButton.className = 'button main-menu-button';
    mainMenuButton.textContent = 'Главное меню';
    mainMenuButton.addEventListener('click', resetToMainMenu);
    resultContainer.appendChild(mainMenuButton);

    area.appendChild(resultContainer);
}

window.onload = function() {
    initModal();
    initGameStart();
    initThemeToggle();
};