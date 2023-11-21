import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from "next/image"
import {fetchProduct} from "@/app/lib/data";
import {useRouter} from "next/navigation";
import {updateProduct} from "@/app/lib/actions";
// @ts-ignore
const SingleProductPage = async ({params}) => {
  const detail = await fetchProduct(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/noavatar.jpg' alt="" width={300} height={300} className={styles.imgContainerImage}></Image>
        </div>
        {detail.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={detail.id}/>
          <label>Title</label>
          <input type="text" name="title" placeholder={detail.title}/>
          
          <label>Desc</label>
          <input type="desc" name="desc" placeholder={detail.desc}/>
          
          <label>Price</label>
          <input type="numnber" name="price" placeholder={detail.price}/>
          
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