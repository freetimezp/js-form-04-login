let loginBtn = document.getElementById('loginBtn');
let loginBox = document.getElementById('login');
let registerBtn = document.getElementById('registerBtn');
let registerBox = document.getElementById('register');

function login() {
    loginBox.style.left = "4px";
    registerBox.style.right = "-520px";

    loginBtn.className += " white-btn";
    registerBtn.className = "btn";

    loginBox.style.opacity = "1";
    registerBox.style.opacity = "0";
}

function register() {
    loginBox.style.left = "-510px";
    registerBox.style.right = "5px";

    loginBtn.className = "btn";
    registerBtn.className += " white-btn";

    loginBox.style.opacity = "0";
    registerBox.style.opacity = "1";
}



function myMenuFunction() {
    let navMenu = document.getElementById('navMenu');

    if (navMenu.className === 'nav-menu') {
        navMenu.className += ' responsive';
    } else {
        navMenu.className = 'nav-menu';
    }
}