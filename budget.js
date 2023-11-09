var moneyEarned = document.getElementById('moneyEarned');
var moneyAvailable = document.getElementById('moneyAvailable');
var moneySpent = document.getElementById('moneySpent');
var description = document.getElementById('description');
var amount = document.getElementById('amount');
var incomeDisplay = document.getElementById('incomeDisplay');
var expensesDisplay = document.getElementById('expenseDisplay');



document.getElementById('btn1').addEventListener('click', function (){
    moneyEarned.innerHTML = amount.value;


    incomeDisplay.innerHTML = description.value + ' ' +  ' ' + ' ' + ' ' + amount.value;


});

document.getElementById('btn2').addEventListener('click', function() {

    moneyAvailable.innerHTML = moneyEarned.innerText - amount.value;

    moneySpent.innerHTML  = parseFloat(amount.value) 

    

    var javaSpan = document.createElement('p');
    javaSpan.innerHTML = description.value + ' ' + ' ' + ' ' + ' ' + amount.value;
    expensesDisplay.appendChild(javaSpan);

    
 


    var btnJava = document.createElement('button');
    var btnJavaConc = document.createTextNode('del');
    btnJava.appendChild(btnJavaConc);
    javaSpan.appendChild(btnJava);
    amount.value = '';


    

    btnJava.onclick = function() {
        expensesDisplay.removeChild(javaSpan);        
    }
})




