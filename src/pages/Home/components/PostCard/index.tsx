import Button from "@/components/Button";
import Edit from "@/icons/Edit";
import Trash from "@/icons/Trash";
import { Post } from "@/redux/post/reducer";
import { parseISO, formatDistanceToNow } from "date-fns";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as Dialog from "@radix-ui/react-dialog";
import { useTypedSelector } from "@/redux/hooks";
import { User } from "@/redux/user/reducer";
import { Form } from "@/components/Form";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "@/services";

export const editPostSchema = yup.object().shape({
  title: yup.string().required("*Required field"),
  content: yup.string().required("*Required field"),
});

export type editPostData = yup.InferType<typeof editPostSchema>;

interface PostCardProps {
  post: Post;
}

const PostCard = (props: PostCardProps) => {
  const { id, title, username, created_datetime, content } = props.post;

  const user: User = useTypedSelector((store) => store.user);

  const formattedCreatedDatetime = formatDistanceToNow(
    parseISO(created_datetime)
  );

  const handleDeleteBtnClick = async () => {
    try {
      await api.delete(`/${id}/`);
    } catch (error) {
      console.log(error);
    }
  };

  const editPostForm = useForm<editPostData>({
    resolver: yupResolver(editPostSchema),
    defaultValues: {
      title,
      content,
    },
  });

  const {
    handleSubmit,
    formState: { errors, isDirty },
  } = editPostForm;

  const handleFormSubmit = (data: editPostData) => {
    console.log(data);
  };

  return (
    <div className="border border-custom-gray-500 rounded-2xl overflow-hidden">
      <header className="bg-primary py-[27px] px-[37px] flex justify-between">
        <h2 className="text-white">{title}</h2>
        {user.username === username && (
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

            <Dialog.Root>
              <Dialog.Trigger asChild>
                <Button>
                  <Edit />
                </Button>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="bg-black bg-opacity-50 data-[state=open]:animate-overlayShow fixed inset-0" />

                <Dialog.Content className="border border-custom-gray-500 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[660px] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white p-6 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                  <Dialog.Title className="mb-6">Edit item </Dialog.Title>

                  <FormProvider {...editPostForm}>
                    <form
                      onSubmit={handleSubmit(handleFormSubmit)}
                      className="space-y-6"
                    >
                      <Form.Field>
                        <Form.Label>Title</Form.Label>

                        <Form.Input name="title" placeholder="Title here" />

                        <Form.ErrorMessage error={errors.title?.message} />
                      </Form.Field>

                      <Form.Field>
                        <Form.Label>Content</Form.Label>

                        <Form.TextArea
                          name="content"
                          placeholder="Content here"
                        />

                        <Form.ErrorMessage error={errors.content?.message} />
                      </Form.Field>

                      <div className="flex justify-end gap-[25px]">
                        <Dialog.Close asChild>
                          <Button className="btn-outline-white w-[120px] h-8">
                            Cancel
                          </Button>
                        </Dialog.Close>

                        <Button
                          type="submit"
                          className="btn-success w-[120px] h-8"
                          disabled={!isDirty}
                        >
                          Save
                        </Button>
                      </div>
                    </form>
                  </FormProvider>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        )}
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
