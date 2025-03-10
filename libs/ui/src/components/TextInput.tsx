"use client";

import { useField } from "formik";
import {
  type TextInputProps as RNTextInputProps,
  TextInput as RNTextInput,
  View,
} from "react-native";
import { StyleSheet, useUnistyles } from "react-native-unistyles";

import { isFieldError } from "~/libs/utils/src/validation";

import { Text } from "./Text";

export type TextInputProps = RNTextInputProps & {
  name: string;
};

export const TextInput = ({ name, style, ...rest }: TextInputProps) => {
  const [, meta] = useField(name);
  const { theme } = useUnistyles();
  return (
    <View style={styles.container}>
      <RNTextInput
        placeholderTextColor={theme.colors.textSecondary}
        style={[styles.input(isFieldError(meta.touched, meta.error)), style]}
        {...rest}
      />
      {isFieldError(meta.touched, meta.error) && (
        <Text style={styles.errorMessage}>{meta.error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  errorMessage: {
    color: theme.colors.bad,
    marginTop: theme.spacing[2],
  },
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
}));
