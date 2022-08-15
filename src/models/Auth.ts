export interface AuthData {
  id: string;
  name: string;
  email: string;
  image: null | string;
  admin: boolean;
  token: string;
}

export interface AuthModel {
  authData: AuthData;
}
