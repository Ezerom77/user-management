import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import addErrors from "ajv-errors";
import { idDTOSchema, nameDTOSchema, surnameDTOSchema, emailDTOSchema, passwordDTOSchema } from "../lib/dto-types.js"

const RegisterDTOSchema = Type.Object({
  _id: idDTOSchema,
  name: nameDTOSchema,
  surname: surnameDTOSchema,
  email: emailDTOSchema,
  password: passwordDTOSchema,
}, {
  additionalProperties: false,
  errorMessage: "Incorrect object format"
})
const ajv = new Ajv({ allErrors: true });
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
addFormats(ajv, ['email', 'uuid']).addKeyword('kind').addKeyword('modifier')
addErrors(ajv);

const validateSchema = ajv.compile(RegisterDTOSchema)

const userRegisterDTO = (req, res, next) => {
  const isDTOValid = validateSchema(req.body);

  if (!isDTOValid)
    return res
      .status(400)
      .send({ errors: validateSchema.errors.map(error => error.message) })

  next();
};

export default userRegisterDTO;