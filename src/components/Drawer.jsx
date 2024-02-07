import React from "react";
import Info from "./Info";
import AppContext from "./context";
import axios from "axios";

function Drawer({ onClose, onRemove, items = [] }) {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post(
        "https://65ba75c2b4d53c066552f65b.mockapi.io/orders",
        {items: cartItems}
      );
      await axios.put("https://65a7f5bf94c2c5762da80808.mockapi.io/cart", []);
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
    } catch (error) {
      alert("Не удалось создать заказ :(");
      setIsLoading(false)
    }
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина{" "}
          <img
            onClick={onClose}
            className="remove-btn cu-p"
            src="/img/btn-remove.svg"
            alt="remove"
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cart-item d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${obj.imgUrl})` }}
                    className="cart-item-img"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <strong>{obj.price} руб.</strong>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="remove-btn"
                    src="/img/btn-remove.svg"
                    alt="remove"
                  />
                </div>
              ))}
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
              <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
                Оформить заказ <img src="/img/arrow-cart.svg" alt="arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            image={
              isOrderComplete
                ? "/img/complete-order.png"
                : "/img/empty-cart.png"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
