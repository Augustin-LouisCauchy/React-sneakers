import Card from "../components/Card";

function Favorites({ items }) {
  return (
    <div className="content p-45">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap justify-between">
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            price={item.price}
            imgUrl={item.imgUrl}
            favorited={true}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
