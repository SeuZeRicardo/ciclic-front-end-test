export const FETCH_EXPRESSION_BEGIN = 'FETCH_EXPRESSION_BEGIN'
export const FETCH_EXPRESSION_SUCCESS = 'FETCH_EXPRESSION_SUCCESS'
export const FETCH_EXPRESSION_FAILURE = 'FETCH_EXPRESSION_FAILURE'
export const SAVE_FORM_DATA = 'SAVE_FORM_DATA'

const fetchInvestmentBegin = () => ({
  type: FETCH_EXPRESSION_BEGIN,
})

const fetchInvestmentSuccess = (investment) => ({
  type: FETCH_EXPRESSION_SUCCESS,
  payload: { investment },
})

const fetchInvestmentFailure = (error) => ({
  type: FETCH_EXPRESSION_FAILURE,
  payload: { error },
})

const saveFormData = (data) => ({
  type: SAVE_FORM_DATA,
  payload: { data },
})

export const saveForm = (data) => {
  return (dispatch) => {
    dispatch(saveFormData(data))
  }
}

export const fetchInvestment = (formData) => {
  const interestRate = 0.00517
  const { monthlyPayment, time } = formData
  const url = 'http://api.mathjs.org/v4/'
  const settings = {
    method: 'POST',
    body: JSON.stringify({
      expr: `${monthlyPayment} * (((1 + ${interestRate}) ^ ${time} - 1) / ${interestRate})`,
    }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  }

  return (dispatch) => {
    dispatch(fetchInvestmentBegin())
    fetch(url, settings)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error
        }
        dispatch(fetchInvestmentSuccess(res.result))
      })
      .catch((error) => {
        dispatch(fetchInvestmentFailure(error))
      })
  }
}
