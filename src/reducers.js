const initialState = {
  movies: [],
  search: '',
  genres: [],
  currentGenre: -1
};

const actions = {
  SET_MOVIES: 'set_movies',
  SET_SEARCH: 'set_search',
  SET_GENRES: 'set_genres',
  SET_CURRENT_GENRE: 'set_current_genre'
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case actions.SET_MOVIES:
    return Object.assign({}, state, { movies: action.payload });
  case actions.SET_SEARCH:
    return Object.assign({}, state, { search: action.payload });
  case actions.SET_GENRES:
    return Object.assign({}, state, { genres: action.payload });
  case actions.SET_CURRENT_GENRE:
    return Object.assign({}, state, { currentGenre: action.payload });
  default:
    return state;
  }
};

export function setCurrentGenre(id) {
  return {
    type: actions.SET_CURRENT_GENRE,
    payload: id
  };
}

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

export function setGenres(genres) {
  return {
    type: actions.SET_GENRES,
    payload: genres
  };
}

export default rootReducer;
