import styled from "styled-components";
import { useCloseOnClickAway, useCloseOnPressEscape } from "../Dialog/hooks";
import React, { PropsWithChildren, useCallback, useState } from "react";
import { Flex } from "../Flex";
import { Input } from "../input/Input";

type Props = {
  cellData: any;
  container: any;
  rowData: any;
  mapEdited: { [key: string]: boolean };
};

// let editedItems: { [key: string]: string } = {};

export const EditableCell: React.FC<Props> = ({
  cellData,
  container,
  rowData,
  mapEdited,
}) => {
  const [value, setValue] = useState<any>(rowData?.value);
  const [editing, setEditing] = useState<boolean>(false);

  const targetRef = React.useRef<HTMLDivElement>(null);

  const handleClick = (e: any) => {
    setEditing(true);
  };

  const handleHide = () => setEditing(false);

  const handleChange = (e: any) => {
    // setEditing(false);
    setValue(e.target.value);
  };

  const getData = useCallback(
    () => (
      <CellContainer
        ref={targetRef}
        onDoubleClick={handleClick}
        {...cellData.props}
      >
        {!mapEdited[rowData?.key] || mapEdited[rowData?.key] === false
          ? value
          : mapEdited[rowData?.key] === true &&
            targetRef && (
              <Flex ref={targetRef} fullSize>
                <Input
                  onChange={handleChange}
                  placeholder="write "
                  value={value}
                  autoFocus
                />
              </Flex>
            )}
      </CellContainer>
    ),
    [cellData.props, mapEdited, rowData?.key, value]
  );
  useCloseOnPressEscape(handleHide);
  useCloseOnClickAway(targetRef, handleHide, true);
  return getData();
};

const CellContainer = styled.div`
  display: flex;
  flex: 1 0 100%;
  align-items: center;
  height: 100%;
  overflow: hidden;
  margin: 0 -5px;
  padding: 5px;
  border: 1px dashed transparent;
`;
