//Import User Model
import db from "../config/db.config.js";
import user from "../models/User.js";
// post for user register
export const userRegister = async (req, res) => {
    try {
        const emailId = req.body.emailId
        const password =req.body.password
        const hash=await bcrypt.hash(password,15);
        await db('users').insert({emailId:emailId,password:hash,});
        const confirmPassword=req.body.confirmPassword
        await db('users').insert ((val,{req})=>{
           if(val != req.body.password)
           return res.json("password mismatch")

        })

    } catch (err) {
        return res.status(400).send(err);
    }

};
