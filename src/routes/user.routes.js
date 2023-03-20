import userLoginController from '#controllers//user-login.controller.js';
import userProfileController from '#controllers//user-profile.controller.js';
import userRegisterController from '#controllers//user-register.controller.js';
import userUpdateDataController from '#controllers//user-update-data.controller.js';
import userUpdateEmailController from '#controllers//user-update-email.controller.js';
import userUpdatePasswordController from '#controllers//user-update-password.controller.js';
import userUnRegisterController from '#controllers//user-unRegister.controller.js';
import userJWTDTO from '#Dto/user-jwt.dto.js';
import userLoginDTO from '#Dto/user-login.dto.js';
import userRegisterDTO from '#Dto/user-register.dto.js'
import userUnRegisterDTO from '#Dto/user-unregister.dto.js';
import userUpdateDataDTO from '#Dto/user-update-data.dto.js';
import userUpdateEmailDTO from '#Dto/user-update-email.dto.js';
import userUpdatePasswordDTO from '#Dto/user-update-password.dto.js';
import { Router } from 'express';


const userRouter = Router();

userRouter.post('/register', userRegisterDTO, userRegisterController);
userRouter.post('/login', userLoginDTO, userLoginController);
userRouter.get('/profile', userJWTDTO, userProfileController);
userRouter.patch('/update-data', userJWTDTO, userUpdateDataDTO, userUpdateDataController);
userRouter.patch('/update-email', userJWTDTO, userUpdateEmailDTO, userUpdateEmailController);
userRouter.patch('/update-password', userJWTDTO, userUpdatePasswordDTO, userUpdatePasswordController);
userRouter.delete('/unregister', userJWTDTO, userUnRegisterDTO, userUnRegisterController);

export default userRouter;