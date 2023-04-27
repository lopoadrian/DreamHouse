import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="navBar">
            <h2><span>D</span>ream<span>H</span>ome</h2>
            <div className="botonera">
               <a href="#">Bazar</a>
               <a href="#">Textil</a>
               <a href="#">Libros</a>
            </div>
            <CartWidget /> 
        </nav>
    )
}

export default NavBar