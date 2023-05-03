let increment = 0;

let show = document.querySelector('.show')
let cuerpo = document.querySelector('.container')

document.addEventListener('click', (e) => {
    console.log(e)

    if (e.target.matches('#Decrease')) {
        increment--
        show.innerHTML = increment
        cuerpo.style.backgroundColor = "rbg(231, 76, 76 )"
        
 }
 else if (e.target.matches('#Increase')){
    increment++
        show.innerHTML = increment
        cuerpo.style.backgroundColor = "rbg(78, 246, 99 )"
 }
 else if (e.target.matches('#Reset')){
    increment= 0
        show.innerHTML = increment
        cuerpo.style.backgroundColor = "rbg(94, 124, 238 )"
}}
)
