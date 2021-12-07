import { Flex, Grid, Heading, Stack, Text } from "@chakra-ui/layout";
import { Form, Formik } from "formik";
import { InputControl, SubmitButton } from "formik-chakra-ui";

const ChangePassword = () => {
  return (
    <Formik
      initialValues={{ password: "" }}
      onSubmit={(values) => {
        console.log(values);
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
              Forgot Password
            </Heading>
            <InputControl
              name="password"
              label="Password"
              inputProps={{
                placeholder: "Enter Password...",
                type: "password",
              }}
            />

            <SubmitButton>Change Password</SubmitButton>
          </Stack>
        </Grid>
      </Form>
    </Formik>
  );
};

export default ChangePassword;
