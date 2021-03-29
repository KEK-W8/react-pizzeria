export function setSortBy({ type }) {
  return {
    type: "SET_SORT_BY",
    payload: type,
  };
}

export function setCategory(ctgId) {
  return {
    type: "SET_CATEGORY",
    payload: ctgId,
  };
}
