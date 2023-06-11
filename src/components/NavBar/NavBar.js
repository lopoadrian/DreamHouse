import { NavLink , Link} from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="navBar">
            <Link to= '/' className="navBar-inicio">
                <h2><span>D</span>ream<span>H</span>ome</h2>
            </Link>
            <div className="botonera">
               <NavLink to={`/category/bazar`} className={'botonera-bazar'} >Bazar</NavLink>
               <NavLink to={`/category/textil`} className={'botonera-textil'} >Textil</NavLink>
               <NavLink to={`/category/libros`} className={'botonera-libros'} >Libros</NavLink>
            </div>
            <CartWidget /> 
        </nav>
    )
}

export default NavBar