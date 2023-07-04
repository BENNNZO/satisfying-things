"use client"

import { useRouter } from "next/navigation"

export default function Home() {
    const { push } = useRouter()

    return (
        <main className="flex flex-col">
            Hello World!
            <p onClick={() => push('/things/button')} className="cursor-pointer px-2 py-1 bg-neutral-200">Button</p>
        </main>
    )
}
