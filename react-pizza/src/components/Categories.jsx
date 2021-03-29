import React, { memo } from "react";

function Categories({ activeCategory, categories, onClickCategory }) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {categories.map((category) => (
          <li
            onClick={() => onClickCategory(category.id)}
            className={activeCategory === category.id ? "active" : ""}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default memo(Categories);
