import { useEffect, useRef, useState } from 'react'
import { FilterContainer } from './styles'
import Error from '../Error'

type Props = {
  categorys: Category[]
  onChange: (filtros: Filters) => void
  hasCategory?: boolean
  hasDate?: boolean
}

export type Filters = {
  categoryAtivo?: boolean
  categoria?: string
  dateAtivo?: boolean
  inicio?: string
  fim?: string
}

const Filter = ({ categorys, onChange, hasCategory, hasDate }: Props) => {
  const [useCategoryFilter, setUseCategoryFilter] = useState(false)
  const [useDateFilter, setUseDateFilter] = useState(false)
  const [categoryFilter, setCategoryFilter] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const prevFiltros = useRef<string>('')

  const today = new Date().toISOString().split('T')[0]

  const isEndBeforeStart = startDate && endDate && endDate < startDate

  useEffect(() => {
    const filtrosAtuais = JSON.stringify({
      categoryAtivo: useCategoryFilter,
      categoria: categoryFilter,
      dateAtivo: useDateFilter,
      inicio: startDate,
      fim: endDate
    })

    if (prevFiltros.current !== filtrosAtuais) {
      prevFiltros.current = filtrosAtuais
      onChange(JSON.parse(filtrosAtuais))
    }
  }, [
    useCategoryFilter,
    categoryFilter,
    useDateFilter,
    startDate,
    endDate,
    onChange
  ])

  return (
    <FilterContainer>
      {hasCategory && (
        <div>
          <label>
            <input
              type="checkbox"
              checked={useCategoryFilter}
              onChange={() => setUseCategoryFilter(!useCategoryFilter)}
            />
            <p>Filtrar por categoria:</p>
          </label>

          <select
            id="filterCategory"
            name="filterCategory"
            disabled={!useCategoryFilter}
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categorys.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {hasDate && (
        <div>
          <label>
            <input
              type="checkbox"
              checked={useDateFilter}
              onChange={() => setUseDateFilter(!useDateFilter)}
            />
            <p>Filtrar por período:</p>
          </label>

          <div>
            <label htmlFor="FilterDateStart">
              <p>De:</p>{' '}
            </label>
            <input
              type="date"
              id="FilterDateStart"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              disabled={!useDateFilter}
              max={today}
            />

            <label htmlFor="FilterDateEnd">
              <p>Até:</p>{' '}
            </label>
            <input
              type="date"
              id="FilterDateEnd"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              disabled={!useDateFilter}
              max={today}
              min={startDate || undefined}
            />

            {isEndBeforeStart && (
              <Error msg="Data final não pode ser antes da inicial." />
            )}
          </div>
        </div>
      )}
    </FilterContainer>
  )
}

export default Filter
