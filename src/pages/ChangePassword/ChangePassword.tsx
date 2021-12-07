import { Flex, Grid, Heading, Stack, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import { useParams } from "react-router-dom";
import { useResetPasswordMutation } from "../../store/api/authApi";

const ChangePassword = () => {
  const { token } = useParams();
  const toast = useToast();
  console.log(token);

  const [resetPassword, { data, isError, isLoading, error, isSuccess }] =
    useResetPasswordMutation();
  if (isError) {
    toast({
      title: (error as any).data.message,
      status: "error",
      duration: 5000,
    });
  }
  console.log(data);
  if (isSuccess) {
    toast({
      title: "Password changed successfully",
      status: "success",
      duration: 5000,
    });
  }

  return (
    <Formik
      initialValues={{ password: "" }}
      onSubmit={(values) => {
        if (token) resetPassword({ ...values, token });
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

            <SubmitButton isLoading={isLoading}>Change Password</SubmitButton>
          </Stack>
        </Grid>
      </Form>
    </Formik>
  );
};

export default ChangePassword;
