import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from "next/image"
const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/noavatar.jpg' alt="" width={300} height={300} className={styles.imgContainerImage}></Image>
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="title"/>
          
          <label>Desc</label>
          <input type="desc" name="desc" placeholder="desc"/>
          
          <label>Price</label>
          <input type="numnber" name="price" placeholder="price"/>
          
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

export default SingleProductPage