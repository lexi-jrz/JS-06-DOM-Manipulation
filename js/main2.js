// Obtener elementos
// ID 
// Clase <-- obtenemos varios elementos que coincidan
// querySelector solo regresa el primer nodo que coincide (ID, Clase)
// querySelectorAll obtiene una lista de nodos.


// 2. Obtener la info del usuario desde inputs y mostrar en tarjetas
// Al menos deben tener 2 commits

const title = document.getElementById('title1');

const subtitle = document.getElementsByClassName('subtitulo');

const secondTitle = document.querySelector('.subtitulo');
const subtitles = document.querySelectorAll('.subtitulo');

console.log(title, subtitle, subtitles);


// Eventos

const inputName = document.getElementById('nombre');
const userName = document.getElementById('username');

const inputAge = document.getElementById('edad');
const userAge = document.getElementById('age');

const inputMail = document.getElementById('correo');
const userMail = document.getElementById('mail');


const profileBtn = document.getElementById('ProfileBtn');

profileBtn.addEventListener('click', () => {
    userName.textContent = inputName.value;
    userAge.textContent = inputAge.value;
    userMail.textContent = inputMail.value;

})





// EVITAR LAS BANDAS PARA EL EJERCICIO 2


