import { JobCard } from './JobCard'

export const JobList = ({ jobOffers = [] }) => {
  return (
    <>
      <h2 className="text-center">Resultados de búsqueda</h2>

      {jobOffers.length > 0 ? (
        jobOffers.map(jobOffer => (
          <JobCard
            key={jobOffer.id}
            jobOffer={jobOffer}
          />
        ))
      ) : (
        <p className="text-center">No se encontraron resultados</p>
      )}
    </>
  );
};