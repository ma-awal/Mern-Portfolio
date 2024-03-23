import mongoose from 'mongoose';
import { server_port } from '../secret.js';

export const connectionDB = async () => {
  try {
    await mongoose.connect(server_port);
    console.log('Database Connected');
  } catch (error) {
    console.log(error.message);
  }
};
