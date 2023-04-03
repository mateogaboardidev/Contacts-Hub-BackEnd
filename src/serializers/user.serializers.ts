import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUser, IUserRequest, IUserUpdate } from "../interfaces/users";

const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  password: yup.string().required(),
  tel: yup.string().required(),
});

const userUpdateSerializer: SchemaOf<IUserUpdate> = yup.object().shape({
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  password: yup.string().notRequired(),
  tel: yup.string().required(),
});

const userWithoutPasswordSerializer: SchemaOf<IUser> = yup.object().shape({
  id: yup.string().notRequired(),
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  tel: yup.string().required(),
  createdAt: yup.date().notRequired(),
});

export { userSerializer, userWithoutPasswordSerializer, userUpdateSerializer };
