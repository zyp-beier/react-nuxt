import styles from './search.module.css'
import React from "react";
import { MdSearch } from 'react-icons/md'

const Search = ({placeholder}: {placeholder: React.ReactNode}) => {
  return (
    <div className={styles.container}>
      <MdSearch></MdSearch>
      <input type="text" className={styles.input}/>
    </div>
  )
}

export default Search