import express from "express";
const router = express.Router();

import {  
    authUser,
    logoutUser,
    registerUser,
    getUserProfile,
    updateUserProfile
 } from "../controller/userController.js";
 import { protect } from "../middleware/authmiddleware.js";


router.post('/' ,registerUser);
router.post('/auth' ,authUser);
router.post('/logout' ,logoutUser);
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile);

export default router;