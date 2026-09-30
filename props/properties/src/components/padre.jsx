import { Selector } from "./Selector";

export function Fruteria(){

    const fruits = ["Pera" , "Manzana" , "Mandarina"]
    const handleSelection = (fruit) => {
        console.log("El hijo eligió" , fruit);
    };

    return(
    <>
       {
        fruits.map((fruit) => {
           return <Selector key={fruit} fruit={fruit} onSelect={handleSelection}></Selector>
        })
       }
        
    </>)
}