export const transformMonthToYears = (months) => {
  return `${months / 12} anos`
}

export const validateKeyValue = (obj) => {
  return !Object.values(obj).every(
    (key) => key !== null && key !== '' && key !== 0
  )
}

export const transformValueCurrency = (value) => {
  value = parseFloat(value)
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
