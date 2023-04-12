import Button from "@/components/Button";
import { Form } from "@/components/Form";
import * as Dialog from "@radix-ui/react-dialog";
import { FormProvider } from "react-hook-form";
import { useSignup } from "../../useSignup";

const SignupFormModal = () => {
  const { signupForm, handleSubmit, handleFormSubmit, errors } = useSignup();

  return (
    <Dialog.Root defaultOpen>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black bg-opacity-50 data-[state=open]:animate-overlayShow fixed inset-0" />

        <Dialog.Content
          onPointerDownOutside={(event) => event.preventDefault()}
          className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white p-6 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
        >
          <Dialog.Title className="mb-6">
            Welcome to CodeLeap network!
          </Dialog.Title>

          <FormProvider {...signupForm}>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <Form.Field>
                <Form.Label>Please enter your username</Form.Label>

                <Form.Input name="username" placeholder="Username" />

                <Form.ErrorMessage error={errors.username?.message} />
              </Form.Field>

              <div className="mt-4 flex justify-end">
                <Button type="submit" className="btn-primary uppercase">
                  Enter
                </Button>
              </div>
            </form>
          </FormProvider>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default SignupFormModal;
