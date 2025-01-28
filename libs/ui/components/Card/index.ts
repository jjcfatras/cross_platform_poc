import { CardBase } from "./Card.Base";
import { CardBody } from "./Card.Body";
import { CardDivider } from "./Card.Divider";
import { CardSubTitle } from "./Card.SubTitle";
import { CardTitle } from "./Card.Title";

export const Card = Object.assign(CardBase, {
  Body: CardBody,
  Divider: CardDivider,
  SubTitle: CardSubTitle,
  Title: CardTitle,
});
