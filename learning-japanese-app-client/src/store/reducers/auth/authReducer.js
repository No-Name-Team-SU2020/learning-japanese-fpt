const initialState = {
  isAuthenticated: false,
  token: null,
  loading: false,
  error: null,
  role: 'student'
}

const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type)
  {
    default: return state;
  }
}

export default reducer;