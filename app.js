
let btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
    btnFunction();
    

})

function btnFunction() {
    let a = parseInt(document.querySelector('#value1').value);
    let b = parseInt(document.querySelector('#value2').value);
    let calculate;
    let operators = document.querySelector('#operator').value;

    if(operators === 'add'){
        calculate = a + b;
    }else if(operators ==='sub'){
        calculate = a - b;
    }else if(operators==='div'){
        calculate = a / b;
    }else if(operators === 'mult'){
        calculate = a * b;
    }else{
        calculate = "please input a valid number";
    };

    document.querySelector('#results').innerHTML = calculate;
    
    

}

let form = document.querySelector('#form')
form.addEventListener('submit', function(){
    return false;
})

