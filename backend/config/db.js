import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGOURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`CONNECTED TO MONGODB: ${con.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
