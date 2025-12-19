import { useRouter } from './hooks/useRouter'
import { Header } from './components/Header'
import { HomePage } from './pages/Home'
import { SearchPage } from './pages/Search'


function App() {
  const { currentPath } = useRouter();

  return (
    <>
      <Header />
      { currentPath === '/' && <HomePage /> }
      { currentPath === '/search' && <SearchPage /> }
    </>
  )
}

export default App
