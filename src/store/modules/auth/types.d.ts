export interface IAuthState {
  isAuth: boolean;
  id: string | null;
}

interface ILoginPayloadData {
  email: string;
  password: string;
}

interface ISignupPayloadData {
  email: string;
  password: string;
}
