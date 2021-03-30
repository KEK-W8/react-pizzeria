import React from "react";
import classNames from "classnames";

import Categories from "./Categories.jsx";
import Sort from "./Sort.jsx";
import CartButton from "./CartButton.jsx";

import reactLogo from "../assets/img/react-logo.png";

function SecondHeader({
  categories,
  onClickCategory,
  activeCategory,
  sortFilters,
  onClickSortFilter,
  activeSortFilter,
}) {
  return (
    <div className="content__top">
      <img width="38" className="img" src={reactLogo} alt="React logo" />
      <Categories
        activeCategory={activeCategory}
        onClickCategory={onClickCategory}
        categories={categories}
      />
      <Sort
        activeSortFilter={activeSortFilter}
        onClickSortFilter={onClickSortFilter}
        sortFilters={sortFilters}
      />
      <CartButton />
    </div>
  );
}

export default SecondHeader;
