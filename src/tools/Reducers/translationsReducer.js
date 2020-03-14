export const translationsReducer = (state, { type, payload }) => {
  switch (type) {
    case 'BASQUE':
      return (state = payload);

    case 'ENGLISH':
      return (state = payload);

    case 'SPANISH':
      return (state = payload);

    default:
      return state;
  }
};
