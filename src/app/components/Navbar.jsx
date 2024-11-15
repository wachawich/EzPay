import React from 'react'
import Link from 'next/link'


function Navbar() {
  return (
    <nav className='w-full h-16 flex fixed items-center top-0 bg-white shadow-sm'>
      <div className="h-full mx-auto flex w-full justify-around items-center text-black">
        <div className="logo mt-6 font-extrabold text-3xl">
        <Link href="/">EzPay</Link>
        </div>
        <ul className='flex'>
          {/* <li><Link href="/Register">Register</Link></li> */}
          {/* <li className='ml-6'><Link href="/chooseregis">Login</Link></li> */}
          <Link href="/chooseregis"><button className="px-4 py-2 border border-white rounded-md bg-[#ab58ff] text-white">Login</button></Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

// {/* <nav className="bg-white shadow-sm">
//           <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//             <div className="text-2xl font-bold text-orange-500">HORGANICE</div>
//             <div className="flex gap-4">
//               <button className="px-4 py-2 bg-orange-500 text-white rounded-md">ทดลองใช้ฟรี</button>
//               <button className="px-4 py-2 border border-gray-300 rounded-md">เข้าสู่ระบบ</button>
//             </div>
//           </div>
//         </nav> */}