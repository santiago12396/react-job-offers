import { useState } from 'react'
import { JobList } from '../components/JobList'
import { Pagination } from '../components/Pagination'
import { SearchForm } from '../components/SearchForm'

import jobOffers from '../data.json'

import styles from './Search.module.css'

const ITEMS_PER_PAGE = 5;

export function SearchPage() {

  const [searchTerm, setSearchTerm] = useState('');

  const [filters, setfilters] = useState({
    technology: '',
    location: '',
    experienceLevel: ''
  });

  const [currentPage, setCurrentPage] = useState(1);

  const jobsFilteredByFilters = jobOffers.filter(jobOffer => {

    return (
      jobOffer.titulo
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&

      (!filters.technology ||
        jobOffer.data.technology.toLowerCase() === filters.technology.toLowerCase()) &&
  
      (!filters.location ||
        jobOffer.ubicacion.toLowerCase() === filters.location.toLowerCase()) &&
  
      (!filters.experienceLevel ||
        jobOffer.data.nivel.toLowerCase() === filters.experienceLevel.toLowerCase())
    );
  });

  const totalPages = Math.ceil(jobsFilteredByFilters.length / ITEMS_PER_PAGE);

  const pagedResults = jobsFilteredByFilters.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePageChange = page => {
    setCurrentPage(page);
  }

  const handleSearchChange = filters => {
    setfilters(filters);
    setCurrentPage(1);
  }

  const handleSearchTerm = searchTerm => {
    setSearchTerm(searchTerm);
    setCurrentPage(1);
  }

  return (
    <>
      <SearchForm onSearchTerm={handleSearchTerm} onSearch={handleSearchChange} />

      <main>
        <section className={styles.jobSection} >
            <JobList jobOffers={pagedResults} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </section>
      </main>
    </>
  )
}
