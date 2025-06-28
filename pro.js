const travelHistoryQuestions = [
  {
    text: "Який давній місто-держава вважається першим туристичним напрямом в історії, куди подорожували греки для відвідин Олімпійських ігор?",
    options: ["Афіни", "Олімпія", "Дельфи", "Спарта"],
    correctAnswer: 1,
    explanation: "Олімпія була центром проведення перших Олімпійських ігор, і греки подорожували туди з усіх полісів."
  },
  {
    text: "Який знаменитий торговий шлях з’єднував Схід і Захід, вплинувши на розвиток туризму в стародавні часи?",
    options: ["Шовковий шлях", "Соляний шлях", "Амберовий шлях", "Морський шлях спецій"],
    correctAnswer: 0,
    explanation: "Шовковий шлях з’єднував Китай із Європою, сприяючи культурному обміну й подорожам."
  },
  {
    text: "Який відомий мандрівник середньовіччя подорожував до Китаю та описав свої враження у книзі?",
    options: ["Ібн Батута", "Христофор Колумб", "Марко Поло", "Магеллан"],
    correctAnswer: 2,
    explanation: "Марко Поло подорожував до Китаю та залишив опис своїх мандрів у книзі 'Книга чудес світу'."
  },
  {
    text: "Яке місто було столицею Візантійської імперії і залишалося культурним центром Європи і Азії?",
    options: ["Афіни", "Рим", "Константинополь", "Олександрія"],
    correctAnswer: 2,
    explanation: "Константинополь (нині Стамбул) був центром Візантійської імперії та важливим пунктом на торгових шляхах."
  },
  {
    text: "Як називається стародавнє місто інків, яке залишалося невідомим для європейців до початку XX століття?",
    options: ["Тіуанако", "Куско", "Мачу-Пікчу", "Сіпан"],
    correctAnswer: 2,
    explanation: "Мачу-Пікчу в Перу було відкрито для світу тільки в 1911 році археологом Хайремом Бінгемом."
  },
  {
    text: "Який єгипетський храм перенесли на нове місце через загрозу затоплення після будівництва Асуанської греблі?",
    options: ["Карнак", "Луксор", "Абу-Сімбел", "Гізи"],
    correctAnswer: 2,
    explanation: "Храми Абу-Сімбел були розібрані та зібрані знову вище за течією Нілу завдяки міжнародним зусиллям."
  },
  {
    text: "Яке місто вважається найстарішим безперервно населеним містом у світі?",
    options: ["Дамаск", "Рим", "Афіни", "Єрусалим"],
    correctAnswer: 0,
    explanation: "Дамаск (Сирія) має історію безперервного заселення понад 11 тисяч років."
  },
  {
    text: "Де розташована загадкова археологічна пам’ятка Ґебеклі-Тепе — одне з найстаріших відомих культових місць?",
    options: ["Ірак", "Туреччина", "Іран", "Йорданія"],
    correctAnswer: 1,
    explanation: "Ґебеклі-Тепе в Туреччині — мегалітичний храмовий комплекс віком понад 11 тисяч років."
  },
  {
    text: "Який стародавній народ спорудив мегалітичні споруди типу Стоунхендж у Британії?",
    options: ["Римляни", "Кельти", "Друїди", "Його точне походження невідоме"],
    correctAnswer: 3,
    explanation: "Стоунхендж був збудований до приходу кельтів, і його будівничі достеменно невідомі."
  },
  {
    text: "Як називалося велике місто майя, де знаходиться знаменита піраміда Кукулькана?",
    options: ["Тікаль", "Чичен-Іца", "Паленке", "Копан"],
    correctAnswer: 1,
    explanation: "Чичен-Іца в Мексиці — важливий центр майя з вражаючими храмами й пірамідами."
  }
];

let indexqq = 0

let question = document.querySelector(".question h1")
let answers = document.querySelectorAll(".answer p")
let comment = document.querySelector(".comment")
let next = document.querySelector(".next")

answers.forEach((answer, index) => {
    answer.onclick = () => {
        if (index == travelHistoryQuestions[indexqq].correctAnswer) {
            answer.classList.add("correct")
            comment.style.display = "block"
            comment.innerText = "Вірно! " + travelHistoryQuestions[indexqq].explanation
            next.style.display = "block"
        } else {
            answer.classList.add("incorrect")
            setTimeout(() => {
                answers[travelHistoryQuestions[indexqq].correctAnswer].classList.add("correct")
                comment.style.display = "block"
                comment.innerText = "Ти помиляєшся! " + travelHistoryQuestions[indexqq].explanation
                next.style.display = "block"
            }, 1000)
        }
    }
});

next.onclick = () => {
    indexqq += 1
    let nextquestion = travelHistoryQuestions[indexqq]
    question.innerText = nextquestion.text

    answers[0].innerText = nextquestion.options[0]
    answers[0].classList.remove("incorrect")
    answers[0].classList.remove("correct")

    answers[1].innerText = nextquestion.options[1]
    answers[1].classList.remove("incorrect")
    answers[1].classList.remove("correct")

    answers[2].innerText = nextquestion.options[2]
    answers[2].classList.remove("incorrect")
    answers[2].classList.remove("correct")

    answers[3].innerText = nextquestion.options[3]
    answers[3].classList.remove("incorrect")
    answers[3].classList.remove("correct")

    comment.style.display = "none"
    next.style.display = "none"

    /*якщо question.innerText == "" => alert */
}