import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>By Zyp</div>
      <div className={styles.text}>copyright Zyp</div>
    </div>
  )
}

export default Footer