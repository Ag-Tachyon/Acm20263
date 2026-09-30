export function UserCard({id, nombre, cargo, empresa , onClick}){
    return(
    <>
        <div style={{ border: 'solid thin #ccc' , padding: '.9375rem' , borderRadius: ".9375rem"}}>
            <h3>{nombre}</h3>
            <p><strong>Posición: </strong>{id}</p>
            <p><strong>Cargo: </strong>{cargo}</p>
            <p><strong>Empresa: </strong>{empresa}</p>

            <button onClick={() => onClick(id)}>Delete</button>
        </div>
    </>)
}