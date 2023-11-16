import {inspect} from "util";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from "next/image"
const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/avatar.jpg' alt="" width={300} height={300} className={styles.imgContainerImage}></Image>
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="john Doe"/>
          
          <label>Email</label>
          <input type="email" name="email" placeholder="johnDoe@gmail.com"/>
          
          <label>Password</label>
          <input type="password" name="password" placeholder="password"/>
          
          <label>Phone</label>
          <input type="number" name="phone" placeholder="phone"/>
          
          <label>Address</label>
          <textarea name="address" id="address" placeholder="address"></textarea>
          
          <label>Is Admin</label>
          <select name="isAdmin" id="isAdmin">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          
          <label>Is Active</label>
          <select name="isActive" id="isActive">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleUserPage