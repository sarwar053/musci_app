"use client"
import { signIn } from "next-auth/react";
export function Appbar() {
    return (
        <>
        <div className="flex justify-between">
            Muzi
        </div>
        <div>
            <button className="" onClick={()=>signIn()}>sign in</button>
        </div>
        </>
    );
}