import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useGetCategorysQuery } from '../../service/Hooks/categoryAPI'
import { setCategorys } from '../../store/slices/categorySlice'

type Props = {
  value: string
  onChange: (value: string) => void
}

const SelectCategorias = ({ value, onChange }: Props) => {
  const { data, isLoading } = useGetCategorysQuery(undefined, {
    refetchOnMountOrArgChange: true
  })
  const dispatch = useDispatch()
  const { categorys } = useSelector((state: RootReducer) => state.categories)

  useEffect(() => {
    if (data) {
      dispatch(setCategorys(data))
    }
  }, [data, dispatch])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <>
      <input
        list="categorias"
        value={value}
        onChange={handleChange}
        placeholder={
          isLoading ? 'Carregando categorias...' : 'Digite ou selecione'
        }
      />
      <datalist id="categorias">
        {categorys.map((cat) => (
          <option key={cat.id} value={cat.name} />
        ))}
      </datalist>
    </>
  )
}

export default SelectCategorias
