import { JobCard } from './JobCard'

export const JobList = ({ jobOffers = [] }) => {
  return (
    <>
        <h2 className={'text-center'}>Resultados de busqueda</h2>   

        {
          jobOffers.map(jobOffer => 
            (
              <JobCard 
                key={jobOffer.id}
                jobOffer={jobOffer}
              />
            ))
        }

    </>
  )
}
