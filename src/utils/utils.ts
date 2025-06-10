export const parseToBrl = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price)
}

export const filtrarTransacoesDoMes = (
  categoria: string,
  historicoData: Transaction[]
): Transaction[] => {
  const agora = new Date()
  const mesAtual = agora.getMonth()
  const anoAtual = agora.getFullYear()

  return (
    historicoData?.filter((t) => {
      const [ano, mes, dia] = t.date.split('-').map(Number)
      const data = new Date(ano, mes - 1, dia)
      return (
        t.category === categoria &&
        t.type === 'gasto' &&
        data.getMonth() === mesAtual &&
        data.getFullYear() === anoAtual
      )
    }) || []
  )
}

export const filtrarPorCategoria = (
  categoria: string,
  historicoData: Transaction[]
): Transaction[] => {
  return historicoData?.filter((t) => t.category === categoria) || []
}

export const somarValoresTransacoes = (transacoes: Transaction[]): number => {
  return transacoes.reduce((acc, t) => acc + t.value, 0)
}

export const calcPercent = (
  value: number,
  totalCategoriaMes: number
): number => {
  const percent = (totalCategoriaMes / value) * 100
  return Math.round(percent)
}

export const getTotalGastoMes = (
  transacoes: Transaction[],
  categoria: string
): number => {
  const list = filtrarTransacoesDoMes(categoria, transacoes)
  return somarValoresTransacoes(list)
}
