const formulario = document.querySelector("#formulario");
const listaAlumnos = document.querySelector("#listadoAlumnos");
const mensaje = document.querySelector("#mensaje");
let alumnoEditadoId = null;
let alumnoEditar = null;

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
        id: Date.now(),
        nombre: nombre,
        carrera: carrera,
        correo: correo
        }

        alumnos.push(alumno);
        mostrarMensaje("Alumno guardado correctamente.", "mje-exito");

    }else{
        const alumno = alumnos.find(alumno => alumno.id === alumnoEditadoId)
        alumno.nombre = nombre;
        alumno.carrera = carrera;
        alumno.correo = correo;
        
        const datosActuales = {
            nombre: nombre,
            carrera: carrera,
            correo: correo
        }

        if(datosActuales.nombre === alumnoEditar.nombre && datosActuales.carrera === alumnoEditar.carrera 
            && datosActuales.correo === alumnoEditar.correo){
                mostrarMensaje("No se realizaron cambios", "mje-error");
                return 
        }
        alumnoEditadoId = null;
        alumnoEditar = null;
        formulario.querySelector("button").textContent ="Guardar Alumno";

        mostrarMensaje("Alumno Actualizado Correctamente", "mje-exito");
    }
    
    // localStorage.setItem("alumnos", JSON.stringify(alumnos));
    guardarDatos("alumnos", alumnos)

    mostrarAlumnos(alumnos);

    formulario.reset();
})

function obtenerAlumnos(){
    // const datos = localStorage.getItem("alumnos");
    // return datos ? JSON.parse(datos) : [];
    return obtenerDatos("alumnos")
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
            <td>${alumno.id}</td>
            <td>${alumno.nombre}</td>
            <td>${alumno.carrera}</td>
            <td>${alumno.correo}</td>
            <td>
                <button class="btn-editar" data-id="${alumno.id}">Editar</button>
                <button class="btn-eliminar" data-id="${alumno.id}">Eliminar</button>
            </td>
        </tr>`;
    }
}

function eiminarAlumno(id) {
    const alumnos = obtenerAlumnos();
    const alumnosActuaizados = alumnos.filter(
        alumno => alumno.id !== id
    );

    localStorage.setItem("alumnos", JSON.stringify(alumnosActuaizados))
    mostrarAlumnos(alumnosActuaizados);
    mostrarMensaje("Alumno Eliminado Correctamente","mje-exito");
}

listaAlumnos.addEventListener("click", (e) =>{
    if (e.target.classList.contains("btn-eliminar")){
        const id = Number(e.target.dataset.id);
        eiminarAlumno(id);
    }

    if (e.target.classList.contains("btn-editar")){
        const id = Number(e.target.dataset.id);
        editarAlumno(id);
    }
})

function editarAlumno(id){
    const alumnos = obtenerAlumnos();
    const alumno = alumnos.find(alumno => alumno.id === id)
    document.querySelector("#nombre").value = alumno.nombre;
    document.querySelector("#carrera").value = alumno.carrera;
    document.querySelector("#correo").value = alumno.correo;
    alumnoEditar = {
        nombre: alumno.nombre,
        carrera: alumno.carrera,
        correo: alumno.correo
    }
    alumnoEditadoId = id;
    formulario.querySelector("button").textContent ="Actualizar Alumno";
}

const alumnos = obtenerAlumnos();
mostrarAlumnos(alumnos);

