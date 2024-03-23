import dotenv from 'dotenv';
dotenv.config();

export const client_port = process.env.PORT || 5000;
export const server_port =
  process.env.MONGODB_URL || 'mongodb://localhost:27017';
