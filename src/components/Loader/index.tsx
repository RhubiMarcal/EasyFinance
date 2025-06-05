import LoaderGraficos from '../../assets/gif/loaderGraficos.gif'
import LoaderMetas from '../../assets/gif/loaderMetas.gif'
import LoaderLimit from '../../assets/gif/loaderLimite.gif'
import Loaderhistorico from '../../assets/gif/loaderHistorico.gif'
import LoaderPadrão from '../../assets/gif/loading.gif'
import { LoaderContainer } from './styles'

type Props = {
  type: 'padrao' | 'historico' | 'limit' | 'meta' | 'grafico'
  active: boolean
}

type Loaders = {
  type: 'padrao' | 'historico' | 'limit' | 'meta' | 'grafico'
  img: string
}

const LoadersList: Loaders[] = [
  {
    type: 'padrao',
    img: LoaderPadrão
  },
  {
    type: 'grafico',
    img: LoaderGraficos
  },
  {
    type: 'historico',
    img: Loaderhistorico
  },
  {
    type: 'limit',
    img: LoaderLimit
  },
  {
    type: 'meta',
    img: LoaderMetas
  }
]

const Loader = ({ type, active }: Props) => {
  const loader = LoadersList.find((m) => m.type === type)

  if (active) {
    return (
      <LoaderContainer>
        {loader && <img src={loader.img} alt={type} />}
      </LoaderContainer>
    )
  } else {
    return <></>
  }
}

export default Loader
