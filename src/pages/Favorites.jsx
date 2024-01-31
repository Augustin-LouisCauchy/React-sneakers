import Card from "../components/Card";

function Favorites({ items, onAddtoFavorite }) {
  return (
    <div className="content p-45">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap justify-between">
        {items.map((item, index) => (
          <Card
            key={index}
            favorited={true}
            onFavorite={onAddtoFavorite}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
