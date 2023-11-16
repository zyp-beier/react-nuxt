import styles from '@/app/ui/dashboard/products/addProduct/addProduct.module.css'

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder='title' name='title' required/>
        <select name="cat" id="cat">
          <option value="kitchen">Kitchen</option>
          <option value="phone">phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder='price' name='price'/>
        <input type="number" placeholder='stock' name='stock'/>
        <input type="number" placeholder='color' name='color'/>
        <input type="number" placeholder='size' name='size'/>
        <textarea name="desc" id="desc" placeholder="Description"></textarea>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  )
  
}

export default AddProductPage