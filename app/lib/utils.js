import mongoose from "mongoose";

export const conncetToDB = async () => {
  const connection = {};
  try {
    if (connection.isConnected) return;

    const db = await mongoose.conncet(process.env.MONGO);
    connection.isConnected = db.connection[0].readyState;
  } catch (error) {
    throw new Error(error);
  }
};
