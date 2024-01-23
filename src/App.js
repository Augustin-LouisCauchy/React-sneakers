import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://65a7f5bf94c2c5762da80808.mockapi.io/items").then((res) => {
      return res.json();
    }).then((json) => {
      return setItems(json)
    })
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }
  
  console.log(cartItems)

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose = {() => setCartOpened(false)}/>}
      <Header onClickCart = {() => setCartOpened(true)}/>
      <div className="content p-45">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap justify-between">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              onFavorite={() => console.log("добавили закладку")}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
          {/*<div className="card">
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
          </div>*/}

          {/*<div className="card">
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
          </div>*/}
        </div>
      </div>
    </div>
  );
}

export default App;
