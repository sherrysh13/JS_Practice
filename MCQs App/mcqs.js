console.log("first")

let MCQS = [
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: {
      opt1: "link",
      opt2: "a",
      opt3: "href",
      opt4: "hyper"
    },
    answer: "a"
  },
  {
    question: "Which property is used in CSS to change the text color?",
    options: {
      opt1: "color",
      opt2: "font-color",
      opt3: "text-color",
      opt4: "background-color"
    },
    answer: "color"
  },
  {
    question: "Inside which HTML element do we put the JavaScript code?",
    options: {
      opt1: "js",
      opt2: "javascript",
      opt3: "script",
      opt4: "code"
    },
    answer: "script"
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: {
      opt1: "//",
      opt2: "/* */",
      opt3: "#",
      opt4: "<!-- -->"
    },
    answer: "//"
  },
  {
    question: "Which method is used to convert a JSON string into a JavaScript object?",
    options: {
      opt1: "JSON.stringify()",
      opt2: "JSON.parse()",
      opt3: "JSON.objectify()",
      opt4: "JSON.convert()"
    },
    answer: "JSON.parse()"
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: {
      opt1: "style",
      opt2: "class",
      opt3: "font",
      opt4: "css"
    },
    answer: "style"
  },
  {
    question: "Which tag is used to display the largest heading in HTML?",
    options: {
      opt1: "h6",
      opt2: "h1",
      opt3: "head",
      opt4: "heading"
    },
    answer: "h1"
  },
  {
    question: "Which function is used to print something in the console in JavaScript?",
    options: {
      opt1: "console.log()",
      opt2: "print()",
      opt3: "log.console()",
      opt4: "printf()"
    },
    answer: "console.log()"
  },
  {
    question: "Which CSS property is used to change the background color?",
    options: {
      opt1: "background-color",
      opt2: "color",
      opt3: "bgcolor",
      opt4: "background-style"
    },
    answer: "background-color"
  },
  {
    question: "Which HTML element is used to insert a line break?",
    options: {
      opt1: "br",
      opt2: "break",
      opt3: "lb",
      opt4: "hr"
    },
    answer: "br"
  }
];



// console.log(MCQS[3].options.opt4)

let mcqsApp = document.querySelector('.mcqsApp')
let nextBtn = document.querySelector('.nextBtn')
let restartBtn = document.querySelector('.restartBtn')
let finalMsg = document.querySelector('.finalMsg')
let index = 0;
let score = 0;

const displayMCQ = () => {
  
  mcqsApp.innerHTML = ""
  restartBtn.style.display = "none"
  finalMsg.style.display = "none"

  let eachMCQDiv = document.createElement("div")
  eachMCQDiv.className = "eachMCQ"
  eachMCQDiv.innerHTML = `<h1 class="question">${MCQS[index].question}</h1>
                      <div class="answers">
                          <h4 class="opt opt1">${MCQS[index].options.opt1}</h4>
                          <h4 class="opt opt2">${MCQS[index].options.opt2}</h4>
                          <h4 class="opt opt3">${MCQS[index].options.opt3}</h4>
                          <h4 class="opt opt4">${MCQS[index].options.opt4}</h4>
                      </div>`

  mcqsApp.prepend(eachMCQDiv);

  let allOptions = eachMCQDiv.querySelectorAll('.opt')
  let answered = false;

  allOptions.forEach((opt)=>{
    
    opt.addEventListener('click', (e)=>{

    if(answered) return;

    if(MCQS[index].answer === e.target.textContent){
      e.target.style.backgroundColor = "skyblue";
      e.target.style.color = "navy";
      score++;
      // e.target.disabled = true;
    }
    else{
      e.target.style.backgroundColor = "red";
    }
    answered = true;
  })
})
}

displayMCQ()

nextBtn.addEventListener('click', ()=>{
  index++;
  if(index>=0 && index<=9){
    displayMCQ()
  }else{
    mcqsApp.innerHTML = "";
    nextBtn.style.display = "none"
    restartBtn.style.display = "block"
    finalMsg.style.display = "block"
    finalMsg.textContent = `Your Final Score is: ${score}`
  }
})

restartBtn.addEventListener('click', ()=>{
  index = 0;
  score = 0;
  displayMCQ()
  nextBtn.style.display = "block"
})