export function BtnDesec({text , name}){
    return<>
        <button className={`${name}`}>
            <p>{text}</p>
        </button>
    </>
}