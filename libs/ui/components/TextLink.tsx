import { withUnistyles } from "react-native-unistyles";
import {
  TextLink as STextLink,
  type TextLinkProps as STextLinkProps,
} from "solito/link";

import { Text, type TextProps } from "./Text";

const UniTextLink = withUnistyles(STextLink);

export type TypeLinkProps = Omit<STextLinkProps, "children"> &
  Pick<TextProps, "children">;

export const TextLink = ({ children, ...rest }: TypeLinkProps) => (
  <UniTextLink {...rest}>
    <Text color="inverse" type="link">
      {children}
    </Text>
  </UniTextLink>
);
