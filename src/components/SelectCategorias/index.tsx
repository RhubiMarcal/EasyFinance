import { useMemo } from 'react'
import { useGetCategorysQuery } from '../../service/Hooks/categoryAPI'
import { useGetGoalsQuery } from '../../service/Hooks/GoalAPI'

type Props = {
  value: string
  onChange: (value: string, goalId?: number) => void
}

const SelectCategorias = ({ value, onChange }: Props) => {
  const { data: categorys, isLoading } = useGetCategorysQuery(undefined, {
    refetchOnMountOrArgChange: true
  })

  const { data: Goals, isLoading: loadingGoal } = useGetGoalsQuery()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const label = e.target.value
    const goalId = labelToGoalId[label] ?? 0
    const categoryId = labelToCategoryId[label] ?? 0

    onChange(label, goalId || categoryId || 0)
  }

  const labelToGoalId = useMemo(() => {
    const map: Record<string, number> = {}
    Goals?.forEach((goal) => {
      map['Meta: ' + goal.name] = goal.id
    })
    return map
  }, [Goals])

  const labelToCategoryId = useMemo(() => {
    const map: Record<string, number> = {}
    categorys?.forEach((cat) => {
      map[cat.name] = cat.id
    })
    return map
  }, [categorys])

  return (
    <>
      <input
        list="categorias"
        value={value}
        onChange={handleChange}
        placeholder={
          isLoading || loadingGoal
            ? 'Carregando categorias...'
            : 'Digite ou selecione'
        }
      />
      <datalist id="categorias">
        {Goals?.map((goal) => (
          <option key={goal.id} value={'Meta: ' + goal.name}>
            Meta: {goal.name}
          </option>
        ))}
        {categorys?.map((cat) => (
          <option key={cat.id} value={cat.name} />
        ))}
      </datalist>
    </>
  )
}

export default SelectCategorias
