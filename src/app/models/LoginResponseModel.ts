export interface UserResponseModel {
  id: number;
  fullname: string;
  dni: string;
  email: string;
  username: string;
}

export interface LoginResponseModel {
  token: string;
  user: UserResponseModel;
}
