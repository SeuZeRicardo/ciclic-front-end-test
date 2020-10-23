import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { transformMonthToYears, transformValueCurrency } from '../../Helper'
import Header from '../../Components/Header'
import Message from '../../Components/Message'
import RepeatButton from '../../Components/RepeatButton'

function Result() {
  const {
    amount,
    error,
    formData: { name, monthlyPayment, time },
    isFetching,
  } = useSelector((state) => state.homeReducer)

  const [messageText, setMessageText] = useState(
    'Ainda não temos os dados de simulação, clique no botão abaixo e faça a sua simulação'
  )

  useEffect(() => {
    if (isFetching) {
      setMessageText('Carregando dados, favor aguardar')
    }
  }, [isFetching])

  useEffect(() => {
    if (error) {
      setMessageText(
        'Tivemos um problema nos nossos sistemas, tente novamente mais tarde'
      )
    }
  }, [error])

  useEffect(() => {
    if (amount) {
      setMessageText(
        `Olá ${name}, juntando ${transformValueCurrency(
          monthlyPayment
        )}, todo mês, você terá ${transformValueCurrency(
          amount
        )} em ${transformMonthToYears(time)}`
      )
    }
  }, [amount, name, monthlyPayment, time])

  return (
    <>
      <Header />
      <Message text={messageText} />
      <RepeatButton />
    </>
  )
}

export default Result
