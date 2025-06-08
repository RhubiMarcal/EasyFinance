import { useEffect } from 'react'
import { useGetCategorysQuery } from '../../service/api'
import { useDispatch, useSelector } from 'react-redux'
import { setCategorys } from '../../store/reducers/user'
import { RootReducer } from '../../store'

type Props = {
  value: string
  onChange: (value: string) => void
}

const SelectCategorias = ({ value, onChange }: Props) => {
  const { data, isLoading } = useGetCategorysQuery(undefined, {
    refetchOnMountOrArgChange: true
  })
  const dispatch = useDispatch()
  const { categorys } = useSelector((state: RootReducer) => state.user)

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
