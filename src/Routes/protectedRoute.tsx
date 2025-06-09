import { Navigate } from 'react-router-dom'
import Loader from '../components/Loader'
import { useGetMeQuery } from '../service/Hooks/userAPI'

type Props = {
  children: JSX.Element
  loader: 'padrao' | 'historico' | 'limit' | 'meta' | 'grafico'
}

const ProtectedRoute = ({ children, loader }: Props) => {
  const { data, isLoading, isError } = useGetMeQuery()

  if (isLoading) return <Loader active type={loader} />
  if (isError || !data) return <Navigate to="/" />

  return children
}

export default ProtectedRoute
