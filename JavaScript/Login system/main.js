
const myForm = document.querySelector('.form');
const email = document.querySelector('.emailGet');
const password = document.querySelector('.passwordGet');
const createButton = document.querySelector('.create-account');
const loginButton = document.querySelector('.login-button');


function getInformation(event) {
    event.preventDefault(); 
    CreatePerson(email.value, password.value);
}

createButton.addEventListener('click', getInformation);


function CreatePerson(email, password) {
    this.email = email;
    this.password = password;

    let id = parseInt(localStorage.getItem('userId') || '0');
    id += 1;
    localStorage.setItem('userId', id);

    const person = {
        id: id,
        email: email,
        password: password,
    }

    const personDataJson = JSON.stringify(person);
  
    localStorage.setItem(`user_${id}`, JSON.stringify(person));
    alert('User data saved in localStorage');

}


function login () {
    for(let i = 0; i < localStorage.length -1; i++)
    {
        let temp = JSON.parse(localStorage.getItem(`user_${i}`));
        if(temp.email === email.value && temp.password === password.value)
        {
            return alert("Access permited");
        }
     }

    return alert("Access denied");
   
}


loginButton.addEventListener('click', login);
