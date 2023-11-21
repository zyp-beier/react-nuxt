import {inspect} from "util";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from "next/image"
import {fetchUser} from "@/app/lib/data";
import {updateUser} from "@/app/lib/actions";
// @ts-ignore
const SingleUserPage = async ({params}) => {
  const user = await fetchUser(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/avatar.jpg' alt="" width={300} height={300} className={styles.imgContainerImage}></Image>
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id}/>
          <label>Username</label>
          <input type="text" name="username" placeholder={user.username}/>
          
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email}/>
          
          <label>Password</label>
          <input type="password" name="password" placeholder="password"/>
          
          <label>Phone</label>
          <input type="number" name="phone" placeholder={user.phone}/>
          
          <label>Address</label>
          <textarea name="address" id="address" placeholder={user.address}></textarea>
          
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