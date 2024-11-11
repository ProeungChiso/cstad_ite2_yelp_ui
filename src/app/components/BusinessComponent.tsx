'use client'

import { useState } from "react";

type Business = {
    name: string,
}

export default function BusinessComponent() {

    const[business, setBusiness] = useState<Business | null>(null)

    const fetchData = () => {
        fetch('/business/api/v1/categories')
            .then(response => response.json())
            .then(data => {
                console.log("Fetched data:", data);
                setBusiness(data)
            })
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-1">
            <h1 className="text-center font-bold">Business Page</h1>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={fetchData}
            >
                {business ? "Your Result" : "Get business"}
            </button>
            <div className="border-t-2 border-blue-500 p-2.5 mt-2.5">
                {business ? (
                    <>
                        <h1><span className="italic font-bold">NAME:</span> {business.name}</h1>
                    </>
                ) : (
                    <h1>No business data available!</h1>
                )}
            </div>
        </div>
    )

}