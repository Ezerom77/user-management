import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addErrors from "ajv-errors";
import { passwordDTOSchema } from "../lib/dto-types.js"

const UnRegisterDTOSchema = Type.Object({

  password: passwordDTOSchema,
}, {
  additionalProperties: false,
  errorMessage: "Incorrect object format"
})
const ajv = new Ajv({ allErrors: true });
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
addErrors(ajv);

const validateSchema = ajv.compile(UnRegisterDTOSchema)

const userUnRegisterDTO = (req, res, next) => {
  const isDTOValid = validateSchema(req.body);

  if (!isDTOValid)
    return res
      .status(400)
      .send({ errors: validateSchema.errors.map(error => error.message) })

  next();
};

export default userUnRegisterDTO;