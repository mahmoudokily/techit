import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

const statusColor: any = {
  ACTIVE: "#78931A",
  AGREED: "#FFC700",
  ENDED: "#E84120",
  DELETED: "#999999",
  null: "#000000",
};

export const StatusColorCircle = styled.div<{ status: string } & SpaceProps>`
  width: 12px;
  height: 12px;
  color: white;
  background-color: ${({ status }) => statusColor[status] as any};
  border-radius: 50%;
  ${space}
`;
