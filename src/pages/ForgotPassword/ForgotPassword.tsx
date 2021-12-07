import { Flex, Grid, Heading, Stack, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import { useSendMailForgotPasswordMutation } from "../../store/api/authApi";

const ForgotPassword = () => {
  const toast = useToast();

  const [sendMail, { isLoading, data, isError, error }] =
    useSendMailForgotPasswordMutation();
  if (isError) {
    toast({
      title: (error as any).data.message,
      status: "error",
      duration: 5000,
    });
  }
  console.log(data);

  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={(values) => {
        console.log(values);
        sendMail({ ...values });
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
              name="email"
              label="Email"
              inputProps={{
                type: "email",
                placeholder: "Enter Email...",
              }}
            />

            <SubmitButton isLoading={isLoading}>Send Mail</SubmitButton>
          </Stack>
        </Grid>
      </Form>
    </Formik>
  );
};

export default ForgotPassword;
