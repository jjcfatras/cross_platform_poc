import { withUnistyles } from "react-native-unistyles";
import {
  type TextLinkProps as STextLinkProps,
  TextLink as STextLink,
} from "solito/link";

import { type TextProps, Text } from "./Text";

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
