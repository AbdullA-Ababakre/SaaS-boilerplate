import React from 'react'
import { KeyRound } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { FaGithub, FaGoogle } from "react-icons/fa";


export default function page() {
    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <div className='rounded-md border p-5 space-y-5 relative bg-slate-900'>
                <div className="flex items-center gap-2">
                    <KeyRound />
                    <h1 className='text-2xl font-bold'>Next + Supabase</h1>
                </div>
                <p className='text-sm text-gray-300'>Register/signIn today 👇</p>
                <div className='block w-full' variant="outline">
                    <Button className='block w-full flex items-center gap-2' variant="outline"> <FaGithub />Github</Button>
                    <Button className='block w-full flex items-center gap-2' variant="outline"> <FaGoogle />Google </Button>
                </div>
                <div className='glowBox -z-10'></div>
            </div>
        </div>
    )
}
