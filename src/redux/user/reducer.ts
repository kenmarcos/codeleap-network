import { ActionType, Action } from "@/actions/user/actionTypes";

export interface User {
  username: string;
}

export interface UserState {
  user: User;
}

const defaultState = {} as UserState;

const userReducer = (state: UserState = defaultState, action: Action) => {
  switch (action.type) {
    case ActionType.SIGNUP_USER:
      const { user } = action;
      return user;

    default:
      return state;
  }
};

export default userReducer;
