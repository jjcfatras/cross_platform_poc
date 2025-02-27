import type { SolitoImageProps } from "solito/build/image/image.types";
import { SolitoImage } from "solito/image";

export type ImageProps = SolitoImageProps;

export const Image = ({ ...rest }: ImageProps) => <SolitoImage {...rest} />;
