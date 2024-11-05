const form = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
const alerta = document.querySelector('.alerta');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value == '' || emailInput.value == '')
    {
        alerta.innerHTML += '<h4>Please, fill both inputs!</h4>'
        alerta.innerHTML += `<li>${nameInput.value}</li>`;
        alerta.classList.add('error');
        setTimeout(() => (alerta.remove()), 3000);
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}, ${emailInput.value}`));
        userList.appendChild(li);

        // clearing the fields

        nameInput.value = '';
        emailInput.value = '';
    }

}