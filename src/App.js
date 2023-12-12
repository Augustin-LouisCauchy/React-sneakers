function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30">Корзина</h2>

          <div className="items">
            <div className="cart-item d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/boots/nike-2.png)" }}
                className="cart-item-img"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <strong>12 999 руб.</strong>
              </div>
              <img
                className="remove-btn"
                src="/img/btn-remove.svg"
                alt="remove"
              />
            </div>
            <div className="cart-item d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/boots/nike-4.png)" }}
                className="cart-item-img"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <strong>12 999 руб.</strong>
              </div>
              <img
                className="remove-btn"
                src="/img/btn-remove.svg"
                alt="remove"
              />
            </div>
            
          </div>

          <ul className="cart-total-block">
            <li className="d-flex">
              <span>Итого:</span>
              <div></div>
              <strong>21 498 руб.</strong>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div></div>
              <strong>1074 руб.</strong>
            </li>
          </ul>
        </div>
      </div>

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
      <div className="content p-45">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap justify-center">
          <div className="card">
            <div className="favorite">
              <img src="/img/pre-like.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="/img/boots/nike-1.png" alt="" />
            <h5>
              Мужские Кроссовки
              <br /> Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>15 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus-1.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/boots/nike-2.png" alt="" />
            <h5>
              Мужские Кроссовки
              <br /> Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>15 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus-1.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/boots/nike-3.png" alt="" />
            <h5>
              Мужские Кроссовки
              <br /> Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>15 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus-1.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/boots/nike-4.png" alt="" />
            <h5>
              Мужские Кроссовки
              <br /> Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>15 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus-1.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/boots/nike-5.png" alt="" />
            <h5>
              Мужские Кроссовки
              <br /> Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>15 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus-1.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/boots/nike-6.png" alt="" />
            <h5>
              Мужские Кроссовки
              <br /> Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>15 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus-1.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/boots/nike-7.png" alt="" />
            <h5>
              Мужские Кроссовки
              <br /> Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>15 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus-1.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/boots/nike-8.png" alt="" />
            <h5>
              Мужские Кроссовки
              <br /> Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>15 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus-1.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/boots/nike-9.jpg" alt="" />
            <h5>
              Мужские Кроссовки
              <br /> Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>15 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus-1.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/boots/nike-10.jpg" alt="" />
            <h5>
              Мужские Кроссовки
              <br /> Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>15 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus-1.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/boots/nike-1.png" alt="" />
            <h5>
              Мужские Кроссовки
              <br /> Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>15 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus-1.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/boots/nike-2.png" alt="" />
            <h5>
              Мужские Кроссовки
              <br /> Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>15 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus-1.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
