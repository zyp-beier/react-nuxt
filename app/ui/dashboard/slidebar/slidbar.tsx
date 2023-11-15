import {inspect} from "util";
import styles from './slidebar.module.css'
import {MdDashboard, MdPeople, MdOutlineSettings, MdLogout} from 'react-icons/md'
import MenuLink from "@/app/ui/dashboard/slidebar/menuLink/menuLink";
import Image from "next/image";

const menuItems = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard />
      },
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: <MdPeople />
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon:  <MdPeople />
      }
    ]
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: <MdOutlineSettings />
      },
      {
        title: 'Help',
        path: '/dashboard/help',
        icon: <MdOutlineSettings />
      }
    ]
  }
]

const SlideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src="/avatar.jpg" alt="" width="50" height="50"/>
        <div className={styles.userDetail}>
          <span className={styles.username}>John joe</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map(cat => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {
              cat.list.map(item => (
                <MenuLink item={item} key={item.title}></MenuLink>
              ))
            }
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout />
        Logout</button>
    </div>
  )
}

export default SlideBar