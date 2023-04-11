import Button from "@/components/Button";
import { Form } from "@/components/Form";

const Signup = () => {
  return (
    <>
      <h2>Signup</h2>
      <Button className="btn-primary">Create</Button>

      <Form.Field>
        <Form.Label htmlFor="title">Title</Form.Label>

        <Form.Input id="title" />
      </Form.Field>

      <Form.Field>
        <Form.Label htmlFor="content">Content</Form.Label>

        <Form.TextArea id="content" />
      </Form.Field>
    </>
  );
};

export default Signup;
