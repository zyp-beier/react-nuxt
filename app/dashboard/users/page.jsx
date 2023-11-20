import Search from "@/app/ui/dashboard/search/search";
import styles from '@/app/ui/dashboard/users/users.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import {fetchUsers} from "@/app/lib/data";
const usersPage = async ({searchParams}) => {
  const q = searchParams?.q || ''
  const users = await fetchUsers(q)
  
  // @ts-ignore
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='search for a user ...'></Search>
        <Link href="/dashboard/users/add">
          <button className={styles.addButton} style={{
            padding: '10px',
            background: '#5d57c9',
            color: 'var(--text)',
            border: "none",
            borderRadius: '5px',
            cursor: 'pointer',
          }}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
        {users.map(user => {
            return (
              <tr key={user.id}>
                <td>
                  <div className={styles.user}>
                    <Image src={user.img || "/avatar.jpg"} alt="" width={40} height={40} className={styles.userImage} />
                    {user.username}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.isAdmin ? 'Admin' : 'no'}</td>
                <td>{user.isActive ? 'Active' : 'no'}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/users/${user.id}`}>
                      <button className={`${styles.button} ${styles.view}`}>View</button>
                    </Link>
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </div>
                
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
      <Pagination></Pagination>
    </div>
  )
}

export default usersPage