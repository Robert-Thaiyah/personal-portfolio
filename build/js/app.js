const btn = document.querySelector('.btn')
const nav = document.querySelector('.mobile-nav')

// menu nav
btn.addEventListener('click', ()=>{
    nav.classList.toggle('hidden')
})

// typewriter effect
const words = ["Hello!", "Bonjour!", "Shikamoo!","Shalom!"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 200);
}

type();

// end of typewriter

// date at footer
const date = new Date()
document.querySelector('.date').innerHTML = date.getFullYear();
//end of date at footer