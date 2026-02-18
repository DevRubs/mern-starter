import User from '../models/User.js';

export const findAll = async () => {
  return await User.find().select('-password');
};

export const findById = async (id) => {
  return await User.findById(id);
};

export const create = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

export const updateById = async (id, userData) => {
  return await User.findByIdAndUpdate(id, userData, { new: true });
};

export const deleteById = async (id) => {
  return await User.findByIdAndDelete(id);
};