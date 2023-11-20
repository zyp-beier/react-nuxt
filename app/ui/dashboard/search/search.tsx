"use client"
import styles from './search.module.css'
import React from "react";
import { MdSearch } from 'react-icons/md'
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = ({placeholder}: {placeholder: React.ReactNode}) => {
  const searchParams = useSearchParams()
  const {replace} = useRouter()
  const pathname = usePathname()
  
  const handleSearch = useDebouncedCallback((e: any) => {
    const params = new URLSearchParams(searchParams)
    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value)
    } else {
      params.delete("q")
    }
    
    replace(`${pathname}?${params}`)
  }, 500)
  
  
  return (
    <div className={styles.container}>
      <MdSearch></MdSearch>
      <input type="text" className={styles.input} onChange={handleSearch}/>
    </div>
  )
}

export default Search