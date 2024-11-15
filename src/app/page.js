import Navbar from "./components/Navbar";
import Container from "./components/Container";
// import { Play, CheckCircle2 } from "lucide-react";
import { Play, ChevronRight, ChevronLeft } from 'lucide-react';

export default function Home() {
  return (
    <Container className="bg-white font-noto-thai">
      <Navbar />
      <div className="flex flex-col h-full bg-gray-50 text-black mt-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">ระบบบริหารจัดการ HR Cloud</h1>
              <p className="text-gray-600 mb-8">เครื่องมือช่วยจัดการงาน HR ที่ครอบคลุมทุกฟังก์ชั่น</p>
              <button className="px-6 py-3 bg-orange-500 text-white rounded-md flex items-center gap-2">
                ทดลองใช้ฟรี 30 วัน <ChevronRight size={20} />
              </button>
            </div>
            <div className="relative">
              <img src="/api/placeholder/600/400" alt="Hero" className="rounded-lg shadow-lg" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Play className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">ฟีเจอร์ที่น่าสนใจ</h2>
              <p className="text-gray-600">ระบบที่ครอบคลุมการทำงานของ HR ทั้งหมด</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="p-6 bg-gray-50 rounded-lg">
                  <img src="/api/placeholder/100/100" alt="Feature" className="mb-4 rounded" />
                  <h3 className="text-xl font-bold mb-2">ฟีเจอร์ {item}</h3>
                  <p className="text-gray-600">รายละเอียดฟีเจอร์และประโยชน์ที่จะได้รับ</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-orange-500">7,200,000</div>
                <p className="text-gray-600">จำนวนพนักงาน</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-orange-500">1,470,000</div>
                <p className="text-gray-600">ผู้ใช้งานทั้งหมด</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">เสียงจากลูกค้า Horganice</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg flex items-start gap-4">
                <img src="/api/placeholder/64/64" alt="Customer" className="rounded-full" />
                <div>
                  <p className="text-gray-600 mb-4">"ความคิดเห็นจากลูกค้า..."</p>
                  <div className="font-bold">ชื่อลูกค้า</div>
                  <div className="text-gray-500">ตำแหน่ง / บริษัท</div>
                </div>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg flex items-start gap-4">
                <img src="/api/placeholder/64/64" alt="Customer" className="rounded-full" />
                <div>
                  <p className="text-gray-600 mb-4">"ความคิดเห็นจากลูกค้า..."</p>
                  <div className="font-bold">ชื่อลูกค้า</div>
                  <div className="text-gray-500">ตำแหน่ง / บริษัท</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center gap-4 py-8">
          <button className="p-2 border rounded-full">
            <ChevronLeft size={24} />
          </button>
          <button className="p-2 border rounded-full">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Footer */}
        <footer className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-4">เกี่ยวกับเรา</h3>
                <ul className="space-y-2">
                  <li>ข้อมูลบริษัท</li>
                  <li>ติดต่อเรา</li>
                  <li>ข่าวสาร</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">บริการ</h3>
                <ul className="space-y-2">
                  <li>ฟีเจอร์</li>
                  <li>ราคา</li>
                  <li>ลูกค้า</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">ช่วยเหลือ</h3>
                <ul className="space-y-2">
                  <li>คำถามที่พบบ่อย</li>
                  <li>คู่มือการใช้งาน</li>
                  <li>ติดต่อสนับสนุน</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">ติดตามเรา</h3>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Container>
  );
}

// import React from 'react';
// import { Play, ChevronRight, ChevronLeft } from 'lucide-react';

// const HorganiceLanding = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation */}
//       <nav className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//           <div className="text-2xl font-bold text-orange-500">HORGANICE</div>
//           <div className="flex gap-4">
//             <button className="px-4 py-2 bg-orange-500 text-white rounded-md">ทดลองใช้ฟรี</button>
//             <button className="px-4 py-2 border border-gray-300 rounded-md">เข้าสู่ระบบ</button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           <div>
//             <h1 className="text-4xl font-bold mb-4">ระบบบริหารจัดการ HR Cloud</h1>
//             <p className="text-gray-600 mb-8">เครื่องมือช่วยจัดการงาน HR ที่ครอบคลุมทุกฟังก์ชั่น</p>
//             <button className="px-6 py-3 bg-orange-500 text-white rounded-md flex items-center gap-2">
//               ทดลองใช้ฟรี 30 วัน <ChevronRight size={20} />
//             </button>
//           </div>
//           <div className="relative">
//             <img src="/api/placeholder/600/400" alt="Hero" className="rounded-lg shadow-lg" />
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//               <Play className="w-16 h-16 text-white" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="bg-white py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">ฟีเจอร์ที่น่าสนใจ</h2>
//             <p className="text-gray-600">ระบบที่ครอบคลุมการทำงานของ HR ทั้งหมด</p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[1, 2, 3].map((item) => (
//               <div key={item} className="p-6 bg-gray-50 rounded-lg">
//                 <img src="/api/placeholder/100/100" alt="Feature" className="mb-4 rounded" />
//                 <h3 className="text-xl font-bold mb-2">ฟีเจอร์ {item}</h3>
//                 <p className="text-gray-600">รายละเอียดฟีเจอร์และประโยชน์ที่จะได้รับ</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-8 text-center">
//             <div className="p-6">
//               <div className="text-4xl font-bold text-orange-500">7,200,000</div>
//               <p className="text-gray-600">จำนวนพนักงาน</p>
//             </div>
//             <div className="p-6">
//               <div className="text-4xl font-bold text-orange-500">1,470,000</div>
//               <p className="text-gray-600">ผู้ใช้งานทั้งหมด</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Testimonials */}
//       <div className="bg-white py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">เสียงจากลูกค้า Horganice</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="p-6 bg-gray-50 rounded-lg flex items-start gap-4">
//               <img src="/api/placeholder/64/64" alt="Customer" className="rounded-full" />
//               <div>
//                 <p className="text-gray-600 mb-4">"ความคิดเห็นจากลูกค้า..."</p>
//                 <div className="font-bold">ชื่อลูกค้า</div>
//                 <div className="text-gray-500">ตำแหน่ง / บริษัท</div>
//               </div>
//             </div>
//             <div className="p-6 bg-gray-50 rounded-lg flex items-start gap-4">
//               <img src="/api/placeholder/64/64" alt="Customer" className="rounded-full" />
//               <div>
//                 <p className="text-gray-600 mb-4">"ความคิดเห็นจากลูกค้า..."</p>
//                 <div className="font-bold">ชื่อลูกค้า</div>
//                 <div className="text-gray-500">ตำแหน่ง / บริษัท</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Carousel Controls */}
//       <div className="flex justify-center gap-4 py-8">
//         <button className="p-2 border rounded-full">
//           <ChevronLeft size={24} />
//         </button>
//         <button className="p-2 border rounded-full">
//           <ChevronRight size={24} />
//         </button>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-100 py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="font-bold mb-4">เกี่ยวกับเรา</h3>
//               <ul className="space-y-2">
//                 <li>ข้อมูลบริษัท</li>
//                 <li>ติดต่อเรา</li>
//                 <li>ข่าวสาร</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-bold mb-4">บริการ</h3>
//               <ul className="space-y-2">
//                 <li>ฟีเจอร์</li>
//                 <li>ราคา</li>
//                 <li>ลูกค้า</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-bold mb-4">ช่วยเหลือ</h3>
//               <ul className="space-y-2">
//                 <li>คำถามที่พบบ่อย</li>
//                 <li>คู่มือการใช้งาน</li>
//                 <li>ติดต่อสนับสนุน</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-bold mb-4">ติดตามเรา</h3>
//               <div className="flex gap-4">
//                 <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
//                 <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
//                 <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HorganiceLanding;