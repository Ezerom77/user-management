import { Type } from "@sinclair/typebox";


export const idDTOSchema = Type.String({
  format: 'uuid',
  errorMessage: {
    type: 'Invalid type, must be a string',
    format: 'Invalid format, must be uuidv4',
  }
})
export const nameDTOSchema = Type.String({
  minLength: 2,
  maxLength: 20,
  errorMessage: {
    minLength: "Name must be at least 2 characters",
    maxLength: 'Name must have 20 characters max'
  }
})
export const surnameDTOSchema = Type.String({
  minLength: 4,
  maxLength: 50,
  errorMessage: {
    minLength: "Surname must be at least 4 characters",
    maxLength: 'Surname must have 50 characters max'
  }
})
export const emailDTOSchema = Type.String({
  format: 'email',
  errorMessage: {
    type: 'Invalid type, must be a string',
    format: 'Invalid format it must comply with RFC 5322',
  }
})
export const passwordDTOSchema = Type.String({
  format: 'password',
  minLength: 10,
  maxLength: 25,
  errorMessage: {
    type: 'Invalid type, must be a string',
    format: 'Invalid format it must have at least an uppercase letter and lowercase letter and a number',
    minLength: "Password must be at least 10 characters",
    maxLength: 'Purname must have 25 characters max'
  }
})