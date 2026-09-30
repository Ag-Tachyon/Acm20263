export function Selector({onSelect , fruit , key}){
    return(
    <>
        <button className={key} onClick={() => {onSelect(fruit)}}> Elegir {fruit} </button>
    </>)
}