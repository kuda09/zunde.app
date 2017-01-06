export interface SignInModel {
    username: string;
    password: string;
}

export interface SignInResponseModel {
  token: string,
  data: Object
}
