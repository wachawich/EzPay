import React, { Component } from 'react';
import './roomcard.css';

// Base class สำหรับ RoomCard
class RoomCardBase extends Component {
    constructor(props) {
        super(props);
        this.room = props.room;
        this.onClick = props.onClick;

        if (new.target === RoomCardBase) {
            throw new Error("Cannot instantiate an abstract class directly.");
        }
    }

    // Method สำหรับกำหนดคลาส (override ใน subclass)
    getCardClass() {
        throw new Error("Abstract method 'getCardClass' must be implemented in subclass.");
    }

    // Method สำหรับกำหนด style (ต้อง override)
    getCardStyle() {
        throw new Error("Abstract method 'getCardStyle' must be implemented in subclass.");
    }

    // Method สำหรับกำหนดข้อความสถานะ (ต้อง override)
    getStatusText() {
        throw new Error("Abstract method 'getStatusText' must be implemented in subclass.");
    }

    render() {
        const { roomNumber, tenant } = this.room;

        return (
            <div
                className={`card font-extrabold text-xl flex flex-col justify-around ${this.getCardClass()}`}
                key={roomNumber}
                style={this.getCardStyle()}
                onClick={() => this.onClick(this.room)}
            >
                <h4
                    className="font-noto-thai font-black text-2xl z-10"
                    style={{ fontWeight: '900' }}
                >
                    {roomNumber}
                </h4>
                <p className="text-base font-noto-thai z-10">{tenant}</p>
                <p className="font-noto-thai z-10 text-base">{this.getStatusText()}</p>
            </div>
        );
    }
}

// Subclass สำหรับสถานะ "Paid"
class PaidRoomCard extends RoomCardBase {
    getCardClass() {
        return 'card-paid';
    }

    getCardStyle() {
        return {
            backgroundColor: '#67EA56',
        };
    }

    getStatusText() {
        return 'ชำระแล้ว';
    }
}

// Subclass สำหรับสถานะ "Unpaid"
class UnpaidRoomCard extends RoomCardBase {
    getCardClass() {
        return 'card-unpaid';
    }

    getCardStyle() {
        return {
            backgroundColor: '#FF6565',
        };
    }

    getStatusText() {
        return 'ยังไม่ชำระ';
    }
}

// Subclass สำหรับสถานะ "Vacant"
class VacantRoomCard extends RoomCardBase {
    getCardClass() {
        return 'card-vacant';
    }

    getCardStyle() {
        return {
            backgroundColor: '#FFE386',
        };
    }

    getStatusText() {
        return 'ห้องว่าง';
    }
}

// Subclass สำหรับสถานะอื่น ๆ
class BillingRoomCard extends RoomCardBase {
    getCardClass() {
        return 'card-billing';
    }

    getCardStyle() {
        return {
            backgroundColor: '#E5C5FF',
        };
    }

    getStatusText() {
        return 'ออกบิลแล้ว';
    }
}

// Factory สำหรับเลือก Class ที่เหมาะสม
const RoomCard = (props) => {
    const { status } = props.room;

    switch (status) {
        case 'Paid':
            return <PaidRoomCard {...props} />;
        case 'Unpaid':
            return <UnpaidRoomCard {...props} />;
        case 'Vacant':
            return <VacantRoomCard {...props} />;
        default:
            return <BillingRoomCard {...props} />;
    }
};

export default RoomCard;
