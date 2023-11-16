import Search from "@/app/ui/dashboard/search/search";
import styles from '@/app/ui/dashboard/products/products.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Pagination from "@/app/ui/dashboard/pagination/pagination";
const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='search for a product ...'></Search>
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
        <tr>
          <td>Product</td>
          <td>desc</td>
          <td>Created At</td>
          <td>price</td>
          <td>Status</td>
          <td>Action</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <div className={styles.user}>
              <Image src="/avatar.jpg" alt="" width={40} height={40} className={styles.userImage} />
              John Doe
            </div>
          </td>
          <td>john@gmail.com</td>
          <td>13.495.333</td>
          <td>Admin</td>
          <td>active</td>
          <td>
            <div className={styles.buttons}>
              <Link href="/dashboard/products/test">
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>
                Delete
              </button>
            </div>
          
          </td>
        </tr>
        </tbody>
      
      </table>
      <Pagination></Pagination>
    </div>
  )
}

export default Products