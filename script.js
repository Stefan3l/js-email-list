// FUNCTIONS

const emailsGenerate = function() {
    loadingELm.style.display = "block";
    listEmailsElm.innerHTML = '';
    

    for(let i = 1; i <= 10; i++) {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (emails) {
            
            listEmailsElm.innerHTML += `<li>${i} - ${emails.data.response}</li>`
            
        })
        .catch(function () {
            listEmailsElm.innerHTML = `<li>404 Non Found</li>` 
        })
        .finally(function () {
            if(i === 10) { 
                loadingELm.style.display = "none";}
            
        });
}};


// DOM ELEMENTS

const listEmailsElm = document.getElementById('list-emails')
const btnElm = document.getElementById('btn')
const loadingELm = document.getElementById('loading')

// EVENTS

btnElm.addEventListener('click', emailsGenerate)


