const titleEl = document.getElementById('title');
const amountEl = document.getElementById('amount');
const balanceEl = document.getElementById('balance');
const incomeEl = document.getElementById('income');
const expenseEl = document.getElementById('expense');
const selectEl = document.getElementById('type');
const todo = document.getElementById('list')
const submitBtn = document.getElementById('submit-btn')
const transactionForm = document.getElementById('transaction-form');

const transaction = {
    totalBalance: 0,
    totalIncome: 0,
    totalExpense: 0
}

transactionForm.addEventListener('submit',(e)=>{
    e.preventDefault();
})

function createTodo(){
    const li = document.createElement('li');
    const span = document.createElement('span');
    if(selectEl.value == 'income'){
        span.classList.add('income')
    }
    else{
        span.classList.add('expense')
    }
    li.innerText =  titleEl.value
    span.innerText = "₹" + amountEl.value
    li.append(span)
    todo.append(li)
}



submitBtn.addEventListener('click',()=>{

    const title = titleEl.value.trim();
    const amount = +amountEl.value;

    if (title === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter valid data");
        return;
    }


    if(selectEl.value == 'income'){
        transaction.totalBalance += +amountEl.value;
        
        transaction.totalIncome += +amountEl.value; 
        incomeEl.innerText = "₹" + transaction.totalIncome;   
    }
    
    else if(selectEl.value == 'expense'){
        transaction.totalBalance = transaction.totalBalance - amountEl.value;
        expenseEl.innerText = "₹" +amountEl.value;
    }

    balanceEl.innerText = "₹" + transaction.totalBalance; 

    createTodo()  

    titleEl.value = ""
    amountEl.value = ""
})






// transactionForm.addEventListener('submit',(e)=>{
//     e.preventDefault();
// })


// function renderEl() {
//     balanceEl.innerText = "₹" + transaction.totalBalance;
//     incomeEl.innerText = "₹" + transaction.totalIncome;
// }

// function createTodo(){
//     const li = document.createElement('li')
//     const span = document.createElement('span')
//      if(selectEl.value == 'income'){
//         span.classList.add('income')
//     }
//     else{
//         span.classList.add('expense')
//     }
//     li.innerText = titleEl.value
//     span.innerText = "₹" + amountEl.value
//     li.append(span)
//     todo.append(li);
// }
// function add() {
//     if (titleEl.value == 0) {
//        return alert('Please Enter Title')
//     }


//     if (selectEl.value == 'income') {
        
//         transaction.totalBalance += +amountEl.value;
//         transaction.totalIncome += +amountEl.value;
//     }
//     else if (selectEl.value == "expense") {
//         transaction.totalBalance = transaction.totalBalance - amountEl.value
//         expenseEl.innerText = "₹" + amountEl.value;
//     }

//     createTodo();

//     renderEl()
// }





