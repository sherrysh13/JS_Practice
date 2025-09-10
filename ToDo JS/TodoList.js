console.log("first")

let inputField = document.querySelector('.inputField input')
let okBtn = document.querySelector('.inputField button')
let listsDiv = document.querySelector('.lists')

window.onload = ()=>{
        let getTodoItems = JSON.parse(localStorage.getItem('todoItems')) || [];
        // console.log(getTodoItems)
        getTodoItems.forEach((eachItem)=>{
            createTodo(eachItem)
        })
    }

okBtn.addEventListener('click', ()=>{
    if(inputField.value !== ""){
        createTodo(inputField.value)
        saveTodo(inputField.value)   
        inputField.value = ""

    }
})


const createTodo = (value) => {
    let div = document.createElement("div")
        div.className = "list";
        div.innerHTML = `<h2 class="heading">${value}</h2>
                     <div class="btns">
                         <button class="editBtn">EDIT</button>
                         <button class="delBtn">DEL</button>
                         </div>`
        listsDiv.append(div)
        
        let delBtn = div.querySelector(".delBtn")
        delBtn.addEventListener("click", (e)=>{
            e.target.parentNode.parentNode.remove()
            console.log("deleted")
            deleteTodo(value)
        })
            
        let editBtn = div.querySelector(".editBtn")
        editBtn.addEventListener("click", (e)=>{
            e.target.parentNode.parentNode.remove();
            deleteTodo(value)
            inputField.value = e.target.parentNode.parentNode.firstChild.textContent;
        })
    }
    const saveTodo = (todoValue) => {
        let getTodoItems = JSON.parse(localStorage.getItem('todoItems')) || [];
        getTodoItems.push(todoValue)
        localStorage.setItem('todoItems', JSON.stringify(getTodoItems))
    }

    const deleteTodo = (value) => {
        let todoItems = JSON.parse(localStorage.getItem('todoItems'))
        let updatedTodoList = todoItems.filter((eachList)=>{
            return eachList !== value;
        })
        localStorage.setItem('todoItems', JSON.stringify(updatedTodoList))
    }
