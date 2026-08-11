// const alumnos = [
//     {
//         id: 1,
//         nombre: "Juan"
//     },
//     {
//         id: 2,
//         nombre: "María",
//     },
//     {
//         id: 3,
//         nombre: "Pedro",
//     }
// ];

// const materias = [
//     {
//         id: 1,
//         nombre: "Matemáticas"
//     },
//     {
//         id: 2,
//         nombre: "Ciencias"
//     },
//     {
//         id: 3,
//         nombre: "Historia"
//     }
// ];

// const docentes = [
//     {
//         id: 1,
//         nombre: "Dr. García"
//     },
//     {
//         id: 2,
//         nombre: "Lic. Rodríguez"
//     },
//     {
//         id: 3,
//         nombre: "Ing. López"
//     }
// ];

// function obtenerAlumnos(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(alumnos);
//         }, 3000);
//     })
// }

// async function mostrarAlumnos(){
//     const datos = await obtenerAlumnos();
//     console.table(datos);
// }

// mostrarAlumnos();

// crear obtenerMaterias()
// crear obtenerDocentes()
// mostrar los datos a travez de async/await

// function obtenerMaterias(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(materias);
//         }, 3000);
//     })
// }

// async function mostrarMaterias(){
//     const datos = await obtenerMaterias();
//     console.table(datos);
// }

// function obtenerDocentes(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(docentes);
//         }, 3000);
//     })
// }

// async function mostrarDocentes(){
//     const datos = await obtenerDocentes();
//     console.table(datos);
// }

async function obtenerAlumnos(){
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const alumnos = await respuesta.json();
    return alumnos
}

function mostrarAlumno(alumnos){
    // console.log(alumnos);
    // console.log(alumnos[0]);
    // for (const alumno of alumnos) {
    //     console.log(alumno.id, alumno.name);
    // }
    console.log(typeof alumnos);
    localStorage.setItem("alumnos",JSON.stringify(alumnos));
    const datos = localStorage.getItem("alumnos");
    console.log(datos);
    const alumnosParseados = JSON.parse(datos);
    console.table(alumnosParseados);
}

async function iniciar(){
    const alumnos = await obtenerAlumnos();
    mostrarAlumno(alumnos);
}

iniciar();

// /post 
// /comet
// traer de cada uno solo el id,titulo y usuario 

async function obtenerPosts(){
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await respuesta.json();
    return posts;
}

function mostrarPosts(posts){
    // for (const post of posts.slice(0, 5)){
    //     console.log(post.id, post.title, post.userId);
    // }
    console.log(typeof posts);
    localStorage.setItem("posts",JSON.stringify(posts));
}

async function iniciarPosts(){
    const posts = await obtenerPosts();
    mostrarPosts(posts);
}

iniciarPosts();

async function obtenerComentarios(){
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/comments");
    const comentarios = await respuesta.json();
    return comentarios;
}

function mostrarComentarios(comentarios){
    for (const comentario of comentarios.slice(0, 5)){
        console.log(comentario.id, comentario.postId, comentario.name);
    }
    console.log(typeof comentarios);
    localStorage.setItem("comentarios",JSON.stringify(comentarios));
}

async function iniciaComentarios(){
    const comentarios = await obtenerComentarios();
    mostrarComentarios(comentarios);
}

iniciaComentarios();

