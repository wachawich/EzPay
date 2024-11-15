import React from 'react'

import Container from '../components/Container'
import Link from 'next/link'

function Auth() {
    return (
        <Container className="flex-col border-white justify-center items-center text-black font-noto-thai">
            Auth
            <div className="flex items-center justify-around w-10/12 h-3/6 mt-16">
                <div className="border-2 w-4/12 h-full  rounded-md bg-white text-black flex justify-center items-center cursor-pointer">
                    <Link href="/auth/login/user" className='w-full h-full flex justify-center items-center'>
                        ผู้เช่าหอพัก
                    </Link>
                </div>
                <div className="border-2 w-4/12 h-full rounded-md bg-white text-black flex justify-center items-center cursor-pointer">
                    <Link href="/auth/login/adminlogin" className='w-full h-full flex justify-center items-center'>
                        ผู้ดูแลหอ
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default Auth