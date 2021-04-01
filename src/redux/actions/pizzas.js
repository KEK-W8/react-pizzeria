import { get } from "axios";

export function setLoaded(payload) {
  return {
    type: "SET_LOADED",
    payload: payload,
  };
}

export function setPizzas(items) {
  return {
    type: "SET_PIZZAS",
    payload: items,
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

export function setSize(size) {
  return {
    type: "SET_SIZE",
    payload: size,
  };
}

export function setType(type) {
  return {
    type: "SET_TYPE",
    payload: type,
  };
}

export function setImage(image) {
  return {
    type: "SET_IMAGE",
    payload: image,
  };
}
