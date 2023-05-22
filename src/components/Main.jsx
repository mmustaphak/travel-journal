import cardData from "../data.js"
import Card from "./Card.jsx"
import "./Main.css"
export default function Main(){
    const card = cardData.map(item =>{
        return (
            <Card 
                key={item.id}
                item = {item}
            />
        )
    }) 

    return(
        <main>
            {card}
        </main>
    )
}