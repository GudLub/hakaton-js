const squard = document.querySelectorAll('.squard');
const finalSquard = document.querySelector('#sq9');
const query = [];

function squardIsGreen(e) {
    e.target.classList.add('squard__green');
    e.target.removeEventListener('click', squardIsGreen);
    query.push(e.target);
}

function startSquard () {
    squard.forEach(e => e.addEventListener('click', squardIsGreen));
}

function clearSquards() {
    let time = 500;
    for (i = 0; i < query.length; i++) {     
    const sqID = query[i];
    setTimeout(() => {
    sqID.classList.remove('squard__green')}, time);
    time = time + 500;
    };
    query.length = 0; 
    setTimeout(() => {startSquard()}, 3000);
}

function finalSquardGreen () {
    finalSquard.addEventListener('click', () => {
        query.push(finalSquard);
        finalSquard.classList.add('squard__green');
        clearSquards();
    }); 
     
}

startSquard();
finalSquardGreen();



