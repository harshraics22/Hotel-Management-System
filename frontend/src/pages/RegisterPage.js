import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const register = async () => {
    try {
      const res = await API.post('/auth/register', form);
      localStorage.setItem('token', res.data.token);
      alert('Registered successfully');
      navigate('/');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button onClick={register}>Register</button>
    </div>
  );
}

export default RegisterPage;
