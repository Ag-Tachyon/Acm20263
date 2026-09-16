export function Btn(props){
    return <>
        <button className={`${props.name}`}>
            <p>{props.text}</p>
        </button>
    </>
}