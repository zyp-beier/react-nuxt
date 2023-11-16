import styles from '@/app/ui/dashboard/users/addUser/addUser.module.css'

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder='username' name='username' required/>
        <input type="email" placeholder='email' name='email' required/>
        <input type="password" placeholder='password' name='password' required/>
        <input type="phone" placeholder='phone' name='phone' required/>
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

export default AddUserPage