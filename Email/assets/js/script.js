// TODO: Disable search bar due to "Server Down" change social and promotion categories, make categories work.

// * Constants
// select alls
const email = document.querySelectorAll('.emailRow'); 
const emailBody = document.querySelectorAll('.emailPage')
const important = document.querySelectorAll('.important'); 
const starred = document.querySelectorAll('.starred'); 

const welcome = document.querySelector('.welcome');
const emails = document.querySelector('.emailList_list');
const welcome_email = document.querySelector('.welcome_email');

// sections
const inbox = document.querySelector('.sidebarInbox');
const sections = document.querySelector('.emailList_sections')
const emailListSettings = document.querySelector('.emailList_settings');
const sideImportant = document.querySelector('.sidebarImportant');
const sideStarred = document.querySelector('.sidebarStarred')
const sideDerafts = document.querySelector('.sidebarDrafts')
const sideSent = document.querySelector('.sidebarSent')
const sideSnoozed = document.querySelector('.sidebarSnoozed')

// * Arrays
const emailArray = [];
const importantArray = [];
const starredArray = [];
const emailbodies = [];

// * Setup Arrays
email.forEach(function () {
    emailArray.push(email)
})

important.forEach(function () {
    importantArray.push(important)
})

starred.forEach(function () {
    starredArray.push(starred)
})

emailBody.forEach(function () {
    emailbodies.push(emailBody)
})

// * Email opens

email.forEach(function toggle() {
    welcome.addEventListener("click", () => {
        welcome_email.classList.remove('hidden')
        emailArray.forEach.call(email, function(el) {
            el.classList.add("hidden");
        });
        sections.classList.add('hidden')
        emailListSettings.classList.add("hidden")
    })
})



// * Sidebar Interactions

sideImportant.addEventListener("click", () => {
    emailArray.forEach.call(email, function(el) {
        el.classList.add("hidden");
    });
    importantArray.forEach.call(important, function(il) {
        il.classList.remove("hidden");
    });
    inbox.classList.remove('sidebarOption_active')
    sideImportant.classList.add('sidebarOption_active')
    sections.classList.remove('hidden')
    sideStarred.classList.remove('sidebarOption_active')
    emailListSettings.classList.remove("hidden")
    emailbodies.forEach.call(emailBody, function(body) {
        body.classList.add("hidden");
    });
    sideSnoozed.classList.remove('sidebarOption_active')
    sideSent.classList.remove('sidebarOption_active')
    sideDerafts.classList.remove('sidebarOption_active')
})

inbox.addEventListener("click", () => {
    emailArray.forEach.call(email, function(el) {
        el.classList.remove("hidden");
    });
    inbox.classList.add('sidebarOption_active')
    sideImportant.classList.remove('sidebarOption_active')
    sections.classList.remove('hidden')
    sideStarred.classList.remove('sidebarOption_active')
    emailListSettings.classList.remove("hidden")
    emailbodies.forEach.call(emailBody, function(o) {
        o.classList.add("hidden");
    });
    sideSnoozed.classList.remove('sidebarOption_active')
    sideSent.classList.remove('sidebarOption_active')
    sideDerafts.classList.remove('sidebarOption_active')
})

sideStarred.addEventListener("click", () => {
    emailArray.forEach.call(email, function(el) {
        el.classList.add("hidden");
    });
    starredArray.forEach.call(starred, function(sl) {
        sl.classList.remove("hidden");
    });
    inbox.classList.remove('sidebarOption_active')
    sideImportant.classList.remove('sidebarOption_active')
    sideStarred.classList.add('sidebarOption_active')
    sections.classList.remove('hidden')
    emailListSettings.classList.remove("hidden")
    emailbodies.forEach.call(emailBody, function(o) {
        o.classList.add("hidden");
    });
    sideSnoozed.classList.remove('sidebarOption_active')
    sideSent.classList.remove('sidebarOption_active')
    sideDerafts.classList.remove('sidebarOption_active')
})

sideSnoozed.addEventListener("click", () => {
    emailArray.forEach.call(email, function(el) {
        el.classList.add("hidden");
    });
    inbox.classList.remove('sidebarOption_active')
    sideImportant.classList.remove('sidebarOption_active')
    sideStarred.classList.remove('sidebarOption_active')
    sections.classList.remove('hidden')
    sideSnoozed.classList.add('sidebarOption_active')
    sideSent.classList.remove('sidebarOption_active')
    sideDerafts.classList.remove('sidebarOption_active')
    emailListSettings.classList.remove("hidden")
    emailbodies.forEach.call(emailBody, function(o) {
        o.classList.add("hidden");
    });
})

sideSent.addEventListener("click", () => {
    emailArray.forEach.call(email, function(el) {
        el.classList.add("hidden");
    });
    inbox.classList.remove('sidebarOption_active')
    sideImportant.classList.remove('sidebarOption_active')
    sideStarred.classList.remove('sidebarOption_active')
    sections.classList.remove('hidden')
    emailListSettings.classList.remove("hidden")
    emailbodies.forEach.call(emailBody, function(o) {
        o.classList.add("hidden");
    });
    sideSnoozed.classList.remove('sidebarOption_active')
    sideSent.classList.add('sidebarOption_active')
    sideDerafts.classList.remove('sidebarOption_active')
})

sideDerafts.addEventListener("click", () => {
    emailArray.forEach.call(email, function(el) {
        el.classList.add("hidden");
    });
    inbox.classList.remove('sidebarOption_active')
    sideImportant.classList.remove('sidebarOption_active')
    sideStarred.classList.remove('sidebarOption_active')
    sections.classList.remove('hidden')
    emailListSettings.classList.remove("hidden")
    emailbodies.forEach.call(emailBody, function(o) {
        o.classList.add("hidden");
    });
    sideSnoozed.classList.remove('sidebarOption_active')
    sideSent.classList.remove('sidebarOption_active')
    sideDerafts.classList.add('sidebarOption_active')
})