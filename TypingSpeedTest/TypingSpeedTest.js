    console.log("first")
    let btn = document.querySelector("button")
    let finalScore = document.querySelector(".finalScore")
    let textBox = document.querySelector(".textBox")
    let sentence = document.querySelector(".sentence")
    let flag = 0;
    let totalTime, typingSpeed, startTime, endTime;

    let sentences = [
        "My name is Sherry Sheikh",
        "I'll become a Millionare soon, InshaAllah",
        "I'd marry and will world tour with my wife."
    ]

    const calculateTypingSpeed = (timeTaken) => {

        let totalWords = textBox.value.trim()
        let actualWords = totalWords === "" ? 0 : totalWords.split(" ").length

        if(actualWords !== 0) {
        let typingSpeed  =  (actualWords / timeTaken) * 60;
        typingSpeed = Math.round(typingSpeed);
        finalScore.innerHTML = `Your typing speed is ${typingSpeed} words per minutes & you wrote ${actualWords} words & time taken ${timeTaken} sec`;
        }else{
            finalScore.innerHTML = `Your typing speed is 0 words per minutes & time taken ${timeTaken} sec`;
        }
    }

const startTyping = () => {
    textBox.value = ""
    sentence.innerText = sentences[Math.floor(Math.random()*sentences.length)]
    finalScore.style.display = "none"
    btn.innerText = "Done"
    textBox.disabled = false;
    textBox.style.color = "black"
    flag = 1;
    let date = new Date();
    startTime = date.getTime()
}

const endTyping = () => {
    finalScore.style.display = "block"
    btn.innerText = "Start Test"
    textBox.disabled = true;
    textBox.style.color = "white"
    flag = 0;
    let date = new Date()
    endTime = date.getTime()
    totalTime = (endTime - startTime) / 1000;
    console.log(totalTime)
    calculateTypingSpeed(totalTime)
}

btn.addEventListener("click", ()=>{
    if(!flag){
        startTyping()
    }else{
      endTyping()
    }
})

