import { deletePost } from "@/actions/post/actions";
import Button from "@/components/Button";
import Trash from "@/icons/Trash";
import { useAppDispatch } from "@/redux/hooks";
import { api } from "@/services";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

interface DeleteAlertProps {
  postId: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteAlert = (props: DeleteAlertProps) => {
  const { postId, setOpen } = props;

  const dispatch = useAppDispatch();

  const handleDeleteBtnClick = async () => {
    try {
      await api.delete(`/${postId}/`);

      dispatch(deletePost(postId) as any);

      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button className="duration-500 hover:scale-125">
          <Trash />
        </Button>
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
  );
};

export default DeleteAlert;
