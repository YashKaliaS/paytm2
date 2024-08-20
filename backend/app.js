import express from "express";
import accountRouter from "./routes/accountRouter.js"
import cors from 'cors';
import userRouter from './routes/userRouter.js'
import { transformer } from "zod";
const app=express();
const PORT=3000;
//middleware
app.use(cors())
app.use(express.json());
app.use('/api/v1/account',accountRouter);
app.use('/api/v1/user',userRouter)
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
//desired routes:
// api/v1/user/signup
// api/v1/user/signin
// api/v1/user/changePass

// api/v1/account/transferMoney
// api/v1/account/balance