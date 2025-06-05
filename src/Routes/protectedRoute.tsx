import { Navigate } from 'react-router-dom'
import Loader from '../components/Loader'
import { useGetMeQuery } from '../service/api'

type Props = {
  children: JSX.Element
}

const ProtectedRoute = ({ children }: Props) => {
  const { data, isLoading, isError } = useGetMeQuery()

  if (isLoading) return <Loader active type="padrao" />
  if (isError || !data) return <Navigate to="/" />

  return children
}

export default ProtectedRoute
