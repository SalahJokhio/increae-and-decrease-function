let totalAmount = 0;
const history = [];

document.querySelector('.incomeBtn').addEventListener('click', function() {
    const incomeInput = parseFloat(document.getElementById("incomeInput").value);
    if (!isNaN(incomeInput)) {
        totalAmount += incomeInput;
        document.getElementById("totalAmount").textContent = totalAmount;
        document.getElementById("incomeInput").value = ""; 
        addToHistory(incomeInput, 'Income');
    }
});

document.querySelector('.expenseBtn').addEventListener('click', function() {
    const expenseInput = parseFloat(document.getElementById("expenseInput").value);
    if (!isNaN(expenseInput)) {
        totalAmount -= expenseInput;
        document.getElementById("totalAmount").textContent = totalAmount;
        document.getElementById("expenseInput").value = ""; 
        addToHistory(expenseInput, 'Expense');
    }
});

document.querySelector('.resetBtn').addEventListener('click', function() {
    totalAmount = 0;
    document.getElementById("totalAmount").textContent = totalAmount;
    document.getElementById("historyList").innerHTML = "";
    history.length = 0;
});

function addToHistory(amount, type) {
    const date = new Date();
    const dateString = `${date.getMonth() + 1}/${date.getFullYear()}`;
    history.unshift({ amount, type, date: dateString });
    if (history.length > 12) {
        history.pop();
    }
    updateHistoryUI();
}

function updateHistoryUI() {
    const historyList = document.getElementById("historyList");
    historyList.innerHTML = "";
    history.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.date}: ${item.type} - ${item.amount}`;
        historyList.appendChild(li);
    });
}
