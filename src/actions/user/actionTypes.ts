import { User } from "@/redux/user/reducer";

export enum ActionType {
  SIGNUP_USER = "SIGNUP_USER",
}

interface ActionSignupUser {
  type: ActionType.SIGNUP_USER;
  user: User;
}

export type Action = ActionSignupUser;
