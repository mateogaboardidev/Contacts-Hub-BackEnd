export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  tel: string;
}

export interface IUser {
  id?: string;
  name?: string;
  email?: string;
  tel?: string;
  createdAt?: Date;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
  tel?: string;
}
