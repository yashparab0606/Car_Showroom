let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () => {
    document.querySelector('.login-form').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () => {
    document.querySelector('.login-form').classList.toggle('active');
}

document.querySelector('#create-form-close').onclick = () => {
    document.querySelector('.create-form').classList.toggle('active');
}

document.querySelector('#login2').onclick = () => {
    document.querySelector('.create-form').classList.toggle('active');

}

document.querySelector('#create-btn').onclick = () => {
    document.querySelector('.create-form').classList.toggle('active');
}

window.onscroll = () => {

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.onload = () => {

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }

}


//not working
// function hide() {
//     let menu = document.getElementById('menu-btn');
//     console.log("clicked");
//     let navbar = document.getElementsByClassName('navbar');
//     if (navbar.style.display != 'none') {
//         navbar.style.display = 'none';
//     } else {
//         navbar.style.display = 'block';
//     }

// }


document.querySelector('.home').onmousemove = (e) => {

    document.querySelectorAll('.home-page').forEach(elm => {
        let speed = elm.getAttribute('data-speed');

        let x = (window.innerWidth - e.pageX * speed) / 300;
        let y = (window.innerHeight - e.pageY * speed) / 300;

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

    });

}

document.querySelector('.home').onmouseleave = (e) => {

    document.querySelectorAll('.home-page').forEach(elm => {

        elm.style.transform = `translateX(0px) translateY(0px)`;

    });

}

function toggleDetails(card) {
    var details = card.querySelector('.service-details');
    details.classList.toggle('visible');
}


var swiper = new Swiper(".vehicles-s", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,

        },
        1024: {
            slidesPerView: 3,

        },
    },
});


var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,

        },
        1024: {
            slidesPerView: 3,

        },
    },
});