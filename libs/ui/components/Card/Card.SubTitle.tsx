import { Text, type TextProps } from "../Text";

type CardSubTitleProps = Omit<TextProps, "color" | "type">;

export const CardSubTitle = ({ children, ...rest }: CardSubTitleProps) => (
  <Text color="secondary" type="h4" {...rest}>
    {children}
  </Text>
);
