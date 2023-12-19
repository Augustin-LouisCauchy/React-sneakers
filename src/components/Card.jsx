function Card ({}) {
    return (
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
    );
}

export default Card;