'use client'

import { useState } from "react"

type Profile = {
    username: string,
    jti: string,
    sub: string
}

export default function ProfileComponent() {

    const [profile, setProfile] = useState<Profile | null>(null)

    const fetchData = () => {
        fetch('/profile')
            .then(response => response.json())
            .then(data => {
                console.log("Fetched data:", data);
                setProfile(data)
            })
    }

    return (
        <>
            <div className="w-screen h-screen flex flex-col justify-center items-center gap-1">
                <h1 className="text-center font-bold">Profile Page</h1>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={fetchData}
                >
                    {profile ? "Your Result" : "Get profile"}
                </button>
                <div className="border-t-2 border-blue-500 p-2.5 mt-2.5">
                {profile ? (
                    <>
                        <h1><span className="italic font-bold">NAME:</span> {profile?.username}</h1>
                        <p><span className="italic font-bold">JTI:</span> {profile?.jti}</p>
                        <p><span className="italic font-bold">SUB:</span> {profile?.sub}</p>
                    </>
                ) : (
                    <h1>No profile data available!</h1>
                )}
            </div>
            </div>
        </>
    )
}