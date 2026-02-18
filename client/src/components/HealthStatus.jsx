const HealthStatus = ({ message, loading }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Backend Status
      </h2>
      {loading ? (
        <div className="flex items-center justify-center space-x-2">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      ) : (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800 font-medium">
            ✅ Backend says: {message}
          </p>
        </div>
      )}
    </div>
  );
};

export default HealthStatus;