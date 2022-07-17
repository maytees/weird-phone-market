import React, { useState } from 'react'
import { account } from '../appwrite/appwriteConfig'
import { v4 as uuidv4 } from 'uuid'
import Router, { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

function signup() {
    const router = useRouter()
    
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const signupUser = async (e) => {
        let passed = false;
        let error = ""; 

        e.preventDefault()
        const promise = account.create(
            uuidv4(),
            user.email,
            user.password,
            user.name
        );

        promise.then(function (response) {
            console.log(response); // Success
            router.push('/login')

            passed = true;
            error = "";
        }, function (error) {
            console.log("the thing below is an error")
            console.log(error.message)

            passed = false;
            error = error.message;
        });

        return { passed, error };
    }

    return (
        <div className="flex h-screen w-screen flex-row">
            <Head>
                <title>Signup</title>
            </Head>
            <div className="h-screen w-screen absolute bg-zinc-900 lg:w-3/6 lg:static">
                <div className="flex flex-col min-h-screen justify-center items items-center mx-auto">
                    <h1 className="text-5xl w-3/6 text-left font-poppins font-bold text-slate-100 leading-snug relative right-1 animate-pulse">
                        Sign up to browse phones </h1>

                    <form onSubmit={signupUser}>
                        <div className="flex flex-col relative right-11">
                            <label className="font-poppins font-bold text-slate-100 text-2xl mt-5 mb-2" htmlFor="input-email">Email</label>
                            <input required type="email" name="input-email" id="input-email"
                                className="rounded-lg bg-[#242426] w-[398px] h-[47px] appearance-none outline-none p-4 text-slate-100"
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                            />

                            <label className="font-poppins font-bold text-slate-100 text-2xl mt-5 mb-2" htmlFor="input-name">Name</label>
                            <input required type="text" name="input-name" id="input-name"
                                className="rounded-lg bg-[#242426] w-[398px] h-[47px] appearance-none outline-none p-4 text-slate-100"
                                onChange={(e) => setUser({ ...user, name: e.target.value })}
                            />

                            <label className="font-poppins font-bold text-slate-100 text-2xl mt-5 mb-2" htmlFor="input-pass">Password</label>
                            <input required type="password" name="input-pass" id="input-pass"
                                className="rounded-lg bg-[#242426] w-[398px] h-[47px] appearance-none outline-none p-4 text-slate-100"
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                            />

                            <button className="font-poppins font-bold text-slate-100 bg-[#22C55E] mt-[37px] h-16 rounded-[19px] text-3xl">Sign up</button>

                            <h5 className="font-poppins font-bold text-slate-100 text-base mt-3 hover:cursor-default">Already have an account? {' '}
                                <Link href="/login"><a className="text-blue-400">Login</a></Link>
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
        </div>
    )
}

export default signup