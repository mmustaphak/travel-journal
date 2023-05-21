import "./Card.css"
export default function Card(){
    return(
        <div className="Card">
            <img src="https://source.unsplash.com/WLxQvbMyfas" className="Card--image"/>
            <div>
                <div>
                    <img src="src/assets/pin.svg"/>
                    <p>JAPAN</p>
                    <u>View on Google Maps</u>
                </div>
                <h2>Mount Fuji</h2>
                <strong>12 Jan, 2021 - 24 Jan, 2021</strong>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776<br/>meters (12,380 feet). Mount Fuji is the single most popular tourist<br/>site in Japan, for both Japanese and foreign tourists.</p>
            </div>
            <hr/>
        </div>
    )
}