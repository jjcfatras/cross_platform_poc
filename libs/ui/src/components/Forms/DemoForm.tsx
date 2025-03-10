import { Formik } from "formik";
import { View } from "react-native";
import { mq, StyleSheet } from "react-native-unistyles";

import { formSchema } from "~/libs/utils/src/validation";

import { Button } from "../Button";
import { TextInput } from "../TextInput";

export const DemoForm = () => (
  <Formik
    initialValues={{
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    }}
    onSubmit={(values) => console.log(JSON.stringify({ values }, null, "\t"))}
    validateOnMount
    validationSchema={formSchema}
  >
    {({ handleBlur, handleChange, handleSubmit, values }) => (
      <View style={styles.container}>
        <View style={styles.row}>
          <TextInput
            name="firstName"
            onBlur={handleBlur("firstName")}
            onChangeText={handleChange("firstName")}
            placeholder="First Name"
            value={values.firstName}
          />
          <TextInput
            name="lastName"
            onBlur={handleBlur("lastName")}
            onChangeText={handleChange("lastName")}
            placeholder="Last Name"
            value={values.lastName}
          />
        </View>
        <View style={[styles.row]}>
          <TextInput
            keyboardType="number-pad"
            name="phoneNumber"
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
            value={values.phoneNumber}
          />
          <TextInput
            name="email"
            onBlur={handleBlur("email")}
            onChangeText={handleChange("email")}
            placeholder="Email Address"
            value={values.email}
          />
        </View>
        <Button onPress={() => handleSubmit()}>Submit</Button>
      </View>
    )}
  </Formik>
);

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: theme.spacing[4],
    width: "100%",
  },
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
