const formulario = document.getElementById('formulario')
/* const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#email"); */

//--------declaracion de la funcion enviar-------
formulario.addEventListener('submit', (ev) => {
    ev.preventDefault()
    validarFormulario()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const teleCheck = /[0-9]{3}\s[0-9]{2}\s[0-9]{2}\s[0-9]{2}/;
    /* const nomRegex =  ^[-\w]+(?:\W+[-\w]+){1,6}\W*$; */

    let enviar = true;

    if (enviar) {
        if (!emailRegex.test(email)) {
            alert("Por favor, ingresa un email válido.");
            enviar = false;
        }
    }

    if (enviar) {
        if (start.value < 18) {
            alert("Debes tener al menos 18 años.");
            enviar = false;
        }
    }

    //nombre = formulario.elements["nombre"].value;
    if (enviar) {
        if (nombre === "") {
            alert("El nombre es obligatorio")
            enviar = false;
        }
    }

    if (enviar) {
        if (!teleCheck.test(telefono)) {
            alert("este telefono no es valido")
            enviar = false;
        }
    }
    if (!enviar) {ev.preventDefault()};
    console.log(enviar)
})



const objValidado = {
    nombre: false,
    apellido: false,
    email: false,
    telefono: false,

}
regExp = {
    nombre: /[a-z]/,
    apellido: /[a-z]/,
    //email: /[a-z]/,

}

//--------validacion de formulario-------
let errores = ''
const validarFormulario = () => {

    const nombre = formulario.nombre.value
    const apellido = formulario.apellido.value
    const email = formulario.email.value
    const telefono = formulario.telefono.value


    if (nombre == '') {
        errores += `<li>Debes escribir tu nombre</li>`
        formulario.nombre.style.background = 'red';
    }
    
    if (apellido == '') {
        errores += `<li>Debes escribir tu primer apellido</li>`
        formulario.apellido.style.background = 'red';
    }
    if (email == '') {
        errores += `<li>Debes escribir un email</li>`
        formulario.email.style.background = 'red';
    }

    if (errores != '') {
        mensaje.innerHTML = errores
    } else {
        formulario.submit()
    }

  
    const valoresValidados = Object.values(objValidado)
    const validado = valoresValidados.includes(false);

    if (!validado) {
        console.log('pasa validacion')
    } else {
        console.log('no pasa validacion')
    }

}
 