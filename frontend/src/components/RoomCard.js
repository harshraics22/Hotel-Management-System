import { Link } from 'react-router-dom';

function RoomCard({ room }) {
  return (
    <div className="room-card">
      <h2>{room.name}</h2>
      <p>Type: {room.type}</p>
      <p>Price: ₹{room.price}</p>
      <p>{room.isAvailable ? 'Available' : 'Booked'}</p>
      {room.isAvailable && (
        <Link to={`/book/${room._id}`}>
          <button>Book Now</button>
        </Link>
      )}
    </div>
  );
}

export default RoomCard;
