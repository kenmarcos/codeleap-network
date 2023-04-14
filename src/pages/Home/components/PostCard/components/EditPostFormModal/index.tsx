import Button from "@/components/Button";
import { Form } from "@/components/Form";
import Edit from "@/icons/Edit";
import * as Dialog from "@radix-ui/react-dialog";
import { FormProvider } from "react-hook-form";
import { useEditPost } from "./useEditPost";
import { CircleNotch } from "phosphor-react";
import { motion } from "framer-motion";

interface EditPostFormModalProps {
  title: string;
  content: string;
  postId: number;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditPostFormModal = (props: EditPostFormModalProps) => {
  const { title, content, postId, open, setOpen } = props;

  const {
    editPostForm,
    handleSubmit,
    handleFormSubmit,
    errors,
    isDirty,
    isLoading,
  } = useEditPost({ title, content, postId, setOpen });

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button className="duration-500 hover:scale-125">
          <Edit />
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black bg-opacity-50 data-[state=open]:animate-overlayShow fixed inset-0" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
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

                  <Form.TextArea name="content" placeholder="Content here" />

                  <Form.ErrorMessage error={errors.content?.message} />
                </Form.Field>

                <div className="flex justify-end gap-[25px]">
                  <Dialog.Close asChild>
                    <Button
                      className="btn-outline-white w-[120px] h-8"
                      disabled={isLoading}
                    >
                      Cancel
                    </Button>
                  </Dialog.Close>

                  <Button
                    type="submit"
                    className="btn-success w-[120px] h-8"
                    disabled={!isDirty || isLoading}
                  >
                    {isLoading ? (
                      <CircleNotch className="animate-spin" size={20} />
                    ) : (
                      "Save"
                    )}
                  </Button>
                </div>
              </form>
            </FormProvider>
          </Dialog.Content>
        </motion.div>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default EditPostFormModal;
