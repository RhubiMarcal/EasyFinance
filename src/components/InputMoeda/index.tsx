import React from 'react'

type Props = {
  value: number
  onChange: (value: number) => void
}

const formatarParaBRL = (valor: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)

const InputMoeda = ({ value, onChange }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const somenteNumeros = e.target.value.replace(/\D/g, '')
    const valorNumerico = parseFloat(somenteNumeros) / 100 || 0
    onChange(valorNumerico)
  }

  return (
    <input
      type="text"
      inputMode="numeric"
      value={formatarParaBRL(value)}
      onChange={handleChange}
    />
  )
}

export default InputMoeda
