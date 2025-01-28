import { Text, type TextProps } from "../Text";

type CardSubTitleProps = Omit<TextProps, "color" | "type">;

export const CardTitle = ({ children, ...rest }: CardSubTitleProps) => (
  <Text type="h1" {...rest}>
    {children}
  </Text>
);
