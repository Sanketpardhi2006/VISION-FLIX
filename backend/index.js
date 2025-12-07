import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

// 1️⃣ dotenv load first
dotenv.config({
    path: ".env"
});

// 2️⃣ database connect after dotenv
databaseConnection();

const app = express();

//middlewares 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// ✅ Updated CORS options
const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];

const corsOptions = {
    origin: function(origin, callback){
        if(!origin) return callback(null, true); // for mobile apps, curl, Postman
        if(allowedOrigins.indexOf(origin) === -1){
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true
};

app.use(cors(corsOptions));

// api
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
});
