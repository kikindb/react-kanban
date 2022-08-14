export interface AuthData {
  id: string;
  name: string;
  email: string;
  image: null | string;
  token: string;
}

export interface AuthModel {
  authData: AuthData;
}
