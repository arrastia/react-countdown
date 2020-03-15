export const notificationReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD':
      return {
        ...state,
        toShow: [...state.toShow, payload],
        all: [...state.all, payload]
      };
    case 'READ':
      return {
        ...state,
        toShow: [...state.toShow, payload],
        all: [...state.all, payload]
      };
    case 'REMOVE':
      return {
        toShow: [...state.toShow, payload],
        all: [...state.all, payload]
      };
    case 'CLEAR_TO_SHOW':
      return {
        ...state,
        toShow: []
      };
    case 'DESTROY':
      return {
        ...state,
        toShow: [],
        all: []
      };

    default:
      return state;
  }
};
