const letter = document.querySelector('.letter');
const squard = Array.from(document.querySelectorAll('.squard'));


const query = [];


// добавляем цвет
letter.addEventListener("click", (e) => { 
  e.target.classList.add('squard__green');
  query.push(e.target.id);
  console.log(query);
  return query;
});

// убираем из массива лишние клики (повторные)
const queryFinal = query.filter(function (item, position, arr) {
    return arr.lastIndexOf(item) === position; 
  });

  // убираем цвет
squard.forEach( function (item) {
    if (item.classList.contains('.squard__green')) {
for (i = 0; i < 7; i++) {
    squard.queryFinal[i].classList.remove('.squard__green');
}
    }
})