import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Sort from "../components/Sort.jsx";
import Categories from "../components/Categories.jsx";
import PizzaBlock from "../components/PizzaBlock.jsx";
import LoadingBlock from "../components/LoadingBlock.jsx";

import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

const categories = [
  { name: "Мясные", id: 1 },
  { name: "Вегетерианские", id: 2 },
  { name: "Новые", id: 3 },
];

const sortFilters = [
  { filter: "популярности", type: "popularity", id: 1 },
  { filter: "цене", type: "price", id: 2 },
  { filter: "алфавиту", type: "name", id: 3 },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
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

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          categories={categories}
        />
        <Sort
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
