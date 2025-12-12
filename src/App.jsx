import { Header } from './components/Header'
import { JobList } from './components/JobList'
import { Pagination } from './components/Pagination'

import styles from './App.module.css'

function App() {
  return (
    <>
      <Header />

      <main>
        <h1 className={`text-center ${styles.title}`}>Ofertas de trabajo!</h1>
        <section className={styles.jobSection} >
            <JobList />
            <Pagination />
        </section>
      </main>


      {/* Footer */}
    </>
  )
}

export default App
