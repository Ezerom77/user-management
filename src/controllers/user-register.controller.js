import UserModel from "#Schemas/user.schema.js";
import { hash } from "bcrypt";

const userRegisterController = async (req, res) => {
  const { _id, name, surname, email, password } = req.body;

  const existingUserById = await UserModel.findById(_id).exec();
  if (existingUserById) return res.status(409).send('user already registered');

  const existingUserByEmail = await UserModel.findOne({ email }).exec();
  if (existingUserByEmail) return res.status(409).send('email already registered');

  const hashedPassword = await hash(password, 12);
  const user = new UserModel({
    _id, name, surname, email, password: hashedPassword
  })

  await user.save();
  return res.status(201).send('user registration successful')
};

export default userRegisterController;