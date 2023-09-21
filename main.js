
const capturarId = (id) => document.getElementById(id);

const form = document.querySelector("form"),
 errornom= capturarId("errornom"),
 errorcorr= capturarId("errorcorr"),
 errorcon= capturarId("errorcon");




function capturarDatos(){
    const datosPersona = {
        nombre: "",
        correo: "",
        contrasenia: "",
    }

    const nom = document.querySelector("#nombreDeUsuario").value;
    const corr = document.querySelector("#correoElectronico").value;
    const con = document.querySelector("#contrasenia").value;

    datosPersona.nombre = nom;
    datosPersona.correo = corr;
    datosPersona.contrasenia = con;

    return datosPersona;
}


form.addEventListener('submit', e => {

    e.preventDefault();
    console.log("evento funcionando");
    const datosPersona = capturarDatos();

    validarInformacion(datosPersona);

    mostrarErrores();
    
})


function validarInformacion(usuario){

    const errores = [];

    if(usuario.nombre.trim().length<3){
        errores.push("El nombre debe tener al menos tres carácteres");
    }

    if(usuario.contrasenia.length < 6){
        errores.push("La contraseña debe tener 6 o más carácteres");
    }

    return errores;
}

function mostrarErrores(){
    const ul = document.querySelector(".errorlist");

    errores.forEach((string) => {
        const li = document.createElement("li");
        li.innerText = string;
        ul.appendChild(li);
    })
}
