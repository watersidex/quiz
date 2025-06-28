const quiz = [{
        question: "Назівть популярний український рок-гурт?",
        answers: [{
                mainAnswer: "Океан Ельзи",
                percent: 18
            },
            {
                mainAnswer: "Жадан і собаки",
                percent: 15
            },
            {
                mainAnswer: "Скрябін",
                percent: 12
            },
            {
                mainAnswer: "Антитіла",
                percent: 10
            },
            {
                mainAnswer: "Воплі Відоплясова",
                percent: 9
            },
            {
                mainAnswer: "The Hardkiss",
                percent: 8
            },
            {
                mainAnswer: "Бумбокс",
                percent: 8
            },
            {
                mainAnswer: "Плач Єремії",
                percent: 7
            },
            {
                mainAnswer: "Тартак",
                percent: 6
            },
            {
                mainAnswer: "Один в каное",
                percent: 6
            }
        ]
    },
    {
        question: "Хто є сама скандальна зірка України?",
        answers: [{
                mainAnswer: "Оля Полякова",
                percent: 18
            },
            {
                mainAnswer: "Ані Лорак",
                percent: 15
            },
            {
                mainAnswer: "Світлана Лобода",
                percent: 13
            },
            {
                mainAnswer: "Анастасія Приходько",
                percent: 12
            },
            {
                mainAnswer: "Настя Каменських",
                percent: 10
            },
            {
                mainAnswer: "Ірина Білик",
                percent: 8
            },
            {
                mainAnswer: "Леся Нікітюк",
                percent: 7
            },
            {
                mainAnswer: "Віталій Козловський",
                percent: 7
            },
            {
                mainAnswer: "Тіна Кароль",
                percent: 5
            },
            {
                mainAnswer: "Маша Єфросініна",
                percent: 5
            }
        ]
    },
    {
        question: "Назвіть зірку або гурт що приймав участь у Євробаченні від України?",
        answers: [{
                mainAnswer: "Джамала",
                percent: 18
            },
            {
                mainAnswer: "Руслана",
                percent: 16
            },
            {
                mainAnswer: "Тіна Кароль",
                percent: 14
            },
            {
                mainAnswer: "Kalush Orchestra",
                percent: 12
            },
            {
                mainAnswer: "alyona alyona & Jerry Heil",
                percent: 10
            },
            {
                mainAnswer: "Вєрка Сердючка",
                percent: 9
            },
            {
                mainAnswer: "MELOVIN",
                percent: 7
            },
            {
                mainAnswer: "Ziferblat",
                percent: 6
            },
            {
                mainAnswer: "Олександр Пономарьов",
                percent: 5
            },
            {
                mainAnswer: "Світлана Лобода",
                percent: 5
            }
        ]
    },
    {
        question: "Ключове місто України, в якому був дебют українських зірок?",
        answers: [{
                mainAnswer: "Київ",
                percent: 18
            },
            {
                mainAnswer: "Львів",
                percent: 16
            },
            {
                mainAnswer: "Одеса",
                percent: 14
            },
            {
                mainAnswer: "Харків",
                percent: 12
            },
            {
                mainAnswer: "Дніпро",
                percent: 10
            },
            {
                mainAnswer: "Хмельницький",
                percent: 8
            },
            {
                mainAnswer: "Полтава",
                percent: 7
            },
            {
                mainAnswer: "Черкаси",
                percent: 6
            },
            {
                mainAnswer: "Вінниця",
                percent: 5
            },
            {
                mainAnswer: "Івано-Франківськ",
                percent: 5
            }
        ]
    },
    {
        question: "Хто найкращий гурт/співак/співачка на думку людей за 60?",
        answers: [{
                mainAnswer: "Степан Гіга",
                percent: 18
            },
            {
                mainAnswer: "Софія Ротару",
                percent: 17
            },
            {
                mainAnswer: "Олександр Пономарьов",
                percent: 15
            },
            {
                mainAnswer: "Володимир Івасюк",
                percent: 12
            },
            {
                mainAnswer: "Скрябін",
                percent: 10
            },
            {
                mainAnswer: "Клавдія Петрівна",
                percent: 8
            },
            {
                mainAnswer: "Океан Ельзи",
                percent: 7
            },
            {
                mainAnswer: "Павло Зібров",
                percent: 6
            },
            {
                mainAnswer: "Гуцулка Ксенія",
                percent: 5
            },
            {
                mainAnswer: "Ніна Матвієнко",
                percent: 5
            }
        ]
    }
];


let question = document.querySelector("h1")
let answer = document.querySelector(".answers")
let input = document.querySelector("#answer")
let response = document.querySelector("#answbtn")
let correct = document.querySelector(".correct")
let incorrect = document.querySelector(".incorrect")
let next = document.querySelector("#next")
let questionum = 0
let score = 0
let unscore = 0

question.innerText = quiz[0].question

response.onclick = () => {
    let iscorrect = false

    for (let index = 0; index < 8; index++) {
        if (input.value == answer.children[index].innerText) {
            alert("Ви вже вказували цю відповідь)")
            answer.children[index].style.animation = "wrong 3s linear 2"
            return
        }
    }

    quiz[questionum].answers.forEach((element, index) => {
        if (input.value == element.mainAnswer) {
            //console.log("hi")
            answer.children[index].innerText = element.mainAnswer
            score += element.percent
            correct.innerText = score
            iscorrect = true
            return
        }

    })

    if (iscorrect == false) {
        console.log("incorrect")
        unscore += 1
        if (unscore == 2) {
            setTimeout(() => {
                next.removeAttribute("disabled")
            }, 10000)

            response.setAttribute("disabled", "true")
            next.classList.add("txx")

            quiz[questionum].answers.forEach((element, index) => {
                setTimeout(() => {
                    answer.children[index].innerText = element.mainAnswer
                }, 3000 + index * 500)
            })
        }
    }
}

next.onclick = () => {
    question.innerText = quiz[++questionum].question
    answer.querySelectorAll("span").forEach((child) => {
        child.innerText = ""
    })

    response.removeAttribute("disabled")
    next.setAttribute("disabled", "true")
    unscore = 0
}