import React from "react";
import Card from "../components/Card";
import AppContext from "../components/context";

function Favorites() {
  const { favorites, onAddtoFavorite } = React.useContext(AppContext);
  

  return (
    <div className="content p-45">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap justify-between">
        {favorites.map((item, index) => (
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
