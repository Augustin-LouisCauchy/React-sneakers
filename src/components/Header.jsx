import { Link } from "react-router-dom";

function Header (props) {
    return (
        <header className="d-flex justify-between align-center p-40">
        <Link to="/">
        <div className="headerLeft d-flex align-center">
          <img
            className="mr-15"
            width={40}
            height={40}
            src="/img/logo-2.png"
            alt=""
          />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кросовок</p>
          </div>
        </div>
        </Link>
        <ul className="headerRight d-flex align-center">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img className="mr-10" src="/img/cart.svg" alt="Cart" />
            <span>1205 руб.</span>
          </li>
          <li className="mr-30 cu-p">
           <Link to="/favorites">
            <img width={18} height={18} src="/img/favorite.svg" alt="favorite" />
            </Link>
          </li>
          <li>
            <img width={18} height={18} src="/img/profile.svg" alt="Profile" />
          </li>
        </ul>
      </header>
    )
}

export default Header;