import { SALT } from "#constants/salt.js";
import UserModel from "#Schemas/user.schema.js";
import { compare, hash } from "bcrypt";

const userUpdatePasswordController = async (req, res) => {
  const { id } = req;
  const { oldPassword, newPassword } = req.body;

  const existingUserById = await UserModel.findById(id).exec();
  if (!existingUserById) return res.status(401).send({ errors: ['user not authenticated'] });

  const checkPassword = await compare(oldPassword, existingUserById.password)
  if (!checkPassword) return res.status(401).send({ errors: ['invalid credentials'] });

  const hashedPassword = await hash(newPassword, SALT);

  existingUserById.password = hashedPassword;

  await existingUserById.save();

  return res.send('Password updated successfully')
};

export default userUpdatePasswordController;