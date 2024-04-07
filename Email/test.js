const targetEL = document.querySelector('.content');

const loadSnippet = number => {
    fetch(`./${number}_email.html`).then(res => {
        if(res.ok) {
            return res.text();
        }
    }).then(htmlSnippet => {
        targetEL.innerHTML = htmlSnippet;
    });
};