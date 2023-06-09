/* eslint-disable react/prop-types */
import "./Card.css"
import pin from "../assets/pin.svg"
export default function Card(props){
    console.log(props)
    return(
        <div className="Card">
            <img src={props.item.url} className="Card--image"/>
            <div>
                <div>
                    <img src={pin}/>
                    <p>{props.item.country}</p>
                    <u>View on Google Maps</u>
                </div>
                <h2>{props.item.location}</h2>
                <strong>{props.item.date}</strong>
                <p>{props.item.description}</p>
            </div>
            <hr/>
        </div>
    )
}