import { Formik } from "formik";
import { TextInput, View } from "react-native";
import { mq, StyleSheet, useUnistyles } from "react-native-unistyles";

import { formSchema, isFieldError } from "~/libs/utils/src/validation";

import { Button } from "../Button";
import { Text } from "../Text";

export const DemoForm = () => {
  const { theme } = useUnistyles();
  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
      }}
      onSubmit={(values) => console.log({ values })}
      validateOnMount
      validationSchema={formSchema}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        touched,
        values,
      }) => (
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.containerInput}>
              <TextInput
                onBlur={handleBlur("firstName")}
                onChangeText={handleChange("firstName")}
                placeholder="First Name"
                placeholderTextColor={theme.colors.textSecondary}
                style={styles.input(
                  isFieldError(touched.firstName, errors.firstName),
                )}
                value={values.firstName}
              />
              {isFieldError(touched.firstName, errors.firstName) && (
                <Text style={styles.errorMessage}>{errors.firstName}</Text>
              )}
            </View>
            <View style={styles.containerInput}>
              <TextInput
                onBlur={handleBlur("lastName")}
                onChangeText={handleChange("lastName")}
                placeholder="Last Name"
                placeholderTextColor={theme.colors.textSecondary}
                style={styles.input(
                  isFieldError(touched.lastName, errors.lastName),
                )}
                value={values.lastName}
              />
              {isFieldError(touched.lastName, errors.lastName) && (
                <Text style={styles.errorMessage}>{errors.lastName}</Text>
              )}
            </View>
          </View>
          <View style={[styles.row]}>
            <View style={styles.containerInput}>
              <TextInput
                onBlur={handleBlur("phoneNumber")}
                onChangeText={(e) => {
                  let _e = e;

                  if (e.split("-")[0]?.length === 4) {
                    _e = e.slice(0, 3) + "-" + e.slice(3);
                  }

                  if (e.split("-")[1]?.length === 4) {
                    _e = e.slice(0, 7) + "-" + e.slice(7);
                  }

                  return handleChange("phoneNumber")(_e);
                }}
                placeholder="Phone Number"
                placeholderTextColor={theme.colors.textSecondary}
                style={styles.input(
                  isFieldError(touched.phoneNumber, errors.phoneNumber),
                )}
                value={values.phoneNumber}
              />
              {isFieldError(touched.phoneNumber, errors.phoneNumber) && (
                <Text style={styles.errorMessage}>{errors.phoneNumber}</Text>
              )}
            </View>
            <View style={styles.containerInput}>
              <TextInput
                onBlur={handleBlur("email")}
                onChangeText={handleChange("email")}
                placeholder="Email Address"
                placeholderTextColor={theme.colors.textSecondary}
                style={styles.input(isFieldError(touched.email, errors.email))}
                value={values.email}
              />
              {isFieldError(touched.email, errors.email) && (
                <Text style={styles.errorMessage}>{errors.email}</Text>
              )}
            </View>
          </View>
          <Button onPress={() => handleSubmit()} style={styles.submitButton}>
            Submit
          </Button>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: theme.spacing[4],
    width: "100%",
  },
  containerInput: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  errorMessage: { color: theme.colors.bad, marginTop: theme.spacing[2] },
  input: (isError: boolean) => ({
    backgroundColor: theme.colors.surface,
    borderColor: isError ? theme.colors.bad : theme.colors.brand,
    borderRadius: 8,
    borderWidth: 2,
    color: theme.colors.textPrimary,
    flex: 1,
    fontFamily: "Roboto",
    fontSize: theme.fontSizing[4],
    height: 50,
    padding: theme.spacing[4],
  }),
  row: {
    alignItems: "center",
    flex: 1,
    flexDirection: {
      [mq.only.width("lg")]: "row",
      [mq.only.width("xs", "lg")]: "column",
    },
    flexWrap: "wrap",
    gap: theme.spacing[4],
    justifyContent: "center",
    marginBottom: theme.spacing[4],
  },
  submitButton: {
    alignSelf: "center",
    width: 200,
  },
}));
