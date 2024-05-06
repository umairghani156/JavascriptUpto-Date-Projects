const htmlQues = [
    {
        question: 'What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
        correctOption: "Hypertext Markup Language"
    },
    {
        question: 'Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: "<h1>"
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        option1: '<linebreak>',
        option2: '<br>',
        option3: '<break>',
        correctOption: "<br>"
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        option1: '<body bg="yellow">',
        option2: '<background>yellow</background>',
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        option1: '<strong>',
        option2: '<b>',
        option3: '<i>',
        correctOption: '<strong>'
    },
    {
        question: 'Choose the correct HTML element to define emphasized text:',
        option1: '<italic>',
        option2: '<i>',
        option3: '<em>',
        correctOption: "<em>"
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        option1: '<a>http://www.w3schools.com</a>',
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    },
    {
        question: 'Which character is used to indicate an end tag?',
        option1: '*',
        option2: '/',
        option3: '<',
        correctOption: "/"
    },
    {
        question: 'How can you open a link in a new tab/browser window?',
        option1: '<a href="url" target="new">',
        option2: '<a href="url" new>',
        option3: '<a href="url" target="_blank">',
        correctOption: '<a href="url" target="_blank">'
    },
]
const question = document.getElementById('question');
const opt1 = document.getElementById('option1');
const opt2 = document.getElementById('option2');
const opt3 = document.getElementById('option3');
const mainParent = document.querySelector('.mainParent')
const btn = document.getElementById('btn')
let index = 0
let score = 0;
let totalScore = 0;
let min = 4;
let sec = 59;
const quizQue =JSON.parse(localStorage.getItem('quezQue')) || [];
console.log(quizQue);
function quizHandler() {
    const optionAnswer = document.getElementsByName('option');
        for(let i = 0; i < optionAnswer.length; i++){
            if(optionAnswer[i].checked){
                
                const selectedAnswer = optionAnswer[i].value;
                const objAnswer = htmlQues[index -1][`option${selectedAnswer}`];
                const correctAnswer = htmlQues[index -1]['correctOption'];
                console.log(correctAnswer , '==========.correct');
                console.log(selectedAnswer);
                console.log(objAnswer);
                if(objAnswer == correctAnswer){
                 console.log(score++);
                }

            }
            optionAnswer[i].checked = false;
                btn.disabled = true;
                
        }
        let obj;
        if(index > htmlQues.length -1){
            for(let i= 0; i < optionAnswer.length; i++){
                optionAnswer[i].disabled = true
            }
            console.log('Question end');
            
            totalScore = (score/htmlQues.length) * 100;
            resultCard(totalScore)
        }else{
          const q1 = question.innerText = htmlQues[index].question;
          const op1 = opt1.innerText = htmlQues[index].option1
          const op2 = opt2.innerText = htmlQues[index].option2
          const op3 = opt3.innerText = htmlQues[index].option3
           
            index++

             obj = {
                question: q1,
                option1: op1,
                option2: op2,
                option3: op3,
            }
            quizQue.push(obj)
            console.log(obj);
            localStorage.setItem('quizQue', JSON.stringify(quizQue))
           
        }
        
}

quizHandler()

function enableBtn(){
    btn.disabled = false
}
const container1 = document.querySelector('.container1')
let circle = document.querySelector('.circle');
let circlValue = document.querySelector('.value');
const correctQuestion = document.getElementById('correctQuestion')
const para1 = document.getElementById('para1')
function resultCard(totalSc){
    document.body.style.backgroundColor = '#fff'
    container1.style.display = 'none';
    mainParent.style.display = 'block';
    circlValue.innerText = totalSc + '%'
    if(score < 5){
       para1.innerText = 'Sorry, you failed';
       para1.style.color = 'red'
       correctQuestion.textContent = score;
       correctQuestion.style.color = 'red';
       circle.style.background = `conic-gradient(red ${totalSc * 3.6}deg, #ededed 0deg)`;
       circlValue.style.color = 'red'
    }else{
        para1.innerText = 'Congratulations, you passed';
       para1.style.color = '#009900';
       correctQuestion.textContent = score;
       correctQuestion.style.color = '#0000b3';
        circle.style.background = `conic-gradient(#006600 ${totalSc * 3.6}deg, #ededed 0deg)`;
        circlValue.style.color = '#006600'
    }
    
}

function restartQuiz(){
    const optionAnswer = document.getElementsByName('option');
    container1.style.display = 'flex';
    mainParent.style.display = 'none';
    index = 0;
    score = 0;
    min = 4;
    sec = 59;
    quizHandler()
    for(let i =0; i < optionAnswer.length; i++){
        optionAnswer[i].disabled = false
    }
}
const timerUpdate = document.getElementById('timerUpdate');

const timeUpdateHandle = setInterval(() => {
    timerUpdate.innerHTML = `${min} : ${sec}`
    sec--
      if(sec < 0){
        
        if(min < 1){
            quizHandler()
            min = 1;
            sec = 59;
        }else{
            min--
            sec = 59
        }
      }
}, 1000)