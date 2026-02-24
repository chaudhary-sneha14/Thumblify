import "dotenv/config";
import express from 'express'
import cors from 'cors';
import { connectDB } from './Config/db.js';
import session from "express-session";
import MongoStore from "connect-mongo";
import AuthRouter from "./Routes/AuthRoute.js";
import ThumbnailRouter from "./Routes/ThumbnailRoute.js";
import UserRouter from "./Routes/UserRoute.js";



const app=express();
const port = process.env.PORT || 3000;
// await connectDB()


app.use(cors({
    origin:['http://localhost:5173','http://localhost:3000','https://thumblify-plum-chi.vercel.app'],
    credentials:true
}))


app.use(express.json())

app.use(
  session({

    secret: process.env.SESSION_SECRET,     // Secret key for signing session cookie
    resave: false,                          // Avoid saving session if unchanged
    saveUninitialized: false,               // Create session only when data exists
    cookie: {
     cookie: {
  maxAge: 1000 * 60 * 60 * 24 * 7,
  httpOnly: true,
  secure: true,
  sameSite: "none"
}
    },

    // Store sessions in MongoDB
    store: MongoStore.create({
      mongoUrl: process.env.MONGOOSE_URI, // DB connection
      collectionName: "sessions", // collection name
    }),
  })
);




app.use('/api/auth',AuthRouter)
app.use('/api/thumbnail',ThumbnailRouter)
app.use('/api/user',UserRouter)

app.get('/',(req,res)=>{
    res.send("Server is Live!");
})

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
});

export default app;

