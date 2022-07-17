import React from 'react'
import { account } from '../appwrite/appwriteConfig'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Head from 'next/head'

function login() {

    const router = useRouter()

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const accountEmailSignin = async (e) => {
        e.preventDefault()
        const promise = account.createEmailSession(
            user.email,
            user.password
        );

        promise.then(function (response) {
            console.log(response); // Success
            router.push('/profile')
        }, function (error) {
            console.log(error); // Failure
        });
    }

    return (
        <div className="flex h-screen w-screen flex-row" >
            <Head>
                <title>Login</title>
            </Head>
            <div className="h-screen w-screen absolute bg-zinc-900 lg:w-3/6 lg:static">
                <div className="flex flex-col min-h-screen justify-center items items-center mx-auto">
                    <h1 className="text-5xl w-3/6 text-left font-poppins font-bold text-slate-100 leading-snug relative right-1 animate-pulse">
                        Sign in </h1>

                    <form onSubmit={accountEmailSignin}>
                        <div className="flex flex-col relative right-11">
                            <label className="font-poppins font-bold text-slate-100 text-2xl mt-5 mb-2" htmlFor="input-email">Email</label>
                            <input required type="email" name="input-email" id="input-email"
                                className="rounded-lg bg-[#242426] w-[398px] h-[47px] appearance-none outline-none p-4 text-slate-100"
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                            />

                            <label className="font-poppins font-bold text-slate-100 text-2xl mt-5 mb-2" htmlFor="input-pass">Password</label>
                            <input required type="password" name="input-pass" id="input-pass"
                                className="rounded-lg bg-[#242426] w-[398px] h-[47px] appearance-none outline-none p-4 text-slate-100"
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                            />

                            <button onClick={() => { }} className="font-poppins font-bold text-slate-100 bg-[#22C55E] mt-[37px] h-16 rounded-[19px] text-3xl">Sign in</button>

                            <h5 className="font-poppins font-bold text-slate-100 text-base mt-3 hover:cursor-default">Don't have an account? {' '}
                                <Link href="/signup"><a className="text-blue-400">Sign up</a></Link>
                            </h5>
                        </div>
                    </form>
                </div>
            </div>
            <Image
                className="invisible absolute lg:visible lg:static"
                src="/signup_phones.png"
                width={960}
                height="100vh" />
        </div >
    )
}

export default login