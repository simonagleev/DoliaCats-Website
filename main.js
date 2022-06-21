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

// Closing menu
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
const menuItems2 = document.querySelectorAll('.menu-item-lvl2')

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

menuItems2.forEach(function (item) {
    item.addEventListener('click', function () {
        if (checkbox.checked === true) {
            bg.classList.toggle('menu_bg')
        }
        checkbox2.checked = false
        checkbox.checked = false
    })
})


//Hiding menu while scrolling
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

