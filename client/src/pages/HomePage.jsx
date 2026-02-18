import HealthStatus from '../components/HealthStatus.jsx';
import useHealth from '../hooks/useHealth.js';

const HomePage = () => {
  const { message, loading } = useHealth();

  return (
    <div>
      <h1>MERN App</h1>
      <HealthStatus message={message} loading={loading} />
    </div>
  );
};

export default HomePage;