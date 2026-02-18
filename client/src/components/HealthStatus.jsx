const HealthStatus = ({ message, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  return <p>Backend says: {message}</p>;
};

export default HealthStatus;