import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/LoginPage.css';
const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!email) {
      setError('Please enter the email.');
      setIsLoading(false);
      if (!password) {
        setError('Please enter the password.');
        setIsLoading(false);
      }
      return;
    }

    setTimeout(() => {
      if (email === 'emmynono2013@gmail.com' && password === 'admin') {
        setIsLoading(false);
        navigate('/search');
      } else {
        setError('Invalid email or password.');
        setIsLoading(false);
      }
    }, 2000);
  };

  return (
    <div className="login-container">
      <h2 className='LoginHead1'>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading} 
          />
        </div>
        <button type="submit" className="login-button" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {isLoading && (
        <div className="loader"></div> 
      )}
    </div>
  );
};

export default LoginPage;
