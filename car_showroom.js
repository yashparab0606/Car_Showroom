let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-form').classList.toggle('active');
}
 
document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-form').classList.toggle('active');
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