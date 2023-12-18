function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина{" "}
          <img
            className="remove-btn cu-p"
            src="/img/btn-remove.svg"
            alt="remove"
          />
        </h2>

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

        <div className="cart-total-block">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <strong>21 498 руб.</strong>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <strong>1074 руб.</strong>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow-cart.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
