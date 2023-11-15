'use client'
import Image from 'next/image'
import {useRouter} from "next/navigation";
import RootLayout from "@/app/layout";

export default function Home() {
  const router = useRouter()
  return (
    <main>
      <div>
        RootLayout
      </div>
    </main>
  )
}
