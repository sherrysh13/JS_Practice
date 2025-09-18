console.log("first")

let submitBtn = document.querySelector('.submitBtn')
let title = document.querySelector('.title')
let amount = document.querySelector('.amount')
let category = document.querySelector('.category')
let tableBody = document.querySelector('tbody')
let table = document.querySelector('table')

    let ExpenseListsFromLS =JSON.parse(localStorage.getItem("ExpenseList")) || [];

window.onload = () => {
    if(ExpenseListsFromLS.length > 0){
        table.style.display = "block"
        ExpenseListsFromLS.forEach((eachExpList)=>{
            createExpense(eachExpList)
        })
    }
}

const saveExpListToLS = () => {
    localStorage.setItem("ExpenseList", JSON.stringify(ExpenseListsFromLS))
}

const createExpense = (expObj) => {
    let tr = document.createElement("tr")
    tr.id = expObj.id;
    console.log(tr)
        tr.innerHTML = `
                        <td>${expObj.title}</td>
                        <td>$${expObj.amount}</td>
                        <td>${expObj.category}</td>
                        <td class="btns">
                            <button class="editBtn">Edit</button>
                            <button class="delBtn">Delete</button>
                        </td>`
                        tableBody.prepend(tr)

                        let editBtn = tr.querySelector('.editBtn')
                        let delBtn = tr.querySelector('.delBtn')

                        const delTrFnc = ()=>{
                            tr.remove()
                            ExpenseListsFromLS = ExpenseListsFromLS.filter((expList)=> {
                                console.log(expList.id, expObj.id)
                                return expList.id !== expObj.id
                            })
                            saveExpListToLS()
                            if(!tableBody.innerHTML){
                                table.style.display = "none"
                            }
                        }
                        delBtn.addEventListener('click', delTrFnc)

                        editBtn.addEventListener('click', ()=>{
                            title.value = expObj.title
                            amount.value = expObj.amount
                            category.value =expObj.category
                            delTrFnc();
                        })
                    // console.log(table)

}

submitBtn.addEventListener('click', ()=>{

    if(title.value !== "" && amount.value !== "" && category.value !== ""){
        let expense = {
            id: Date.now(),
            title: title.value,
            amount: amount.value,
            category: category.value
        }
        ExpenseListsFromLS.unshift(expense)
        saveExpListToLS()
        createExpense(expense)
        table.style.display = "block"
        title.value = ""
        amount.value = ""
        category.value = ""
    }else{
        alert("Please Enter your Inputs to Proceed")
    }  

})