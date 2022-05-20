import { SET_USER_LOGIN, SET_USERS, SET_USER, SET_LEVEL, SET_INITIAL, SET_IS_ERROR, SET_IS_LOADING } from "../actionType"

const initialState = {
  userLogin: {},
  user: {},
  users: [],
  level: 0,
  initial: null,
  isError: null,
  isLoading: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LOGIN:
      return { ...state, userLogin: action.payload }
    case SET_USER:
      return { ...state, user: action.payload }
    case SET_USERS:
      return { ...state, users: action.payload }
    case SET_LEVEL:
      return { ...state, level: action.payload }
    case SET_INITIAL:
      return { ...state, initial: action.payload }
    case SET_IS_ERROR:
      return { ...state, isError: action.payload }
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload }
    default:
      return state
  }
}

export default userReducer