import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter();

  return (
    <section>
      <Head>
        <title>Welcome</title>
      </Head>
      <div className="bg-zinc-900 w-screen h-screen">
        <div className="flex flex-col min-h-screen justify-center items items-center mr-[45vw]">
          <h1 className="font-poppins font-bold text-slate-100 align-left w-[790px] text-5xl z-10 my-4">Welcome to the
            <span className="text-fuchsia-300"> one</span> and
            <span className="text-fuchsia-300"> only</span> good cell phone market browser
          </h1>
          <h2 className="font-poppins font-bold text-slate-100 align-left w-[794px] text-2xl z-10 my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum ullamcorper est ut euismod. Praesent eget auctor odio. Aenean euismod.
          </h2>
          <button className="font-poppins font-bold text-slate-100 bg-[#22C55E] h-11 w-72 rounded-[11px] text-2xl z-10 my-4 mr-[500px]"
            onClick={(e) => {
              e.preventDefault()
              router.push('/signup')
            }}>
            Get Started
          </button>
        </div>

        <img src="/landing_phone.png" className="absolute origin-center rotate-[10deg] rounded-[244px] left-[850px] top-[200px] z-0 shadow-2xl" />
      </div>
    </section>
  )
}
