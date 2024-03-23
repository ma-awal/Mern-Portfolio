import { useContext, useState } from 'react';
import { AppContext } from '../../context/context';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const { data, dispatch } = useContext(AppContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false); // New state for success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post('/api/auth/register', {
        username,
        email,
        password,
      });

      if (res.data) {
        setSuccess(true); // Set success state to true
        // Clear input fields
        setUsername('');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <section className="register">
      <div className="admin_form">
        <h4 className=" ">Register</h4>
        <form className=" " onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Username</label>
            <input
              className="  form-control"
              type="text"
              placeholder="Enter your username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              className="  form-control"
              type="text"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label>Password</label>
            <input
              className="  form-control"
              type="password"
              placeholder="Enter your password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className=" py-2 mb w-100 rounded-0 btn btn-sm btn-info">
            Register
          </button>
        </form>
        <button className=" btn btn-sm btn-warning w-100 rounded-0 py-2 mt-3 ">
          <Link className="nav-link link" to="/login">
            Login
          </Link>
        </button>
        {error && <span>Something went wrong</span>}
        {success && (
          <span>Registration successful! Please proceed to login.</span>
        )}
      </div>
    </section>
  );
};

export default Register;
