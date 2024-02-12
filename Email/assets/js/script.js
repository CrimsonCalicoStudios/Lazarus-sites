// TODO: Disable search bar due to "Server Down". sort out category specific emails

// * Constants
// select alls
const email = document.querySelectorAll('.emailRow'); 
const emailBody = document.querySelectorAll('.emailPage')
const important = document.querySelectorAll('.important'); 
const starred = document.querySelectorAll('.starred'); 
const sent = document.querySelectorAll('.sent')

const welcome = document.querySelector('.welcome');
const system_error = document.querySelector('.system_error');
const emails = document.querySelector('.emailList_list');
const welcome_email = document.querySelector('.welcome_email');
const system_error_email = document.querySelector('.system_error_email');
const glitched = document.querySelector('.glitched');
const glitched_email = document.querySelector('.glitched_email');

// sections
const inbox = document.querySelector('.sidebarInbox');
const sections = document.querySelector('.emailList_sections')
const emailListSettings = document.querySelector('.emailList_settings');
const sideImportant = document.querySelector('.sidebarImportant');
const sideStarred = document.querySelector('.sidebarStarred')
const sideDerafts = document.querySelector('.sidebarDrafts')
const sideSent = document.querySelector('.sidebarSent')
const sideSnoozed = document.querySelector('.sidebarSnoozed')

//top sections
const primary = document.querySelector('.primary')
const updates = document.querySelector('.updates')
const server = document.querySelector('.server')

const server_mail = document.querySelectorAll('.sever_mail')
const primary_mail = document.querySelectorAll('.primary_mail')
const updates_mail = document.querySelectorAll('.updates_mail')


// * Arrays
const emailArray = [];
const importantArray = [];
const starredArray = [];
const emailbodies = [];
const sentArray = [];
const primaryArray = [];
const updatesArray = [];
const serverArray = [];

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

sent.forEach(function () {
    sentArray.push(sent)
})

server_mail.forEach(function () {
    serverArray.push(server_mail)
})

updates_mail.forEach(function () {
    updatesArray.push(updates_mail)
})

primary_mail.forEach(function () {
    primaryArray.push(primary_mail)
})

// ! Hide specific emails from start

function begin_hidden() {
    sentArray.forEach.call(sent, function(sl) {
        sl.classList.add("hidden");
    });
}

begin_hidden();

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

    system_error.addEventListener("click", () => {
        system_error_email.classList.remove('hidden')
        emailArray.forEach.call(email, function(el) {
            el.classList.add("hidden");
        });
        sections.classList.add('hidden')
        emailListSettings.classList.add("hidden")
    })

    glitched.addEventListener("click", () => {
        glitched_email.classList.remove('hidden')
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
    sentArray.forEach.call(sent, function(sl) {
        sl.classList.add("hidden");
    });
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
    sentArray.forEach.call(sent, function(sl) {
        sl.classList.add("hidden");
    });
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
    sentArray.forEach.call(sent, function(sl) {
        sl.classList.add("hidden");
    });
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
    sentArray.forEach.call(sent, function(sl) {
        sl.classList.add("hidden");
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
    sentArray.forEach.call(sent, function(sl) {
        sl.classList.remove("hidden");
    });
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
    sentArray.forEach.call(sent, function(sl) {
        sl.classList.add("hidden");
    });
})


primary.addEventListener("click", () => {
    emailArray.forEach.call(email, function(el) {
        el.classList.add("hidden");
    });
    primary.classList.add("section_selected")
    updates.classList.remove("section_selected")
    server.classList.remove("section_selected")
    primaryArray.forEach.call(primary_mail, function(pl) {
        pl.classList.remove("hidden");
    });
    updatesArray.forEach.call(updates_mail, function(ul) {
        ul.classList.add("hidden");
    });
    serverArray.forEach.call(server_mail, function(serl) {
        serl.classList.add("hidden");
    });
})

updates.addEventListener("click", () => {
    emailArray.forEach.call(email, function(el) {
        el.classList.add("hidden");
    });
    primary.classList.remove("section_selected")
    updates.classList.add("section_selected")
    server.classList.remove("section_selected")
    primaryArray.forEach.call(primary_mail, function(pl) {
        pl.classList.add("hidden");
    });
    updatesArray.forEach.call(updates_mail, function(ul) {
        ul.classList.remove("hidden");
    });
    serverArray.forEach.call(server_mail, function(serl) {
        serl.classList.add("hidden");
    });
})

server.addEventListener("click", () => {
    emailArray.forEach.call(email, function(el) {
        el.classList.add("hidden");
    });
    primary.classList.remove("section_selected")
    updates.classList.remove("section_selected")
    server.classList.add("section_selected")
    primaryArray.forEach.call(primary_mail, function(pl) {
        pl.classList.add("hidden");
    });
    updatesArray.forEach.call(updates_mail, function(ul) {
        ul.classList.add("hidden");
    });
    serverArray.forEach.call(server_mail, function(serl) {
        serl.classList.remove("hidden");
    });
})