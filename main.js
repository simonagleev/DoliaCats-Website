let roadmapAnimItems = document.querySelectorAll(".roadmap_list_item");
let meowverseVideos = document.querySelectorAll(".meowverse_video");

function onEntry(entry) {
    entry.forEach(change => {
        if(change.isIntersecting) {
            change.target.classList.add('roadmap_list_item_active')
        }
    });
}

const options= {
    threshhold: [0.5]
}
const observer = new IntersectionObserver(onEntry, options);

for (let el of roadmapAnimItems) {
    observer.observe(el)
    console.log(el)
}


function onEntry(entry) {
    entry.forEach(change => {
        if(change.isIntersecting) {
            change.target.classList.add('show')
        }
    });
}

for (let el of meowverseVideos) {
    observer.observe(el)
    console.log(el)
}


const menuCheckbox = document.getElementById("menu__toggle");

const link= document.querySelectorAll('.menu__item')
const menu= document.querySelector('.menu__box')
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const body = document.querySelector('.body');

const navLinks = document.querySelectorAll('.menu__item');

const test = () => {
    // menuCheckbox.value = 'off'
  console.log('heheh')
}
menu.addEventListener('click', function(){
    console.log('heheh')
    menuCheckbox.value = 'off'
    console.log(menuCheckbox.labels)
})
console.log(menu)
// link.addEventListener('click', test())

// function doActiveMenu(evt) {
//     evt.preventDefault();
//     headerBurger.classList.toggle('active');
//     headerMenu.classList.toggle('active');
//     body.classList.toggle('lock');
// }


// navLinks.forEach((element) => {
//     element.addEventListener('click', doActiveMenu)
// })


// headerBurger.addEventListener('click', doActiveMenu);



var burgerMenu = document.getElementById('burger-menu');

var overlay = document.getElementById('menu');

burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
