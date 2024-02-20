const quizdata = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Hyper Terminal Motor Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },];

const container = document.querySelector('.container')
const questin = document.getElementById('ques')
const options = document.querySelectorAll('.optns')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submit = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;
let choosed = false;

loadQuiz()

function loadQuiz() {
    deselected()

    const currentQuizData = quizdata[currentQuiz]
    questin.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselected() {
    options.forEach(option => option.checked = false)
}

function getselected() {
    //let answer
    options.forEach(option => {
        if (option.checked) {
            answer = option.id;
            choosed = true;
        }
    })
    if (choosed) {
        return answer
    }
    else {
        alert("choose any one")
    }
}


submit.addEventListener('click', () => {
    const answer = getselected()

    if (choosed) {
        if (answer === quizdata[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizdata.length) {
            loadQuiz()
            choosed = false;
        }
        else {
            container.innerHTML = `<h1> Your score ${score}/${quizdata.length}
 			<button onClick="location.reload()">Reload</button>`
        }
    }
})
