const initialState = {
  movies: []
};

export const actions = {
  SET_MOVIES: 'set_movies'
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case actions.SET_MOVIES:
    return Object.assign({}, initialState, { movies: action.payload });
  default:
    return state;
  }
};

export function setMovies(movies) {
  return {
    type: actions.SET_MOVIES,
    payload: movies
  };
}

export default rootReducer;
