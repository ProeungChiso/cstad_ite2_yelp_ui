'use client'

import { HiOutlineLogin } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomeComponent() {

    const router = useRouter();

    return (
        <div className="w-screen h-screen content-center">
            <h1 className="text-center font-bold text-[64px]">Welcome to YELP</h1>
            <div className="flex justify-center my-2.5">
                <Link
                    href="/oauth2/authorization/yelp"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                    <span className="flex items-center gap-1">
                        <HiOutlineLogin size={20} /> Login
                    </span>
                </Link>
            </div>

            <div className="flex flex-col justify-center items-center gap-1 p-2.5">
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => router.push('/business-page')}
                >
                    Go to load business
                </button>
                <button
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => router.push('/profile-page')}
                >
                    Go to load profile
                </button>
            </div>
        </div>
    )
}