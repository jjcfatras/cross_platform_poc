import { Text, type TextProps } from "../Text";

export const CardTitle = ({ children, ...rest }: TextProps) => {
  return (
    <Text type="h2" {...rest}>
      {children}
    </Text>
  );
};
