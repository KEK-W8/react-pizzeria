import { get } from "axios";

export function setLoaded(payload) {
  return {
    type: "SET_LOADED",
    payload: payload,
  };
}

export function fetchPizzas(sortBy, category) {
  return (dispatch) => {
    dispatch(setLoaded(false));
    get(
      `/pizzas?${
        category !== null ? `category=${category}` : ""
      }&_sort=${sortBy}&_order=asc`
    ).then(({ data }) => {
      dispatch(setPizzas(data));
    });
  };
}

export function setPizzas(items) {
  return {
    type: "SET_PIZZAS",
    payload: items,
  };
}
