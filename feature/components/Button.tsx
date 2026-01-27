"use client";

import { useRouter } from "next/navigation";

export default function Button({ text, path }: { text: string, path: string }) {
    const router = useRouter();
    const onClickButton = () => {
        router.push(path);
    };

    return (
        <button className="bg-black text-white p-20 m-4 border" onClick={onClickButton}>{text}</button>
    )
}