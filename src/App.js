import { useQuery } from 'react-query'
import { getListOfAvailableCurrencies } from './requests'
import Main from './page/Main'
import Loader from './components/Loader'
import { Container, ErrorMessage } from './AppStyles'

function App() {
  const {
    isLoading,
    data = [],
    error,
  } = useQuery({
    queryKey: ['currencies'],
    queryFn: getListOfAvailableCurrencies,
    retry: 2,
  })

  if (error)
    return (
      <Container>
        <ErrorMessage>Something went wrong try again later</ErrorMessage>
      </Container>
    )

  if (isLoading)
    return (
      <Container>
        <Loader size='big' />
      </Container>
    )

  return (
    <Container>
      <Main data={data} />
    </Container>
  )
}

export default App
