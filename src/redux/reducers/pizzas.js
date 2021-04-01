const initialState = {
  items: [],
  isLoaded: false,
};

export default function pizzas(state = initialState, action) {
  switch (action.type) {
    case "SET_PIZZAS":
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };
    case "SET_SIZE":
      {
        const currentSize = state.items[]
          // !state.items[action.payload.id]
          // ? [action.payload]
          // : [...state.items[action.payload.id].items, action.payload];
  
        const setSize = 
        // {
        //   ...state.items,
        //   [action.payload.id]: {
        //     items: currentPizzaItems,
        //     totalPrice: getTotalPrice(currentPizzaItems),
        //   },
        // };
  
        return {
          ...state,
          items: setSize,
        };
      }
    case "SET_TYPE":
      {
        const currentType = 
          // !state.items[action.payload.id]
          // ? [action.payload]
          // : [...state.items[action.payload.id].items, action.payload];
  
        const setType = 
        // {
        //   ...state.items,
        //   [action.payload.id]: {
        //     items: currentPizzaItems,
        //     totalPrice: getTotalPrice(currentPizzaItems),
        //   },
        // };
  
        return {
          ...state,
          items: setType,
        };
      }
    case "SET_IMAGE":
      {
        const currentImage = 
          // !state.items[action.payload.id]
          // ? [action.payload]
          // : [...state.items[action.payload.id].items, action.payload];
  
        const setImage = 
        // {
        //   ...state.items,
        //   [action.payload.id]: {
        //     items: currentPizzaItems,
        //     totalPrice: getTotalPrice(currentPizzaItems),
        //   },
        // };
  
        return {
          ...state,
          items: setImage,
        };
      }
    default:
      return state;
  }
}
