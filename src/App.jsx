import { useState } from 'react'
import { Header } from './components/Header'
import { JobList } from './components/JobList'
import { Pagination } from './components/Pagination'

import jobOffers from './data.json'

import styles from './App.module.css'

const ITEMS_PER_PAGE = 5;

function App() {

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(jobOffers.length / ITEMS_PER_PAGE);

  const pagedResults = jobOffers.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePageChange = value => {
    setCurrentPage(value);
  }

  return (
    <>
      <Header />

      <main>
        <h1 className={`text-center ${styles.title}`}>Ofertas de trabajo!</h1>
        <section className={styles.jobSection} >
            <JobList jobOffers={pagedResults} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </section>
      </main>


      {/* Footer */}
    </>
  )
}

export default App
