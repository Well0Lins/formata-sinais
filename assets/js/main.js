
const inputList = document.querySelector('.my-list');
const btnList = document.querySelector('.btn-list');
const btnCorrect = document.querySelector('.btn-correct');
const result = document.querySelector('.result');


function creatLi () {
    const li = document.createElement('li');
    return li;
}




btnList.addEventListener('click', (e) => {
    e.preventDefault();
    if (!inputList.value) return;

    iterableList(inputList.value);
})

btnCorrect.addEventListener('click', (e) => {
    e.preventDefault();
    return alert('Desabilitado temporariamente!')   
})



function iterableList (inputText) {
    for (let i of inputText) {
        const li = creatLi();
        li.innerText = i;
        result.appendChild(li);   
    }
}





// Cabeçalho


/*
function makeHeader() {

   const l1 = 'LISTA FORNALHA';
   const l2 = timeCandle();
   const l3 = otc();
   const l4 = 'DATA';
   const l5 = dateList();

}

function timeCandle() {
    
}

*/