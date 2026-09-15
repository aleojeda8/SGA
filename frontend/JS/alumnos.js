const formulario = document.querySelector("#formulario");
const listaAlumnos = document.querySelector("#listadoAlumnos");
const mensaje = document.querySelector("#mensaje");
let alumnoEditadoId = null;
let alumnoEditar = null;
const btnCancelar = document.querySelector("#btn-cancelar");
btnCancelar.style.display = "none";
const btnGuardar = document.querySelector("#btnGuardar")

// async function cargarDatos(){
//     const res = await fetch("http://localhost:3000/alumnos");
//     const alumnos = await res.json();
//     console.table(alumnos);
// }
// cargarDatos();

formulario.addEventListener("submit", function (event){
    event.preventDefault();

    const nombre = document.querySelector("#nombre").value.trim();
    const carrera = document.querySelector("#carrera").value.trim();
    const correo = document.querySelector("#correo").value.trim();

    if (nombre === "" || carrera === "" || correo === ""){
        mostrarMensaje("Todos los campos son obligatorios", "mje-error");
        return;
    }

    if(!correo.includes("@")){
        mostrarMensaje("Ingrese un correo electronico valido", "mje-error")
        return
    }

    if(nombre.length < 3){
        mostrarMensaje("El nombre debe tener mas de 3 caracteres","mje-error");
        return
    }

    const alumnos = obtenerAlumnos();

    if( alumnoEditadoId === null ){
        const alumno = {
        legajo: legajo,
        nombre: nombre,
        carrera: carrera,
        correo: correo
        }

        alumnos.push(alumno);
        mostrarMensaje("Alumno guardado correctamente.", "mje-exito");

    }else{
        const alumno = alumnos.find(alumno => alumno.legajo === alumnoEditadoId)
        
        const datosActuales = {
            nombre: nombre,
            carrera: carrera,
            correo: correo
        }

        if(datosActuales.nombre === alumnoEditar.nombre && datosActuales.carrera === alumnoEditar.carrera 
            && datosActuales.correo === alumnoEditar.correo){
                mostrarMensaje("No se realizaron cambios", "mje-adv");
                return 
        }
        alumno.nombre = nombre;
        alumno.carrera = carrera;
        alumno.correo = correo;
        
        alumnoEditadoId = null;
        alumnoEditar = null;
        btnGuardar.textContent ="Guardar Alumno";

        mostrarMensaje("Alumno Actualizado Correctamente", "mje-exito");
    }
    
    // localStorage.setItem("alumnos", JSON.stringify(alumnos));
    guardarDatos("alumnos", alumnos)

    mostrarAlumnos(alumnos);

    formulario.reset();
})

async function obtenerAlumnos(){

    const respuesta = await fetch("http://localhost:3000/alumnos");
    const alumnos = await respuesta.json();
    return alumnos;
    // const datos = localStorage.getItem("alumnos");
    // return datos ? JSON.parse(datos) : [];
    // return obtenerDatos("alumnos")
}

// function mostrarMensaje(texto, clase){
//     mensaje.textContent = texto;
//     mensaje.className = `mensaje ${clase}`;
//     mensaje.style.display = "block"
//     setTimeout(() => {
//         mensaje.style.display = "none";
//     }, 3000);
// }

function mostrarAlumnos(alumnos){
    listaAlumnos.innerHTML = "";
    for (const alumno of alumnos){
        listaAlumnos.innerHTML += `<tr>
            <td>${alumno.legajo}</td>
            <td>${alumno.nombre}</td>
            <td>${alumno.carrera}</td>
            <td>${alumno.correo}</td>
            <td>
                <button class="btn-editar" data-id="${alumno.legajo}">Editar</button>
                <button class="btn-eliminar" data-id="${alumno.legajo}">Eliminar</button>
            </td>
        </tr>`;
    }
}

function eiminarAlumno(legajo) {
    const alumnos = obtenerAlumnos();
    const alumnosActuaizados = alumnos.filter(
        alumno => alumno.legajo !== legajo
    );

    guardarDatos("alumnos", alumnosActuaizados);
    mostrarAlumnos(alumnosActuaizados);
    mostrarMensaje("Alumno Eliminado Correctamente","mje-exito");
}

listaAlumnos.addEventListener("click", (e) =>{
    if (e.target.classList.contains("btn-eliminar")){
        const legajo = Number(e.target.dataset.legajo);
        eiminarAlumno(legajo);
    }

    if (e.target.classList.contains("btn-editar")){
        const legajo = Number(e.target.dataset.legajo);
        editarAlumno(legajo);
    }
})

function editarAlumno(legajo){
    const alumnos = obtenerAlumnos();
    const alumno = alumnos.find(alumno => alumno.legajo === legajo);
    document.querySelector("#nombre").value = alumno.nombre;
    document.querySelector("#carrera").value = alumno.carrera;
    document.querySelector("#correo").value = alumno.correo;
    alumnoEditar = {
        nombre: alumno.nombre,
        carrera: alumno.carrera,
        correo: alumno.correo
    }
    alumnoEditadoId = legajo;
    btnCancelar.style.display = "inline-block";

    btnGuardar.textContent ="Actualizar Alumno";
    document.querySelector("#nombre").focus();
}

function cancelarEdicion(){
    formulario.reset();
    alumnoEditadoId = null;
    alumnoEditar = null;
    btnGuardar.textContent = "Guardar Alumno";
    btnCancelar.style.display = "none";
    document.querySelector("#nombre").focus();
}

btnCancelar.addEventListener("click", cancelarEdicion);

async function iniciar(){
    const alumnos = await obtenerAlumnos();
    mostrarAlumnos(alumnos);
}

iniciar();