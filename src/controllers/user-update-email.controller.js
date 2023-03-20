import UserModel from "#Schemas/user.schema.js";
import { compare } from "bcrypt";

const userUpdateEmailController = async (req, res) => {
  const { id } = req;
  const { email, password } = req.body;

  const existingUserById = await UserModel.findById(id).exec();
  if (!existingUserById) return res.status(401).send('user not authenticated');

  const checkPassword = await compare(password, existingUserById.password)
  if (!checkPassword) return res.status(401).send('invalid credentials');

  existingUserById.email = email;

  await existingUserById.save();

  return res.send('Email updated successfully')
};

export default userUpdateEmailController;