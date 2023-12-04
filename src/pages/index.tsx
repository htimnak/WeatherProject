import Image from 'next/image'
import { Inter } from 'next/font/google'
import Weather from "@/components/weather/Weather"

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-stone-200 ${inter.className}`}
    >
     <Weather city={"tehran"}/>
    </main>
  )
}
