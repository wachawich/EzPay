import React, { useState } from 'react';
import Container from './ui/Container';
import RoomCard from './ui/roomcard';
import TenantCard from './ui/tenatCard';

export default function Tenant() {
  const data = {
    "buildings": [
      {
        "name": "A",
        "data": [
          { "roomNumber": "101", "floor": "1", "tenant": "John Doe", "phone": "0911234567", "line": "johnline", "email": "john@example.com", "AgStartDATE": "1 มกราคม 2567", "AgEndDATE": "1 มกราคม 2568" },
          { "roomNumber": "102", "floor": "1", "tenant": "Alice Smith", "phone": "0921234567", "line": "aliceline", "email": "alice@example.com", "AgStartDATE": "1 กุมภาพันธ์ 2567", "AgEndDATE": "1 กุมภาพันธ์ 2568" },
          { "roomNumber": "103", "floor": "2", "tenant": "Bob Brown", "phone": "0931234567", "line": "bobline", "email": "bob@example.com", "AgStartDATE": "1 มีนาคม 2567", "AgEndDATE": "1 มีนาคม 2568" },
          { "roomNumber": "104", "floor": "2", "tenant": "Claire White", "phone": "0941234567", "line": "claireline", "email": "claire@example.com", "AgStartDATE": "1 เมษายน 2567", "AgEndDATE": "1 เมษายน 2568" },
          { "roomNumber": "105", "floor": "3", "tenant": "David Black", "phone": "0951234567", "line": "davidline", "email": "david@example.com", "AgStartDATE": "1 พฤษภาคม 2567", "AgEndDATE": "1 พฤษภาคม 2568" },
          { "roomNumber": "106", "floor": "3", "tenant": "Emma Green", "phone": "0961234567", "line": "emmaline", "email": "emma@example.com", "AgStartDATE": "1 มิถุนายน 2567", "AgEndDATE": "1 มิถุนายน 2568" },
          { "roomNumber": "107", "floor": "4", "tenant": "Frank Miller", "phone": "0971234567", "line": "frankline", "email": "frank@example.com", "AgStartDATE": "1 กรกฎาคม 2567", "AgEndDATE": "1 กรกฎาคม 2568" },
          { "roomNumber": "108", "floor": "4", "tenant": "Grace Hill", "phone": "0981234567", "line": "graceline", "email": "grace@example.com", "AgStartDATE": "1 สิงหาคม 2567", "AgEndDATE": "1 สิงหาคม 2568" },
          { "roomNumber": "109", "floor": "5", "tenant": "Harry Wilson", "phone": "0991234567", "line": "harryline", "email": "harry@example.com", "AgStartDATE": "1 กันยายน 2567", "AgEndDATE": "1 กันยายน 2568" },
          { "roomNumber": "110", "floor": "5", "tenant": "Ivy Adams", "phone": "0901234567", "line": "ivyline", "email": "ivy@example.com", "AgStartDATE": "1 ตุลาคม 2567", "AgEndDATE": "1 ตุลาคม 2568" },
          { "roomNumber": "111", "floor": "6", "tenant": "Jack Brown", "phone": "0891234567", "line": "jackline", "email": "jack@example.com", "AgStartDATE": "1 พฤศจิกายน 2567", "AgEndDATE": "1 พฤศจิกายน 2568" },
          { "roomNumber": "112", "floor": "6", "tenant": "Kelly Stone", "phone": "0881234567", "line": "kellyline", "email": "kelly@example.com", "AgStartDATE": "1 ธันวาคม 2567", "AgEndDATE": "1 ธันวาคม 2568" }
        ]
      },
      {
        "name": "B",
        "data": [
          { "roomNumber": "201", "floor": "1", "tenant": "Mike Davis", "phone": "0821234567", "line": "mikeline", "email": "mike@example.com", "AgStartDATE": "5 มกราคม 2567", "AgEndDATE": "5 มกราคม 2568" },
          { "roomNumber": "202", "floor": "1", "tenant": "Nina Scott", "phone": "0831234567", "line": "ninaline", "email": "nina@example.com", "AgStartDATE": "5 กุมภาพันธ์ 2567", "AgEndDATE": "5 กุมภาพันธ์ 2568" },
          // ... เพิ่มอีก 10 ห้องสำหรับตึก B
        ]
      },
      {
        "name": "C",
        "data": [
          { "roomNumber": "301", "floor": "1", "tenant": "Oscar Harris", "phone": "0811234567", "line": "oscarline", "email": "oscar@example.com", "AgStartDATE": "10 มกราคม 2567", "AgEndDATE": "10 มกราคม 2568" },
          { "roomNumber": "302", "floor": "1", "tenant": "Pamela Lee", "phone": "0841234567", "line": "pamelaline", "email": "pamela@example.com", "AgStartDATE": "10 กุมภาพันธ์ 2567", "AgEndDATE": "10 กุมภาพันธ์ 2568" },
          // ... เพิ่มอีก 10 ห้องสำหรับตึก C
        ]
      }
    ]
  };
  

  const [selectedBuilding, setSelectedBuilding] = useState(data.buildings[0].name); // Default to the first building
  const [selectedRoom, setSelectedRoom] = useState(data.buildings[0].data[0].roomNumber); // Default to the first room of the selected building

  // Get the selected building and room
  const building = data.buildings.find(b => b.name === selectedBuilding);
  const room = building?.data.find(r => r.roomNumber === selectedRoom);

  return (
    <div className="flex flex-col w-full h-full justify-start p-0 font-noto-thai">
      <div
        className="p-5 mt-2 flex flex-col justify-start items-start bg-[#ffffff] w-full rounded-xl"
        style={{
          height: '100%'
        }}>

        <div className="mb-4 w-full flex justify-between items-center"
          style={{
            height: '8%',
            borderBottom: "2px solid #000"
          }}>
            <h1 className='text-[#21006e] font-bold text-3xl'>TENANT</h1>
            <div className="search_box w-36">
              <div className="border border-black rounded-full pl-3 text-xs py-1">
                search
              </div>
            </div>
        </div>


        <div className="h-5/6 w-full"
          style={{
            height: '88%'
          }}>
          <div className="w-full flex justify-between items-center mb-3">
            <div className="flex h-7 items-center justify-between">
              {/* Building Tabs */}
              <div className="flex mr-6 bg-[#CD8BFF] rounded-md">
                {data.buildings.map((b) => (
                  <button
                    className="py-1 p-5 text-xs rounded-md hover:bg-[#EDF1FF]"
                    key={b.name}
                    onClick={() => {
                      setSelectedBuilding(b.name);
                      setSelectedRoom(b.data[0]?.roomNumber); // Default to the first room of the selected building
                    }}
                    style={{
                      backgroundColor: b.name === selectedBuilding ? '#9747FF' : '#CD8BFF',
                      color: b.name === selectedBuilding ? '#fff' : '#fff'
                    }}
                  >
                    {b.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-7">
              <button className='px-4 py-1 text-xs border border-white rounded-md bg-[#f3c519] text-white'>Add User</button>
            </div>
          </div>

          {/* Tenant Cards */}
          <div
            className="w-full overflow-y-scroll"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', height: '90%' }}>
            {building?.data.map((room) => (
              <TenantCard
                key={room.roomNumber}
                room={room}
                buildingName={building.name} // ส่งชื่ออาคาร
                onClick={() => console.log(room)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
