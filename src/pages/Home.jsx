import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SecondHeader from "../components/SecondHeader.jsx";
import PizzaBlock from "../components/PizzaBlock.jsx";
import LoadingBlock from "../components/LoadingBlock.jsx";

import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

const categories = [
  { name: "Мясные", id: 1 },
  { name: "Вегетерианские", id: 2 },
  { name: "Сырные", id: 3 },
  { name: "Сладкие", id: 4 },
];

const sortFilters = [
  { filter: "популярности", type: "popularity" },
  { filter: "цене", type: "price" },
  { filter: "алфавиту", type: "name" },
];

function Home() {
  const [stickyHeader, setStickyHeader] = useState(false);

  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [dispatch, items.length, category, sortBy]);

  function onSelectCategory(id) {
    dispatch(setCategory(id));
  }

  function onSelectSortFilter(type) {
    dispatch(setSortBy(type));
  }

  function handleAddPizzaToCart(obj) {
    dispatch(addPizzaToCart(obj));
  }

  function stickIt() {
    if (window.scrollY >= 100) {
      setStickyHeader(true);
    } else {
      setStickyHeader(false);
    }
  }
  window.addEventListener("scroll", stickIt);

  return (
    <div className="container">
      <div
        className={stickyHeader ? "content__top sticky-header" : "content__top"}
      >
        <SecondHeader
          activeCategory={category}
          onClickCategory={onSelectCategory}
          categories={categories}
          activeSortFilter={sortBy}
          onClickSortFilter={onSelectSortFilter}
          sortFilters={sortFilters}
        />
      </div>
      <h2 className="content__title">
        {category ? categories[category - 1].name : "Все"} пиццы
      </h2>
      <div className="content__items">
        {isLoaded
          ? items.map((pizzaBlock) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                key={pizzaBlock.id}
                addedCount={cartItems.lentgh}
                {...pizzaBlock}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
