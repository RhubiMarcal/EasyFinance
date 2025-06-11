export const parseToBrl = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price)
}

export const filtrarTransacoesDoMes = (
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

export const getTotalGastoMes = (transacoes: Transaction[]): number => {
  const list = filtrarTransacoesDoMes(transacoes)
  return somarValoresTransacoes(list)
}

export function getCategoryIdByName(
  categories: Category[],
  name: string
): number | null {
  const category = categories.find(
    (cat) => cat.name.toLowerCase() === name.toLowerCase()
  )
  return category ? category.id : null
}
