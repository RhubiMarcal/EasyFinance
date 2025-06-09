import { useGetCategorysQuery } from '../../service/Hooks/categoryAPI'

type Props = {
  value: string
  onChange: (value: string) => void
}

const SelectCategorias = ({ value, onChange }: Props) => {
  const { data: categorys, isLoading } = useGetCategorysQuery(undefined, {
    refetchOnMountOrArgChange: true
  })

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
        {categorys?.map((cat) => (
          <option key={cat.id} value={cat.name} />
        ))}
      </datalist>
    </>
  )
}

export default SelectCategorias
