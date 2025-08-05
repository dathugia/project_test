import './HotelList.css';

const hotels = [
    {
        name: 'Sunrise Beach Hotel',
        rating: 4.5,
        price: 120,
        location: 'Nha Trang, Vietnam',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Ocean View Resort',
        rating: 4.0,
        price: 95,
        location: 'Da Nang, Vietnam',
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Palm Paradise Inn',
        rating: 5.0,
        price: 200,
        location: 'Phu Quoc, Vietnam',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    },
];

const HotelList = () => (
    <div>
        <h2>Danh sách khách sạn</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {hotels.map((hotel, idx) => (
                <li key={idx} style={{
                    marginBottom: '24px',
                    border: '1px solid #eee',
                    borderRadius: '8px',
                    padding: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                    <img
                        src={hotel.image}
                        alt={hotel.name}
                        style={{
                            width: '120px',
                            height: '80px',
                            objectFit: 'cover',
                            borderRadius: '8px',
                            marginRight: '16px'
                        }}
                    />
                    <div>
                        <strong>{hotel.name}</strong>
                        <div>Đánh giá: {hotel.rating} ⭐</div>
                        <div>Giá phòng: {hotel.price}$ / đêm</div>
                        <div>Vị trí: {hotel.location}</div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

export default HotelList;