import { JobCard } from './JobCard'

import styles from './JobList.module.css'


export const JobList = () => {
  return (
    <>
        <h2 className={'text-center'}>Resultados de busqueda</h2>   
        <div className={ styles.jobList }>
            <JobCard />
        </div>
    </>
  )
}
