import { withUnistyles } from "react-native-unistyles";
import type { SolitoImageProps } from "solito/build/image/image.types";
import { SolitoImage } from "solito/image";

const UniImage = withUnistyles(SolitoImage);

export type ImageProps = SolitoImageProps;

export const Image = ({ ...rest }: ImageProps) => <UniImage {...rest} />;
