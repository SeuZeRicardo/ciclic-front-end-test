import {
  FETCH_EXPRESSION_BEGIN,
  FETCH_EXPRESSION_SUCCESS,
  FETCH_EXPRESSION_FAILURE,
} from '../action'

const initialState = {
  amount: 0,
  formData: { name: null, monthlyPayment: null, time: 0 },
  isFetching: false,
  error: null,
}

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXPRESSION_BEGIN:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_EXPRESSION_SUCCESS:
      return { ...state, amount: action.payload.investment, isFetching: false }
    case FETCH_EXPRESSION_FAILURE:
      return { ...state, isFetching: false, error: true }
    default:
      return state
  }
}
