const header = document.getElementById('header');
const h1_wrapper = document.getElementById('h1-wrapper');
const nav = document.getElementById('nav');
const nav_space_box = document.getElementById('nav-space-box');
const nav_buttons_box = document.getElementById('nav-buttons-box');
const nav_buttons = document.getElementsByClassName('.button-box');
const h1_top_text = document.getElementById('h1-top-text');
const h1_bottom_text = document.getElementById('h1-bottom-text');


function toScroll() {
    if (window.scrollY > 100) { 
       if (window.innerWidth < 700) {

       } else {
          header.style.height = "7vw";
          h1_wrapper.style.height = "7vw";
          nav.style.height = "7vw";
          nav_space_box.style.opacity = "0.0000001";

          h1_bottom_text.style.display = "none";
       }
    } else {
        if (window.innerWidth < 700) {

        } else {
          header.style.height = "11.5vw";
          h1_wrapper.style.height = "11.5vw";
          nav.style.height = "11.5vw";
          nav_space_box.style.opacity = "1";

          h1_bottom_text.style.display = 'block';
        }
    }
}

window.addEventListener('scroll', toScroll);