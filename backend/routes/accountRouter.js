import {Router} from 'express';
const router=Router();
//defining routes
router.get('/',(req,res)=>{
    res.send("Hello from myRouter!");
})

router.post('/xyz',(req,res)=>{
    const {name}=req.body;
    res.send(`Hello from myRouter ${name}!`);
})
export default router;