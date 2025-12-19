import { JobCard } from './JobCard'
import styles from './JobList.module.css'

export const JobList = ({ jobOffers = [] }) => {
  return (
    <div className={styles.jobList}>
      <h2 className={styles.jobListTitle}>Resultados de búsqueda</h2>

      {jobOffers.length > 0 ? (
        jobOffers.map(jobOffer => (
          <JobCard
            key={jobOffer.id}
            jobOffer={jobOffer}
          />
        ))
      ) : (
        <p className={styles.jobListEmpty}>No se encontraron resultados</p>
      )}
    </div>
  );
};