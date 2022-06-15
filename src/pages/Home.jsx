import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import PizzaBlock from "../Component_JSX/PizzaBlock/PizzaBlock";

import { Categories, SortPopup } from "../Component_JSX";
import PizzaLoadingBlock from "../Component_JSX/PizzaBlock/PizzaLoadingBlock";

import { setCategory, setSortBy } from "../Redux/action/filters";
import { fetchPizzas } from "../Redux/action/pizzas";
//import { addPizzaToCart } from "../Redux/action/cart";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "Популярности", type: "popular", order: "desc" },
  { name: "Цене", type: "price", order: "desc" },
  { name: "Алфавит", type: "name", order: "asc" },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filter }) => filter);
  

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizza = (obj) => {
    dispatch({
      type: "ADD_PIZZA_CART",
      payload: obj,
    });
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                addedCount={ cartItems[obj.id] && cartItems[obj.id].items.length }
                onClickAddPizza={handleAddPizza}
               {...obj}
              />
            ))
          : Array(10)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
