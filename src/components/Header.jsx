function Header () {
    return (
        <header className="d-flex justify-between align-center p-40">
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
        <ul className="headerRight d-flex align-center">
          <li className="mr-30">
            <img className="mr-10" src="/img/cart.svg" alt="" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/profile.svg" alt="" />
          </li>
        </ul>
      </header>
    )
}

export default Header;