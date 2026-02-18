import { useEffect, useState } from 'react';
import { getHealthStatus } from '../services/healthService.js';

const useHealth = () => {
  const [message, setMessage] = useState('Loading...');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHealthStatus()
      .then(res => setMessage(res.data.message))
      .catch(() => setMessage('Could not connect to server'))
      .finally(() => setLoading(false));
  }, []);

  return { message, loading };
};

export default useHealth;