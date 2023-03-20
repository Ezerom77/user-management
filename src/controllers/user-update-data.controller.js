import UserModel from "#Schemas/user.schema.js";

const userUpdateDataController = async (req, res) => {
  const { id } = req;
  const { name, surname } = req.body;

  const existingUserById = await UserModel.findById(id).exec();
  if (!existingUserById) return res.status(401).send('user not authenticated');

  existingUserById.name = name;
  existingUserById.surname = surname;

  await existingUserById.save();

  return res.send('User updated successfully')
};

export default userUpdateDataController;