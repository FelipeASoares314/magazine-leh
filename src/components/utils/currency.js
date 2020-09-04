export const formatBRL = input => {
  const cash = parseFloat(input);

  if (isNaN(cash)) {
    return 'R$ 0,00';
  }

  const formatedCash = cash.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  })

  return formatedCash
}