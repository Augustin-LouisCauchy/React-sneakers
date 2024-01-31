import React from "react";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://65a7f5bf94c2c5762da80808.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://65a7f5bf94c2c5762da80808.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
      axios
      .get("https://65ba75c2b4d53c066552f65b.mockapi.io/favorite")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    console.log(obj)
    if(cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
    } else {
      axios.post("https://65a7f5bf94c2c5762da80808.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
    
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://65a7f5bf94c2c5762da80808.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
   try {
     if(favorites.find((favObj) => favObj.id === obj.id)) {
       axios.delete(`https://65ba75c2b4d53c066552f65b.mockapi.io/favorite/${obj.id}`);
     } else {
       const { data } = await axios.post("https://65ba75c2b4d53c066552f65b.mockapi.io/favorite", obj)
       setFavorites((prev) => [...prev, data]);
     }
   } catch (error) {
      alert("Не удалось добавить в фавориты")
   }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        ></Route>
      </Routes>

      <Routes>
        <Route exact path="/favorites" element={<Favorites items={favorites} onAddtoFavorite={onAddToFavorite}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
