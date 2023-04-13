import Button from "@/components/Button";
import Edit from "@/icons/Edit";
import Trash from "@/icons/Trash";
import { Post } from "@/redux/post/reducer";
import { parseISO, formatDistanceToNow } from "date-fns";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { useTypedSelector } from "@/redux/hooks";
import { User } from "@/redux/user/reducer";

interface PostCardProps {
  post: Post;
}

const PostCard = (props: PostCardProps) => {
  const { id, title, username, created_datetime, content } = props.post;

  const user: User = useTypedSelector((store) => store.user);

  const formattedCreatedDatetime = formatDistanceToNow(
    parseISO(created_datetime)
  );

  const handleDeleteBtnClick = () => {
    console.log(`Deletar post de id ${id}`);
  };

  return (
    <div className="border border-custom-gray-500 rounded-2xl overflow-hidden">
      <header className="bg-primary py-[27px] px-[37px] flex justify-between">
        <h2 className="text-white">{title}</h2>
        {/* {user.username === username && ( */}
        <div className="flex space-x-5">
          <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
              <button>
                <Trash />
              </button>
            </AlertDialog.Trigger>

            <AlertDialog.Portal>
              <AlertDialog.Overlay className="bg-black bg-opacity-50 data-[state=open]:animate-overlayShow fixed inset-0" />

              <AlertDialog.Content className="border border-custom-gray-500 space-y-10 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[660px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white p-6 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <AlertDialog.Title>
                  Are you sure you want to delete this item?
                </AlertDialog.Title>

                <div className="flex justify-end gap-[25px]">
                  <AlertDialog.Cancel asChild>
                    <Button className="btn-outline-white w-[120px] h-8">
                      Cancel
                    </Button>
                  </AlertDialog.Cancel>

                  <AlertDialog.Action asChild>
                    <Button
                      className="btn-danger w-[120px] h-8"
                      onClick={handleDeleteBtnClick}
                    >
                      Delete
                    </Button>
                  </AlertDialog.Action>
                </div>
              </AlertDialog.Content>
            </AlertDialog.Portal>
          </AlertDialog.Root>

          <Button>
            <Edit />
          </Button>
        </div>
        {/* )} */}
      </header>

      <div className="p-6 space-y-4">
        <div className="text-custom-gray-600 flex justify-between">
          <h3 className="font-bold">@{username}</h3>

          <h3 className="font-normal">
            <time>{formattedCreatedDatetime}</time>
          </h3>
        </div>

        <p>{content}</p>
      </div>
    </div>
  );
};

export default PostCard;
