const menu2 = document.querySelector('.menu2')
const menu = document.querySelector('.menu-navegacion')


menu2.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != menu2){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})