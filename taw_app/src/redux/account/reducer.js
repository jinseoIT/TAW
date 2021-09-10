import {
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER
} from "./types"

const initialState = {}
export default function accountReducer (state = initialState , action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload }
    case REGISTER_USER:
      return { ...state, register: action.payload }
    case LOGOUT_USER:
      return { ...state }
    default:
      return state
  }
}