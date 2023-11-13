const email = document.querySelectorAll('.emailRow');
const welcome = document.querySelector('.welcome')
const emails = document.querySelector('.emailList_list')

const welcome_email = document.querySelector('.welcome_email')


email.forEach(function toggle() {
    welcome.addEventListener("click", () => {
        emails.classList.toggle("hidden");
        welcome_email.classList.remove('hidden')
    })
})