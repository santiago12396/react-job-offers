import styles from './JobCard.module.css'

export const JobCard = ({ jobOffer = {} }) => {
  return (
    <article className={ styles.jobCard }>
      <div className={ styles.jobCardInfo }>
        <h3>{ jobOffer.titulo }</h3>
        <small>{ jobOffer.empresa }</small>
        <p>{ jobOffer.descripcion }</p>
      </div>
      <button className={ styles.jobCardButton }>Ver oferta</button>
    </article>
  )
}
