import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav>
            <h1>Filin Ecommerce</h1>
            <div>
                <button>Coaching</button>
                <button>Plantas</button>
                <button>Objetos</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar