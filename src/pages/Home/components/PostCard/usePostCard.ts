import { useAppDispatch, useTypedSelector } from "@/redux/hooks";
import { User } from "@/redux/user/reducer";
import { formatDistanceToNow, parseISO } from "date-fns";
import { useState } from "react";

export const usePostCard = (created_datetime: string) => {
  const dispatch = useAppDispatch();
  const user: User = useTypedSelector((store) => store.user);
  const [open, setOpen] = useState(false);

  const formattedCreatedDatetime = formatDistanceToNow(
    parseISO(created_datetime)
  );

  return { user, open, setOpen, formattedCreatedDatetime };
};
