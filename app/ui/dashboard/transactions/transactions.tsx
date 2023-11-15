import styles from './transactions.module.css'
import Image from "next/image";


const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>State</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.user}>
              <Image src="/noavatar.jpg" alt="" width={40} height={40} className={styles.userImage} />
              John Doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>12.34.3432</td>
            <td>$12.33</td>
          </tr>
          <tr>
            <td className={styles.user}>
              <Image src="/noavatar.jpg" alt="" width={40} height={40} className={styles.userImage} />
              John Doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>12.34.3432</td>
            <td>$12.33</td>
          </tr>
          <tr>
            <td className={styles.user}>
              <Image src="/noavatar.jpg" alt="" width={40} height={40} className={styles.userImage} />
              John Doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>12.34.3432</td>
            <td>$12.33</td>
          </tr>
          <tr>
            <td className={styles.user}>
              <Image src="/noavatar.jpg" alt="" width={40} height={40} className={styles.userImage} />
              John Doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>12.34.3432</td>
            <td>$12.33</td>
          </tr>
          <tr>
            <td className={styles.user}>
              <Image src="/noavatar.jpg" alt="" width={40} height={40} className={styles.userImage} />
              John Doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>12.34.3432</td>
            <td>$12.33</td>
          </tr>
          <tr>
            <td className={styles.user}>
              <Image src="/noavatar.jpg" alt="" width={40} height={40} className={styles.userImage} />
              John Doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>12.34.3432</td>
            <td>$12.33</td>
          </tr>
        </tbody>
        
      </table>
    </div>
  )
}

export default Transactions