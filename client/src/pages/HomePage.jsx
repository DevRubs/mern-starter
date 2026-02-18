import HealthStatus from '../components/HealthStatus.jsx';
import useHealth from '../hooks/useHealth.js';

const HomePage = () => {
  const { message, loading } = useHealth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              MERN Starter App
            </h1>
            <p className="text-lg text-gray-600">
              A modern full-stack application with React, Node.js, Express & MongoDB
            </p>
            <div className="mt-4 flex justify-center space-x-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                React
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Node.js
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Tailwind CSS
              </span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <HealthStatus message={message} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;