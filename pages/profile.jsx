import React, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { account } from '../appwrite/appwriteConfig'
import { Phone } from '../components/Phone'

function profile() {

    const router = useRouter()
    const [userDetail, setUserDetail] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const promise = await account.get();
                setUserDetail(promise);
                console.log(promise);
            } catch (error) {
                if(error.code === 401) {
                    router.push('/login')
                }
            }

            try {
                const promise = await account.get();
                setUserDetail(promise);
                console.log(promise);
            } catch (error) {
                if(error.code === 401) {
                    router.push('/login')
                }
            }
        }
        
        fetchData();

    }, [])

    const handleLogout = async () => {
        try {
            await account.deleteSession("current");
            router.push('/login');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="h-screen w-screen bg-zinc-900">
            <h1 className="text-center font-poppins font-bold text-slate-100 pt-12 text-5xl">
                Welcome, {userDetail.name}.<br />  Here is your phone library</h1>

            <div className="flex flex-row-reverse flex-wrap justify-between items-center mt-20">
                <Phone image="/phones/iphone14.png" name="Iphone 14" />
                <Phone image="/phones/iphone14.png" name="Iphone 14" />
                <Phone image="/phones/iphone14.png" name="Iphone 14" />
            </div>

            <div className="w-screen flex justify-center items-center flex-col">
                <button 
                onClick={handleLogout}
                className="font-poppins text-4xl text-slate-100 bg-red-500 h-16 w-2/12 rounded-2xl">
                    Log Out
                </button>
                <button 
                onClick={() => router.push('/')}
                className="font-poppins text-4xl text-slate-100 bg-green-400 h-16 w-2/12 rounded-2xl mt-5">
                    Home
                </button>
            </div>
        </div>
    )
}

export default profile