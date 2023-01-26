import { func } from "prop-types"
import { ImWink, ImTongue, ImShocked } from "react-icons/im"
import Button from "../components/Button"

function ButtonPage() {
    const handleClick = () => {
        console.log("Click")
    }

    return (<div>
        <div><Button success rounded outline className="mb-5" onClick={handleClick}><ImWink />Click me</Button></div>
        <div><Button primary rounded >Add to cart</Button></div>
        <div><Button rounded ><ImTongue />Buy now</Button></div>
        <div><Button warning ><ImShocked />Wishlist</Button></div>
        <div><Button danger rounded>Hide adds</Button></div>
        <div><Button secondary rounded>Smth</Button></div>
    </div>)
}

export default ButtonPage