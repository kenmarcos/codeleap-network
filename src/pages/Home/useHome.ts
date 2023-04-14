import { useAppDispatch, useTypedSelector } from "@/redux/hooks";

export const useHome = () => {
  const { username } = useTypedSelector((store) => store.user);
  const dispatch = useAppDispatch();

  return {
    username,
    dispatch,
  };
};
