const formulario = document.querySelector("#formAlumno");
const listaAlumnos = document.querySelector("#listadoAlumnos");

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

    mostrarAlumnos(alumnos);
    
    formulario.reset();
})


function obtenerAlumnos(){
    const datos = localStorage.getItem("alumnos");
    return datos ? JSON.parse(datos) : [];
}

function mostrarAlumnos(alumnos){
    listaAlumnos.innerHTML = "";
    for (const alumno of alumnos){
        listaAlumnos.innerHTML += `<li>${alumno.nombre} - ${alumno.carrera} - ${alumno.correo}</li>`;
    }
}

