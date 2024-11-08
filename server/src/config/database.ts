import mongoose, { connect, ConnectOptions } from "mongoose";

const password = encodeURIComponent("G%40toWYQOK2024Yt");
const mongoURL = `mongodb+srv://webrepoleved:${password}@gatotest.2trt8.mongodb.net/?retryWrites=true&w=majority&appName=gatotest`;

//pw: G@toWYQOK2024Yt

//const mongoURL = "mongodb://127.0.0.1:27017/immoApp?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0";

const uri = `mongodb+srv://webrepoleved:G%40toWYQOK2024Yt@gatotest.2trt8.mongodb.net/?retryWrites=true&w=majority&appName=gatotest`;
const clientOptions: ConnectOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };



export const connectDB = async () => {
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);

    await mongoose.connection?.db?.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
        //await  connect(mongoURL);

        console.log("MongoDB connected");
    } catch (err: any) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
      }
}
