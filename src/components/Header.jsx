import "./Header.css"
import globe from "../assets/globe.svg"
export default function Header(){
    return(
        <header>
            <img src={globe}/>
            <p>my travel journal.</p>
        </header>
    )
}