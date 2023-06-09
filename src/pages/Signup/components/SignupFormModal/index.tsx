import Button from "@/components/Button";
import { Form } from "@/components/Form";
import * as Dialog from "@radix-ui/react-dialog";
import { FormProvider } from "react-hook-form";
import { useSignup } from "./useSignup";
import { motion } from "framer-motion";

const SignupFormModal = () => {
  const { signupForm, handleSubmit, handleFormSubmit, errors, isDirty } =
    useSignup();

  return (
    <Dialog.Root defaultOpen>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black bg-opacity-50 fixed inset-0" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Dialog.Content
            onPointerDownOutside={(event) => event.preventDefault()}
            className="border border-custom-gray-500 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white p-6 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
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
                  <Button
                    type="submit"
                    className="btn-primary w-[120px] h-8 uppercase"
                    disabled={!isDirty}
                  >
                    Enter
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

export default SignupFormModal;
