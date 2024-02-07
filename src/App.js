import React from "react";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./components/context";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
     const itemsResponse = await axios.get("https://65a7f5bf94c2c5762da80808.mockapi.io/items");
     const cartResponse = await axios.get("https://65a7f5bf94c2c5762da80808.mockapi.io/cart");
     const favoriteResponse = await axios.get("https://65ba75c2b4d53c066552f65b.mockapi.io/favorite");
      
      setIsLoading(false);
      
      setCartItems(cartResponse.data);
      setFavorites(favoriteResponse.data);
      setItems(itemsResponse.data)      
    }
    fetchData()
  }, []);

  const onAddToCart = (obj) => {
    console.log(obj)
    if(cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://65a7f5bf94c2c5762da80808.mockapi.io/cart/${obj.id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    } else {
      axios.post("https://65a7f5bf94c2c5762da80808.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
    
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://65a7f5bf94c2c5762da80808.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
  };

  const onAddToFavorite = async (obj) => {
   try {
     if(favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
       axios.delete(`https://65ba75c2b4d53c066552f65b.mockapi.io/favorite/${obj.id}`);
       setFavorites((prev) => prev.filter((item) => Number(item.id) === Number(obj.id)))
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

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id))
  }

  return (
    <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, onAddToFavorite, setCartOpened, setCartItems}}>
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
              cartItems={cartItems  }
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
            />
          }
        ></Route>
        
      </Routes>

      <Routes>
        <Route exact path="/favorites" element={<Favorites/>}></Route>
      </Routes>
    </div>
    </AppContext.Provider>
  );
}

export default App;
