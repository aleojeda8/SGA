export function TarjetaAlumno({nombre, carrera, edad}){
    return(
        <article>
            <h2>{nombre}</h2>
            <p>{edad} años</p>
            <p>{carrera}</p>
        </article>
    )
}