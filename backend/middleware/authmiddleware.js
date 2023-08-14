import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect= asyncHandler(async (res,req,next)=>{
    let token;

    token=req.cookie.jwt;
    if(token){
        try {
            const decoded= jwt.verify(token,process.env.JWT_SECRET);
            req.user= await User.modelName(findById(decoded.userId)).select('-password');
            next();
        } catch (error) {
            res.status(401);
            throw new Error('Not authorized , invalid token')   
        }
       
    }else{
        res.status(401);
        throw new Error('Not authorized , no token')
    }
})

export  {protect}