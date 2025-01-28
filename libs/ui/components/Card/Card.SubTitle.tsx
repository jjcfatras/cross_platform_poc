import { Text, type TextProps } from "../Text";

export const CardSubTitle = ({ children, ...rest }: TextProps) => {
  return (
    <Text color="secondary" type="h4" {...rest}>
      {children}
    </Text>
  );
};
