const quizData =[
    {
        question: "which language runs on browser?",
        a: "c",
        b: "java",
        c: "python",
        d: "java script",
        correct: "d"

    },
    {
        question: "css stands for?",
        a: "central style sheet",
        b: "cascading style sheet",
        c: "cascading simple sheet",
        d: "cars suvs supercars",
        correct: "b"

    },
    {
        question: "HTML stands for?",
        a: "hyper loop machine language",
        b: "helicopters travels multi language",
        c: "hyperText markup language",
        d: "hypertext markdown language",
        correct: "c"

    },
    {
        question: "javascript was launched in year?",
        a: "1996",
        b: "1995",
        c: "1999",
        d: "1945",
        correct: "b"

    }
];

//assign variables

const quiz=document.getElementById("quiz")
const answerEl=document.querySelectorAll('.answer')
const questionEl=document.getElementById('question')

const aText=document.getElementById('a-text')
const bText=document.getElementById('b-text')
const cText=document.getElementById('c-text')
const dText=document.getElementById('d-text')

const submitBtn=document.getElementById('submit')

//initializing
let currentQuiz=0
let score=0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData=quizData[currentQuiz];

    questionEl.innerText= currentQuizData.question;
    aText.innerText=currentQuizData.a
    bText.innerText=currentQuizData.b
    cText.innerText=currentQuizData.c
    dText.innerText=currentQuizData.d
}

function deselectAnswers(){
    answerEl.forEach(answerEl => answerEl.checked=false)
}

function getSelected(){
    //initialise
    let answer

    answerEl.forEach(answerEl =>{
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer;
}

submitBtn.addEventListener('click',()=>{
   const answer=getSelected()

   if(answer){
       if(answer==quizData[currentQuiz].correct){
           score++
       }
       currentQuiz++  //fetches next qn

       if(currentQuiz<quizData.length){
        loadQuiz()
    }
    else{
        quiz.innerHTML=`
        <h2>you answered  ${score}/${quizData.length} questions correctly.
        <button onClick="location.reload()">reload</button>
        `
    }
   }
})
