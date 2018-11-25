export const places = (state = [], action) => {
  switch (action.type) {
    case "ADD_PLACE":
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          latlng: action.latlng,
          dist: action.dist,
          place: action.place
        }
      ];
    case "POPULATE_PLACES":
      return [...state, ...action.newTodoList];
    case "PLACE_NAME":
      return [...state, ...action.newTodoList];
    case "SHOW_TEXTINPUT":
      return {
        ...state,
        textinput: !action.textinput
      };
    default:
      return state;
  }
};
export const textinput = (state = false, action) => {
  switch (action.type) {
    case "SHOW_TEXTINPUT":
      return {
        ...state,
        textinput: !action.textinput
      };
    default:
      return state;
  }
};

// export default places;
