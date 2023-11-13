//TODO: comment Js

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const iconCloseHome = document.querySelector('.icon-close-home');
const home = document.querySelector('.home');
const homebtn = document.querySelector(".sect-popup-h");
const abt = document.querySelector('.about');
const abtbtn = document.querySelector(".sect-popup-a");
const iconCloseAbt = document.querySelector('.icon-close-abt');
const staff = document.querySelector('.staff');
const iconCloseStaff = document.querySelector('.icon-close-staff');
const staffbtn = document.querySelector(".sect-popup-s");
const part = document.querySelector('.partners');
const iconClosePart = document.querySelector('.icon-close-part');
const partbtn = document.querySelector(".sect-popup-p");

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    home.classList.remove('active');
    abt.classList.remove('active');
    staff.classList.remove('active');
    part.classList.remove('active');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

homebtn.addEventListener('click', () => {
    home.classList.add('active');
    abt.classList.remove('active');
    staff.classList.remove('active');
    part.classList.remove('active');
    wrapper.classList.remove('active-popup');
})

iconCloseHome.addEventListener('click', () => {
    home.classList.remove('active');
});

abtbtn.addEventListener('click', () => {
    abt.classList.add('active');
    home.classList.remove('active');
    staff.classList.remove('active');
    part.classList.remove('active');
    wrapper.classList.remove('active-popup');
})

iconCloseAbt.addEventListener('click', () => {
    abt.classList.remove('active');
});

staffbtn.addEventListener('click', () => {
    staff.classList.add('active');
    home.classList.remove('active');
    abt.classList.remove('active');
    part.classList.remove('active');
    wrapper.classList.remove('active-popup');
})

iconCloseStaff.addEventListener('click', () => {
    staff.classList.remove('active');
});

partbtn.addEventListener('click', () => {
    part.classList.add('active');
    home.classList.remove('active');
    abt.classList.remove('active');
    staff.classList.remove('active');
    wrapper.classList.remove('active-popup');
})

iconClosePart.addEventListener('click', () => {
    part.classList.remove('active');
});

function auth() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if( email == "admin@email.com" && password == "admin123") {
        window.location.assign("https://crimsoncali.co")
        alert("Login Successful")
    } else {
        alert("invalid info")
        console.log(email)
        console.log(password)
    }
}
