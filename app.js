import dbConnection from './config/db.js';
import express from "express"
import router from './routes/userRoutes.js';
import Router from './routes/postRoutes.js';


const app = express();
const port = 5000;

app.use(express.json())

app.use('/api/user', router);
app.use('/api/post', Router);

app.listen(port, () => {
    dbConnection();
    console.log(`Server is running on ${port} number.`)
})