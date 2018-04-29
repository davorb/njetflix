const initialState = {
  movies: []
};

export const actions = {
  SET_MOVIES: 'set_movies',
  SET_SEARCH: 'set_search'
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case actions.SET_MOVIES:
    return Object.assign({}, state, { movies: action.payload });
  case actions.SET_SEARCH:
    return Object.assign({}, state, { search: action.payload });
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

export function search(query) {
  return {
    type: actions.SET_SEARCH,
    payload: query
  };
}

export default rootReducer;
