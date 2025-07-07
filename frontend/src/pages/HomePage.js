import { useEffect, useState } from 'react';
import RoomCard from '../components/RoomCard';
import API from '../services/api';

function HomePage() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    API.get('/rooms')
      .then(res => setRooms(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Available Rooms</h1>
      <div>
        {rooms.map(room => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
