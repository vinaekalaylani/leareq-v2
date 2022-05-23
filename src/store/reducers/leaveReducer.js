import { SET_EVENT, SET_LEAVE, SET_LEAVES, SET_HISTORY, SET_IS_ERROR, SET_IS_LOADING } from "../actionType"

const initialState = {
  leave: {},
  leaves: [],
  history: [],
  event: [],
  isError: null,
  isLoading: false
}

const leaveReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENT:
      return { ...state, event: action.payload }
    case SET_LEAVE:
      return { ...state, leave: action.payload }
    case SET_LEAVES:
      return { ...state, leaves: action.payload }
    case SET_HISTORY:
      return { ...state, history: action.payload }
    case SET_IS_ERROR:
      return { ...state, isError: action.payload }
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload }
    default:
      return state
  }
}

export default leaveReducer