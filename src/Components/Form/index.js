import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchInvestment, saveFormData } from '../../Store/Home/action'
import { transformMonthToYears } from '../../Helper'
import Wrapper from '../Wrapper'
import { Container, Title, Forms } from './styles'

function Form() {
  const dispatch = useDispatch()
  const { formData: userData } = useSelector((state) => state.homeReducer)
  const history = useHistory()
  const [formData, setFormData] = useState(userData)
  const [validForm, setValidForm] = useState(false)

  const optionsMonths = [0, 12, 24, 60, 120, 180, 240, 300, 360, 420, 480]

  const optionsFields = optionsMonths.map((value) => {
    const defaultValue = value === 0

    return (
      <option key={value} value={value} disabled={defaultValue}>
        {defaultValue
          ? 'Selecione uma mensalidade'
          : transformMonthToYears(value)}
      </option>
    )
  })

  useEffect(() => {
    const validateForm = () => {
      const isValid = !Object.values(formData).every(
        (key) => key !== null && key !== '' && key !== 0
      )
      setValidForm(isValid)
    }

    validateForm()
  }, [formData])

  const handleChange = (event) => {
    event.preventDefault()
    const { target } = event
    const { value, name } = target

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(fetchInvestment(formData))
    dispatch(saveFormData(formData))
    history.push('/result')
  }
  return (
    <Container>
      <Wrapper>
        <Title>Simulador</Title>
        <Forms onSubmit={handleSubmit}>
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Insira o seu nome"
            />
          </label>
          <label htmlFor="monthlyPayment">
            Mensalidade:
            <input
              type="number"
              name="monthlyPayment"
              onChange={handleChange}
              placeholder="Insira um valor"
            />
          </label>
          <label htmlFor="time">
            Tempo:
            <select name="time" value={formData.time} onChange={handleChange}>
              {optionsFields}
            </select>
          </label>
          <input type="submit" value="Enviar" disabled={validForm} />
        </Forms>
      </Wrapper>
    </Container>
  )
}

export default Form
