import { useEffect, useState } from 'react';
import API from '../services/api';

function AdminDashboard() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    API.get('/rooms')
      .then(res => setRooms(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>All Rooms</h2>
      <ul>
        {rooms.map(room => (
          <li key={room._id}>
            {room.name} - ₹{room.price} - {room.isAvailable ? 'Available' : 'Booked'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
