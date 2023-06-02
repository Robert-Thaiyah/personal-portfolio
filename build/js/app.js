const btn = document.querySelector('.btn')
const nav = document.querySelector('.mobile-nav')
const scroll = document.querySelector('.scroll-btn')

// scroll.addEventListener('click', ()=>{
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// })

// menu nav
btn.addEventListener('click', ()=>{
    nav.classList.toggle('hidden')
})


// date at footer
const date = new Date()
document.querySelector('.date').innerHTML = date.getFullYear();
//end of date at footer



function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  function slide() {
    var slide = document.querySelectorAll(".slide");
  
    for (var i = 0; i < slide.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = slide[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        slide[i].classList.add("active");
      } else {
        slide[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  window.addEventListener("scroll", slide);
  