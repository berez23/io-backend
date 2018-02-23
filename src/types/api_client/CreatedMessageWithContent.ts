/**
 *
 */

import * as t from "io-ts";
import { number, string } from "io-ts";
import { strictInterfaceWithOptionals } from "../../utils/types";
import { FiscalCode } from "../api/FiscalCode";
import { MessageContent } from "../api/MessageContent";

// required attributes
const CreatedMessageWithContentR = t.interface({});

// optional attributes
const CreatedMessageWithContentO = t.partial({
  content: MessageContent,
  fiscalCode: FiscalCode,
  id: string,
  senderServiceId: string,
  timeToLive: number
});

export const CreatedMessageWithContent = strictInterfaceWithOptionals(
  CreatedMessageWithContentR.props,
  CreatedMessageWithContentO.props,
  "CreatedMessageWithContent"
);

export type CreatedMessageWithContent = t.TypeOf<typeof CreatedMessageWithContent>;