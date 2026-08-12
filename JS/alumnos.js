const formulario = document.querySelector("#formAlumno");
const listaAlumnos = document.querySelector("#listadoAlumnos");
const mensaje = document.querySelector("#mensaje");
let alumnoEditadoId = null;

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const carrera = document.querySelector("#carrera").value;
    const correo = document.querySelector("#correo").value;

    const alumno = {
        id: Date.now(),
        nombre: nombre,
        carrera: carrera,
        correo: correo
    }

    const alumnos = obtenerAlumnos();
    alumnos.push(alumno);

    localStorage.setItem("alumnos", JSON.stringify(alumnos));

    mostrarMensaje("Alumno guardado correctamente.");

    mostrarAlumnos(alumnos);
    
    formulario.reset();
})

function obtenerAlumnos(){
    const datos = localStorage.getItem("alumnos");
    return datos ? JSON.parse(datos) : [];
}

function mostrarMensaje(texto){
    mensaje.textContent = texto;
    setTimeout(() => {
        mensaje.textContent = "";
    }, 3000);
}

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

    localStorage.setItem("alumno", JSON.stringify(alumnosActuaizados))
    mostrarAlumnos(alumnosActuaizados);
    mostrarMensaje("Alumno Eliminado Correctamente");
}

listaAlumnos.addEventListener("click", (e) =>{
    if (e.target.classList.contains("btn-eliminar")){
        const id = Number(e.target.dataset.id);
        eiminarAlumno(id);
    }
})

function editarAlumno(id){
    const alumnos = obtenerAlumnos();
    const alumno = alumnos.find(alumno => alumno.id === id)
    document.querySelector("#nombre").value = alumno.nombre;
    document.querySelector("#carrera").value = alumno.carrera;
    document.querySelector("#correo").value = alumno.carrera;
    alumnoEditadoId = id;
}

