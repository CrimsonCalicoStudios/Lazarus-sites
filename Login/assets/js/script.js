// Constants
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

// Login section
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

// Home

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

// About

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


// Staff

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

// Partners

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

// Login Auth

function auth() {
    // Get Elements
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // ! Set Login + after effect
    if( email == "admin@email.com" && password == "admin123") {
        // * Set location
        window.location.assign("https://lazarus.crimsoncali.co/Email")
    } else {
        window.location.assign("https://crimsoncali.co")
    }
}
