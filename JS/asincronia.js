// console.log("Inicio");

// setTimeout(() => {
//     console.log("Buscando alumno...");
// }, 3000);

// console.log("Fin");

// function saludar(){
//     console.log("Hola");
// }

// function ejecutar(funcion){
//     funcion();
// }

// ejecutar(saludar);

// function despedirse(){
//     console.log("Adiós");
// }

// setTimeout(despedirse, 3000);

// setTimeout(() => {
//     console.log("Buscando docentes...");
// }, 3000);

// setTimeout(() => {
//     console.log("Buscando materias...");
// }, 4000);

// setTimeout(() => {
//     console.log("Buscando cursos...");
// }, 4000);

// console.log("Abriendo Sistema de Gestion Academica");
// setTimeout(() => {
//     console.log("Alumnos Cargados");
// }, 3000);

// console.log("El usuario pude seguir navegando");


// setTimeout(() => {
//     console.log("Solicitando lista de alumnos...");
// }, 5000);

// console.log("Mientras tanto el programa sigue ejecutándose");

// function obtenerAlumnos(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Alumnos cargados");
//             resolve(["Ana", "Juan", "Pedro"]);
//         }, 3000);
//     });
// }

// obtenerAlumnos().then((alumnos) => {
//     console.log(alumnos);
// });

// async function iniciar(){
//     const alumnos = await obtenerAlumnos();
//     console.log(alumnos);
// }

// iniciar();

// function obtenerClima(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Clima cargado");
//             resolve({ temperatura: 25, condiciones: "Soleado" });
//         }, 3000);
//     });
// }

// // con then()
// obtenerClima().then((clima) => {
//     console.log(clima);
// });

// // con async/await
// async function iniciarClima(){
//     const clima = await obtenerClima();
//     console.log(clima);
// }

// iniciarClima();

// async function mostrarSaldo(){
//     const saldo = await obtenerSaldo();
//     console.log(`Su saldo es: ${saldo}`);
// }

// mostrarSaldo();

// function iniciarSecion(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Sesion iniciada");
//         }, 3000);
//     });
// }

// async function mostrarUsuario(){
//     const mensaje = await iniciarSecion();
//     console.log(mensaje);
// }

// mostrarUsuario();

function obtenerUsuario(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ 
                id: 1,
                nombre: "Juan",
                edad: 30
            });
        }, 3000);
    });
}

async function mostrarUsuario(){
    console.log("Cargando usuario...");
    const usuario = await obtenerUsuario();
    console.log(usuario);
}

mostrarUsuario();