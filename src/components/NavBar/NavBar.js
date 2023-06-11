import { NavLink , Link} from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="navBar">
            <Link to= '/'>
                <h2><span>D</span>ream<span>H</span>ome</h2>
            </Link>
            <div className="botonera">
               <NavLink to={`/category/bazar`} >Bazar</NavLink>
               <NavLink to={`/category/textil`} >Textil</NavLink>
               <NavLink to={`/category/libros`} >Libros</NavLink>
            </div>
            <CartWidget /> 
        </nav>
    )
}

export default NavBar