const initiaState = {
  heroes: [],
  comics: [],
};

export const Reducer = (state = initiaState, action) => {
  switch (action.type) {
    case "MORE_HEROES":
      return {
        ...state,
        heroes: action.payload.heroes,
      };
    case "MORE_COMICS":
      return {
        ...state,
        comics: action.payload.comics,
      };
    default:
      return state;
  }
};
