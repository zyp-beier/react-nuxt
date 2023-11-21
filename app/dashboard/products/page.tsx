import Search from "@/app/ui/dashboard/search/search";
import styles from '@/app/ui/dashboard/products/products.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import {fetchProducts} from "@/app/lib/data";
import {deleteProduct} from "@/app/lib/actions";
// @ts-ignore
const Products = async ({searchParams}) => {
  const q = searchParams?.q || ''
  const page = searchParams?.page || 1
  const {count, products} = await fetchProducts(q, page)
  
  console.log(products, 8888)
  
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
        {
          products.map(item => (
            <tr key={item.title}>
              <td>
                <div className={styles.user}>
                  <Image src="/avatar.jpg" alt="" width={40} height={40} className={styles.userImage} />
                  {item.title}
                </div>
              </td>
              <td>{item.desc}</td>
              <td>{item.price}</td>
              <td>{item.price}</td>
              <td>{item.number}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${item.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={item.id}/>
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
      <Pagination count={count}></Pagination>
    </div>
  )
}

export default Products