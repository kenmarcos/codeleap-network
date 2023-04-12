import Button from "@/components/Button";
import { Form } from "@/components/Form";
import { FormProvider } from "react-hook-form";
import { useCreatePost } from "./useCreatePost";
import { createPostSchema } from "./schema";

const CreatePostForm = () => {
  const {
    createPostForm,
    handleSubmit,
    handleFormSubmit,
    errors,
    dirtyFields,
  } = useCreatePost();

  const fieldsLenght = Object.keys(createPostSchema.fields).filter(
    (field) => field !== "username"
  ).length;

  return (
    <div className="p-6 border border-custom-gray-500 rounded-2xl space-y-6">
      <h2>What’s on your mind?</h2>

      <FormProvider {...createPostForm}>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
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

          <div className="flex justify-end">
            <Button
              type="submit"
              className="btn-primary w-[120px] h-8"
              disabled={Object.keys(dirtyFields).length !== fieldsLenght}
            >
              Create
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreatePostForm;
