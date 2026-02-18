import api from './api.js';

export const getHealthStatus = () => api.get('/');