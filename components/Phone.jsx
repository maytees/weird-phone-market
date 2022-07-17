import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
export const Phone = ( { phone } ) => {
  return (
    <div className="mx-32">
        <Head>
            <title>Welcome</title>
        </Head>

        <Image 
        className="rounded-[60px] z-10"
        src={phone.image_path} 
        alt={phone.name} 
        width="243px"
        height="266px"
        />

        <div className="relative rounded-bl-3xl rounded-br-3xl bg-[#1e1e1e] h-[139px] w-[243px] bottom-24 z-0">
            <h1 className="relative text-center top-24 font-bold text-2xl text-slate-100">
                {phone.name}
            </h1>
        </div>
    </div>
  )
}
