let roadmapAnimItems = document.querySelectorAll(".roadmap_list_item");
let meowverseVideos = document.querySelectorAll(".meowverse_video");

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('roadmap_list_item_active')
        }
    });
}

const options = {
    threshhold: [0.5]
}
const observer = new IntersectionObserver(onEntry, options);

for (let el of roadmapAnimItems) {
    observer.observe(el)
    console.log(el)
}

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show')
        }
    });
}

for (let el of meowverseVideos) {
    observer.observe(el)
    console.log(el)
}


// const menuCheckbox = document.getElementById("menu__toggle");

// const link= document.querySelectorAll('.menu__item')
// const menu= document.querySelector('.menu__box')
// const headerBurger = document.querySelector('.header__burger');
// const headerMenu = document.querySelector('.header__menu');
// const body = document.querySelector('.body');

// const navLinks = document.querySelectorAll('.menu__item');

// const test = () => {
//     // menuCheckbox.value = 'off'
//   console.log('heheh')
// }
// menu.addEventListener('click', function(){
//     console.log('heheh')
//     menuCheckbox.value = 'off'
//     console.log(menuCheckbox.labels)
// })
// console.log(menu)

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




// var burgerMenu = document.getElementById('burger-menu');

// var overlay = document.getElementById('menu');

// burgerMenu.addEventListener('click', function() {
//   this.classList.toggle("close");
//   overlay.classList.toggle("overlay");
// });

const wholeNavigation = document.querySelector('.menu')
const bg = document.getElementById('menu-background');

const menu = document.querySelector('.menu-open')
const label = document.querySelector('.menu-open-button')
const checkbox = document.getElementById('menu-open')
const menuItems = document.querySelectorAll('.menu-item')

const more = document.getElementById('more')
const menu2 = document.querySelector('.menu-open-2')
const label2 = document.querySelector('.menu-open-button-2')
const checkbox2 = document.getElementById('menu-open-2')

menu.addEventListener('click', function () {
    if (checkbox.checked === true) {
        bg.classList.toggle('menu_bg')
    }
    checkbox2.checked = false
})

label.addEventListener('click', function () {
    if (checkbox.checked === true) {
        bg.classList.toggle('menu_bg')
    }
    checkbox2.checked = false
})

menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
        if (checkbox.checked === true) {
            bg.classList.toggle('menu_bg')
        }
        checkbox2.checked = false
        checkbox.checked = false
    })
})

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    wholeNavigation.style.top = "0";
  } else {
    wholeNavigation.style.top = "-500px";
  }
  prevScrollpos = currentScrollPos;
}

