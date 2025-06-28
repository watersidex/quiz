const travelQuestionsAdvanced = [{
        text: "Ця столиця — єдина у світі, яка знаходиться на двох континентах. Що це за місто?",
        options: ["Київ", "Каїр", "Стамбул", "Лісабон"],
        correctAnswer: 2,
        explanation: "Стамбул розташований на межі Європи та Азії, розділений Босфорською протокою."
    },
    {
        text: "У якій країні знаходиться найбільша кількість діючих вулканів?",
        options: ["Японія", "США", "Індонезія", "Італія"],
        correctAnswer: 2,
        explanation: "Індонезія має понад 130 активних вулканів — найбільше у світі."
    },
    {
        text: "Який з цих курортів знаходиться у найвищому гірському масиві Європи — Альпах?",
        options: ["Блед", "Церматт", "Кранська Ґора", "Лейк Луїс"],
        correctAnswer: 1,
        explanation: "Церматт — відомий швейцарський гірськолижний курорт у Альпах, біля Матергорна."
    },
    {
        text: "Місто Петра, висічене у скелях, є всесвітньою спадщиною ЮНЕСКО. У якій країні воно розташоване?",
        options: ["Єгипет", "Йорданія", "Сирія", "Ізраїль"],
        correctAnswer: 1,
        explanation: "Петра — древнє місто в Йорданії, одне з Нових семи чудес світу."
    },
    {
        text: "Який острів вважається найвологішим місцем на Землі?",
        options: ["Мадагаскар", "Таїті", "Острів Хонсу", "Кауаї"],
        correctAnswer: 3,
        explanation: "Гора Вайалеале на Кауаї (Гаваї) має понад 350 днів дощу на рік."
    },
    {
        text: "Яке озеро є одним з найглибших у світі та розташоване в Африці?",
        options: ["Танганьїка", "Тітікака", "Вікторія", "Ейр"],
        correctAnswer: 0,
        explanation: "Озеро Танганьїка — одне з найглибших у світі й друге за об'ємом прісної води."
    },
    {
        text: "У якій європейській країні офіційно заборонено будувати хмарочоси у столиці, щоб не перекривати вид на собор Святого Павла?",
        options: ["Італія", "Велика Британія", "Німеччина", "Франція"],
        correctAnswer: 1,
        explanation: "У Лондоні діє політика збереження «виду на собор», що обмежує висотність будівель."
    },
    {
        text: "Місто Мачу-Пікчу, що лежить в горах, побудували:",
        options: ["Інки", "Ацтеки", "Майя", "Іспанці"],
        correctAnswer: 0,
        explanation: "Мачу-Пікчу в Перу — древнє місто цивілізації інків, збудоване у XV столітті."
    },
    {
        text: "У якій країні можна відвідати пустелю Атакама — найсухіше місце на планеті?",
        options: ["Марокко", "Чилі", "Єгипет", "ПАР"],
        correctAnswer: 1,
        explanation: "Атакама в Чилі — пустеля, де місцями не було дощу тисячі років."
    },
    {
        text: "Острів Пасхи знаменитий своїми велетенськими кам'яними статуями. Як вони називаються?",
        options: ["Моаї", "Тотеми", "Кіпу", "Менгіри"],
        correctAnswer: 0,
        explanation: "Моаї — монументальні кам'яні голови острова Пасхи, створені полінезійською культурою."
    }
];

let indexqq = 0

let question = document.querySelector(".question h1")
let answers = document.querySelectorAll(".answer p")
let comment = document.querySelector(".comment")
let next = document.querySelector(".next")

answers.forEach((answer, index) => {
    answer.onclick = () => {
        if (index == travelQuestionsAdvanced[indexqq].correctAnswer) {
            answer.classList.add("correct")
            comment.style.display = "block"
            comment.innerText = "Вірно! " + travelQuestionsAdvanced[indexqq].explanation
            next.style.display = "block"
        } else {
            answer.classList.add("incorrect")
            setTimeout(() => {
                answers[travelQuestionsAdvanced[indexqq].correctAnswer].classList.add("correct")
                comment.style.display = "block"
                comment.innerText = "Ти помиляєшся! " + travelQuestionsAdvanced[indexqq].explanation
                next.style.display = "block"
            }, 1000)
        }
    }
});

next.onclick = () => {
    indexqq += 1
    let nextquestion = travelQuestionsAdvanced[indexqq]
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

}