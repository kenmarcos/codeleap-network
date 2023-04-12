import { User } from "@/redux/user/reducer";
import { ActionType } from "./actionTypes";

export const signupUser = (user: User) => {
  return {
    type: ActionType.SIGNUP_USER,
    user,
  };
};
