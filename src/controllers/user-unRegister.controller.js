import UserModel from "#Schemas/user.schema.js";
import { compare } from "bcrypt";

const userUnRegisterController = async (req, res) => {
  const { id } = req;
  const { password } = req.body;

  const existingUserById = await UserModel.findById(id).exec();
  if (!existingUserById) return res.status(401).send({ errors: ['user not authenticated'] });

  const checkPassword = await compare(password, existingUserById.password)
  if (!checkPassword) return res.status(401).send({ errors: ['invalid credentials'] });


  await existingUserById.deleteOne();

  return res.send('User has been unregistered');
};

export default userUnRegisterController;