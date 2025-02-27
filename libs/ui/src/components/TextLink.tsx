"use client";

import {
  type TextLinkProps as STextLinkProps,
  TextLink as STextLink,
} from "solito/link";

import { Text } from "./Text";

export type TypeLinkProps = STextLinkProps;

export const TextLink = ({ children, ...rest }: TypeLinkProps) => (
  <STextLink {...rest}>
    <Text color="inverse" type="link">
      {children}
    </Text>
  </STextLink>
);
