import SlideBar from "@/app/ui/dashboard/slidebar/slidbar";
import Navbar from "@/app/ui/dashboard/navbar/navbar";
import React from "react";
import styles from "@/app/ui/dashboard/dashboard.module.css"
import Footer from "@/app/ui/dashboard/footer/footer";

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <SlideBar></SlideBar>
      </div>
      <div className={styles.content}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Layout