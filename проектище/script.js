const questions = {
    "Линейная алгебра": [
        {
            question: "Какая матрица называется невырожденной?",
            answers: [
                "Квадратная матрица, определитель которой не равен 0", //+
                "Квадратная матрица, определитель которой равен 0",
                "Матрица, у которой на главной диагонали только 0",
                "Матрица порядка выше 3"
            ],
            correct: 0
        },
        {
            question: "Что такое линейная зависимость векторов?",
            answers: [
                "Векторы параллельны",
                "Существует нетривиальная линейная комбинация, равная нулю", //+
                "Векторы ортогональны",
                "Все векторы коллинеарны"
            ],
            correct: 1
        },
        {
            question: "Как называется система уравнений, у которой нет решений?",
            answers: [
                "Определённая",
                "Вырожденная",
                "Несовместная", //+
                "Однородная"
            ],
            correct: 2
        },
        {
            question: "Что такое ранг матрицы?",
            answers: [
                "Количество строк в матрице",
                "Максимальное число линейно независимых строк (или столбцов)", //+
                "Сумма элементов главной диагонали",
                "Количество ненулевых элементов"
            ],
            correct: 1
        },
        {
            question: "Какое условие необходимо для существования обратной матрицы?",
            answers: [
                "Матрица должна быть прямоугольной",
                "Определитель матрицы не равен нулю", //+
                "Все элементы матрицы положительны",
                "Матрица симметричная"
            ],
            correct: 1
        },
        {
            question: "Что такое собственный вектор матрицы?",
            answers: [
                "Вектор, параллельный главной диагонали",
                "Ненулевой вектор, который при умножении на матрицу даёт скалярное кратное себе", //+
                "Вектор, состоящий из единиц",
                "Любой столбец матрицы"
            ],
            correct: 1
        },
        {
            question: "Как называется матрица, которая равна самой себе транспонированной?",
            answers: [
                "Диагональная",
                "Симметричная", //+
                "Ортогональная",
                "Треугольная"
            ],
            correct: 1
        },
        {
            question: "Что описывает скалярное произведение векторов?",
            answers: [
                "Длину вектора",
                "Угол между векторами и их длины",
                "Проекцию одного вектора на другой", //+
                "Площадь параллелограмма, построенного на векторах"
            ],
            correct: 2
        },
        {
            question: "Чему равен определитель единичной матрицы размера 3x3?",
            answers: [
                "0",
                "1", //+
                "3",
                "9"
            ],
            correct: 1
        },
        {
            question: "Какое из следующих утверждений верно для ортогональной матрицы?",
            answers: [
                "Все её элементы равны 0 или 1",
                "Её определитель всегда равен 1",
                "Её столбцы образуют ортонормированный набор векторов", //+
                "Она всегда симметрична"
            ],
            correct: 2
        },
    ],
    "Мат. анализ": [
        {
            question: "Если F(x) — первообразная для f(x), то что такое ∫ f(x)dx",
            answers: [
                "Производная F(x)",
                "Множество всех первообразных F(x) + C", //+
                "Определённый интеграл от f(x)",
                "Вторая производаня f(x)"
            ],
            correct: 1
        },
        {
            question: "Как называется теорема, утверждающая, что непрерывная на отрезке функция достигает максимума и минимума?",
            answers: [
                "Теорема Ролля",
                "Теорема Вейерштрасса", //+
                "Теорема Лагранжа",
                "Теорема Коши"
            ],
            correct: 1
        },
        {
            question: "Если f(x) дифференцируема в точке х0, то:",
            answers: [
                "Она обязательно имеет вторую производную в х0",
                "Она непрерывна в х0", //+
                "Её производная равна нулю",
                "f(x) монотонна в окрестности х0"
            ],
            correct: 1
        },
        {
            question: "Что такое производная функции?",
            answers: [
                "Площадь под графиком функции",
                "Скорость изменения функции в точке", //+
                "Расстояние между точками на графике",
                "Максимальное значение функции"
            ],
            correct: 1
        },
        {
            question: "Если функция возрастает, то ее производная:",
            answers: [
                "Всегда равна нулю",
                "Может быть любой",
                "Больше или равна нулю", //+
                "Меньше нуля"
            ],
            correct: 2
        },
        {
            question: "Что показывает определенный интеграл от функции?",
            answers: [
                "Ее минимальное значение",
                "Площадь под графиком между двумя точками", //*
                "Скорость изменения",
                "Количество корней"
            ],
            correct: 1
        },
        {
            question: "Как называется точка, где производная равна нулю?",
            answers: [
                "Точка разрыва",
                "Стационарная точка", //+
                "Асимптота",
                "Перегиб"
            ],
            correct: 1
        },
        {
            question: "Когда ряд называется сходящимся?",
            answers: [
                "Когда его члены возрастают",
                "Когда сумма его членов конечна", //+
                "Когда все члены положительны",
                "Когда он периодический"
            ],
            correct: 1
        },
        {
            question: "Какая теорема утверждает, что непрерывная функция принимает все промежуточные значения?",
            answers: [
                "Теорема Ферма",
                "Теорема Больцано-Коши", //+
                "Теорема Лопиталя",
                "Теорема Тейлора"
            ],
            correct: 1
        },
        {
            question: "Если функция дифференцируема в точке, то она:",
            answers: [
                "Имеет разрыв в этой точке",
                "Непрерывна в этой точке", //+
                "Обязательно имеет максимум",
                "Линейна в окрестности этой точки"
            ],
            correct: 1
        },
    ],
    "Python": [
        {
            question: "Какой оператор используется для целочисленного деления?",
            answers: [
                "//", //+
                "/",
                "%",
                "div"
            ],
            correct: 0
        },
        {
            question: "Как создать список в Python?",
            answers: [
                "(1, 2, 3)",
                "{1, 2, 3}",
                "[1, 2, 3]", //+
                "<1, 2, 3>"
            ],
            correct: 2
        },
        {
            question: "Какой тип данных является изменяемым?",
            answers: [
                "Кортеж",
                "Строка",
                "Список", //+
                "Число"
            ],
            correct: 2
        },
        {
            question: "Как получить длину списка?",
            answers: [
                "length(list)",
                "list.len()",
                "len(list)", //+
                "list.length()"
            ],
            correct: 2
        },
        {
            question: "Какой оператор используется для комментариев в Python?",
            answers: [
                "//",
                "/*",
                "#", //+
                "--"
            ],
            correct: 2
        },
        {
            question: "Как создать словарь?",
            answers: [
                "{ключ: значение}", //+
                "(ключ: значение)",
                "[ключ: значение]",
                "<ключ: значение>"
            ],
            correct: 0
        },
        {
            question: "Какой метод добавляет элемент в конец списка?",
            answers: [
                "list.insert()",
                "list.add()",
                "list.append()", //+
                "list.push()"
            ],
            correct: 2
        },
        {
            question: "Что такое None?",
            answers: [
                "Специальный тип данных, обозначающий пустое значение", //+
                "Пустой список",
                "Неопределенная переменная",
                "Логическое значение"
            ],
            correct: 0
        },
        {
            question: "Как получить последний элемент списка?",
            answers: [
                "list[-1]", //+
                "list.last()",
                "list.end()",
                "list.get(-1)"
            ],
            correct: 0
        },
        {
            question: "Что делает оператор ** в Python?",
            answers: [
                "Возведение в степень", //+
                "Умножение числа на само себя",
                "Умножение",
                "Создание дроби"
            ],
            correct: 0
        },
    ]
};

let clock;

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

function startQuiz(category) {
    const area = document.getElementById("area");
    while (area.firstChild) {
        area.removeChild(area.firstChild);
    }

    const categoryQuestions = [...questions[category]].sort(() => Math.random() - 0.5);

    localStorage.setItem('currentQuiz', JSON.stringify({
        category: category,
        questions: categoryQuestions,
        currentQuestion: 0,
        score: 0 
    }));

    addBackToMenuButton();
    displayQuestion();
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

    if (window.clock) {
        window.clock.stop();
        timerContainer.innerHTML = '';
    }

    const answersContainer = document.createElement('div');
    answersContainer.className = 'answers-container';
    questionElement.appendChild(answersContainer);

    const nextButton = document.createElement('button');
    nextButton.className = 'next-button';
    nextButton.textContent = 'Следующий вопрос →';
    nextButton.style.display = 'none';
    questionElement.appendChild(nextButton);

    window.clock = new FlipClock(timerContainer, 30, {
        clockFace: 'Counter',
        countdown: true,
        autoStart: true,
        minimumDigits: 2,
        callbacks: {
            stop: function() {
                window.clockStopped = true;
                handleTimeExpired(answersContainer, nextButton, quizData);
            }
        }
    });
    window.clockStopped = false;

    nextButton.addEventListener('click', () => {
        if (window.clock) {
            window.clock.stop();
            window.clockStopped = false;
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
            if (window.clock && !window.clockStopped) {
                window.clockStopped = true;
                window.clock.stop();
                const allButtons = answersContainer.querySelectorAll('.answer-button');
                allButtons.forEach(btn => {
                    btn.disabled = true;
                    if (btn.dataset.correct === 'false') {
                        btn.classList.add('incorrect-answer');
                    }
                });
                const correctButton = answersContainer.querySelector('[data-correct="true"]');
                correctButton.classList.add('correct-answer');

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

function handleTimeExpired(answersContainer, nextButton, quizData) {
    if (window.clock && !window.clockStopped) {
        window.clockStopped = true;
        window.clock.stop();
        
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

        if (nextButton) {
            nextButton.style.display = 'block';
        }
    }
}

function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    let currentTheme = localStorage.getItem('theme') || 
                      (prefersDarkScheme.matches ? 'dark' : 'light');
    document.documentElement.className = currentTheme + '-theme';

    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark-theme');
        const newTheme = isDark ? 'light' : 'dark';

        document.documentElement.classList.remove(isDark ? 'dark-theme' : 'light-theme');
        document.documentElement.classList.add(newTheme + '-theme');

        localStorage.setItem('theme', newTheme);

        themeToggle.textContent = newTheme === 'dark' ? '🌓' : '🌒';
    });

    themeToggle.textContent = currentTheme === 'dark' ? '🌓' : '🌒';

    prefersDarkScheme.addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.className = newTheme + '-theme';
            themeToggle.textContent = newTheme === 'dark' ? '🌓' : '🌒';
        }
    });
}

window.onload = function() {
    initModal();
    initGameStart();
    initThemeToggle();
};