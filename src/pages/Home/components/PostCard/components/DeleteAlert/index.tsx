import Button from "@/components/Button";
import Trash from "@/icons/Trash";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { CircleNotch } from "phosphor-react";
import { useDeleteAlert } from "./useDeleteAlert";

interface DeleteAlertProps {
  postId: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteAlert = (props: DeleteAlertProps) => {
  const { postId, setOpen } = props;

  const { isLoading, handleDeleteBtnClick } = useDeleteAlert(postId, setOpen);

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
              <Button
                className="btn-outline-white w-[120px] h-8"
                disabled={isLoading}
              >
                Cancel
              </Button>
            </AlertDialog.Cancel>

            <Button
              className="btn-danger w-[120px] h-8"
              onClick={handleDeleteBtnClick}
              disabled={isLoading}
            >
              {isLoading ? (
                <CircleNotch className="animate-spin" size={20} />
              ) : (
                "Delete"
              )}
            </Button>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default DeleteAlert;
