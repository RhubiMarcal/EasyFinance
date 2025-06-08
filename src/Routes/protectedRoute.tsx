import { Navigate } from 'react-router-dom'
import Loader from '../components/Loader'
import { useGetMeQuery } from '../service/api'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setEmail, setName } from '../store/reducers/user'

type Props = {
  children: JSX.Element
  loader: 'padrao' | 'historico' | 'limit' | 'meta' | 'grafico'
}

const ProtectedRoute = ({ children, loader }: Props) => {
  const { data, isLoading, isError } = useGetMeQuery()
  const dispatch = useDispatch()

  useEffect(() => {
    if (data?.name) {
      dispatch(setName(data.name))
      dispatch(setEmail(data.email))
    }
  }, [data, dispatch])

  if (isLoading) return <Loader active type={loader} />
  if (isError || !data) return <Navigate to="/" />

  return children
}

export default ProtectedRoute
