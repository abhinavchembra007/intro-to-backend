import { Router } from "express";

import { loginUser, logOut, registerUser } from "../controllers/user.controller.js";

const router=Router();

router.post('/register',registerUser);
router.post('/login',loginUser);
router.post('/logout',logOut);

export default router;