const travelQuestions = [{
        text: "Яка країна відома своєю вежею, що нахиляється?",
        options: ["Франція", "Італія", "Іспанія", "Греція"],
        correctAnswer: 1,
        explanation: "Пізанська вежа, яка нахиляється, розташована в Італії."
    },
    {
        text: "Який океан омиває Мальдіви?",
        options: ["Індійський", "Атлантичний", "Тихий", "Північний Льодовитий"],
        correctAnswer: 0,
        explanation: "Мальдіви розташовані в Індійському океані."
    },
    {
        text: "Що за відома споруда в Парижі приваблює мільйони туристів?",
        options: ["Колізей", "Ейфелева вежа", "Біг-Бен", "Бурдж Халіфа"],
        correctAnswer: 1,
        explanation: "Ейфелева вежа — символ Парижа і Франції загалом."
    },
    {
        text: "У якій країні розташований Великий Кораловий риф?",
        options: ["Індія", "Філіппіни", "Австралія", "Мексика"],
        correctAnswer: 2,
        explanation: "Великий Кораловий риф знаходиться біля узбережжя Австралії."
    },
    {
        text: "Який вид транспорту найвідоміший у Венеції?",
        options: ["Таксі", "Гондола", "Метро", "Автобус"],
        correctAnswer: 1,
        explanation: "Гондоли — традиційний водний транспорт у Венеції."
    },
    {
        text: "Яка країна відома пірамідами і Сфінксом?",
        options: ["Індія", "Туреччина", "Єгипет", "Іран"],
        correctAnswer: 2,
        explanation: "Єгипет славиться стародавніми пірамідами і Сфінксом у Гізі."
    },
    {
        text: "На якому острові розташований вулкан Етна?",
        options: ["Крит", "Сицилія", "Сардинія", "Канари"],
        correctAnswer: 1,
        explanation: "Вулкан Етна — один з найактивніших у світі, розташований на Сицилії (Італія)."
    },
    {
        text: "Як називається найвища гора у світі?",
        options: ["Кіліманджаро", "Монблан", "Еверест", "Аконкагуа"],
        correctAnswer: 2,
        explanation: "Гора Еверест — найвища точка Землі, 8848 метрів над рівнем моря."
    },
    {
        text: "Яке місто відоме каналами і називається 'Північною Венецією'?",
        options: ["Амстердам", "Прага", "Брюгге", "Рим"],
        correctAnswer: 0,
        explanation: "Амстердам славиться численними каналами і мостами."
    },
    {
        text: "Яка країна славиться гейзерами і льодовиками, зокрема Блакитною лагуною?",
        options: ["Норвегія", "Фінляндія", "Ісландія", "Швеція"],
        correctAnswer: 2,
        explanation: "Ісландія відома своїми гейзерами, льодовиками та геотермальними курортами."
    }
];

let indexqq = 0

let question = document.querySelector(".question p")
let answers = document.querySelectorAll(".answer p")
let comment = document.querySelector(".comment")
let next = document.querySelector(".next")

answers.forEach((answer, index) => {
    answer.onclick = () => {
        if (index == travelQuestions[indexqq].correctAnswer) {
            answer.classList.add("correct")
            comment.style.display = "block"
            comment.innerText = "correct! " + travelQuestions[indexqq].explanation
            next.style.display = "block"
        } else {
            answer.classList.add("incorrect")
            setTimeout(() => {
                answers[1].classList.add("correct")
                comment.style.display = "block"
                comment.innerText = "incorrect! " + travelQuestions[indexqq].explanation
                next.style.display = "block"
            }, 1000)
        }
    }
});

next.onclick = () => {
    indexqq += 1
    let nextquestion = travelQuestions[indexqq]
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