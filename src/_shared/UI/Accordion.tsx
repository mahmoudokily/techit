import { ReactNode } from "react";
import { Box } from "./Box";
import { Flex } from "./Flex";
import { useState } from "react";
import { Typography } from "./Typography";
// import { AngleDown, AngleTop } from '../assets/svg';
import VerticalScrollContainer from "./VerticalScrollContainer";
import { Card } from "./Card";
import { Button } from "./Button";

interface Props extends React.ComponentPropsWithRef<typeof Flex> {
  label: string | ReactNode;
  children: ReactNode | ReactNode[] | string;
  maxHeight: number | number[];
  initialStatus: boolean;
}

export const Accordion: React.FC<Props> = ({
  label,
  children,
  maxHeight,
  initialStatus,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialStatus);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Card p={3} {...rest} borderRadius={5} border="1px solid #3D729C">
      <Flex
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
      >
        <Typography variant="title10">{label}</Typography>
        <Button withBorder={false} $fill={false} onClick={handleToggle}>
          {/* {isOpen ? <AngleTop size='5' /> : <AngleDown size='5' />} */}
        </Button>
      </Flex>
      {isOpen ? (
        <Box height={maxHeight} maxHeight={maxHeight} position="relative">
          <VerticalScrollContainer height="100%">
            {children}
          </VerticalScrollContainer>
        </Box>
      ) : null}
    </Card>
  );
};
