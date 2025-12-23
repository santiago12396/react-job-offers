import { Header } from './components/Header'
import { HomePage } from './pages/Home'
import { SearchPage } from './pages/Search'
import { Route } from './components/Route';


function App() {
  return (
    <>
      <Header />
      <Route path='/' component={HomePage}  />
      <Route path='/search' component={SearchPage} />
    </>
  )
}

export default App
