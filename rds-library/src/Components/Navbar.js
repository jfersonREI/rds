import { Link } from "react-router-dom"

export function NavBar(){
    return (
        <>
        <Link to="/"><button>Home</button></Link>
        <Link to="/new-page"><button>To the New Page</button></Link>
        </>
    )
}