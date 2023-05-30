const btn = document.querySelector('.btn')
const nav = document.querySelector('.mobile-nav')

// menu nav
btn.addEventListener('click', ()=>{
    nav.classList.toggle('hidden')
})


// date at footer
const date = new Date()
document.querySelector('.date').innerHTML = date.getFullYear();
//end of date at footer
