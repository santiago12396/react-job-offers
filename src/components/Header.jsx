import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.navbar}>
        <p>JOBS</p>
        <nav>
            <a href="">Inicio</a>
            <a href="">Jobs</a>
            <a href="">About us</a>
        </nav>
    </header>
  )
}
