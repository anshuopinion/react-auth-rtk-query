import { Grid, Heading, Stack } from "@chakra-ui/layout";
import { Form, Formik } from "formik";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import { useSignupUserMutation } from "../../store/api/authApi";

const Signup = () => {
  const [signupUser, { data, isLoading }] = useSignupUserMutation();
  console.log(data);

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={(values) => {
        signupUser({ ...values });
      }}
    >
      <Form>
        <Grid h="100vh" placeItems="center">
          <Stack p="4" boxShadow="xl" borderRadius="md">
            <Heading
              color="teal"
              textAlign="center"
              fontSize="lg"
              fontWeight="semibold"
            >
              Signup
            </Heading>
            <InputControl
              name="name"
              label="Name"
              inputProps={{
                placeholder: "Enter Name...",
              }}
            />
            <InputControl
              name="email"
              label="Email"
              inputProps={{
                type: "email",
                placeholder: "Enter Email...",
              }}
            />
            <InputControl
              name="password"
              label="Password"
              inputProps={{
                placeholder: "Enter Password...",
                type: "password",
              }}
            />
            <SubmitButton isLoading={isLoading}>Signup</SubmitButton>
          </Stack>
        </Grid>
      </Form>
    </Formik>
  );
};

export default Signup;
