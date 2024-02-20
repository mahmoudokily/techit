import { t } from "i18next";
import React, { ReactElement, useCallback, useMemo } from "react";
import * as ReactBaseTableExtra from "react-base-table";
import BaseTable, { BaseTableProps } from "react-base-table";
import "react-base-table/styles.css";
import styled from "styled-components";
import { ColorProps, LayoutProps, color, layout } from "styled-system";
import { Box } from "../Box";
import { Checkbox } from "../Checkbox";
import { SimpleLoader } from "../Loader";
import { Typography } from "../Typography";
import {
  Empty,
  LoadingLayer,
  LoadingMoreLayer,
  LoadingMoreText,
} from "./TableStyledElement";
// import "./style.scss";
import { CellProps, ColumnShape, ExtraProps, RendererFormat } from "./types";
import { Flex } from "../Flex";

export type TableProps = LayoutProps &
  Partial<BaseTableProps> &
  ColorProps & {
    loading?: boolean;
    selectedKey?: number | string;
    selectedValue?: number | string;
    selectedColor?: string;
  } & ExtraProps;

export const TableHeader = styled.div<TableProps>(
  layout,
  color
) as React.FC<TableProps>;

const stringRenderer = (rendererExtraProps: ExtraProps) =>
  React.memo(({ cellData, rowIndex }: CellProps<any>) => {
    return (
      <Box key={cellData + rowIndex}>
        <Typography fontSize={[10, 10, 10, 10, 12, 12]} {...rendererExtraProps}>
          {cellData}
        </Typography>
      </Box>
    );
  });

const tooltipRenderer = (rendererExtraProps: ExtraProps) =>
  React.memo(({ cellData, rowIndex }: CellProps<any>) => (
    <Box key={cellData + rowIndex}>
      <Typography
        variant={rendererExtraProps.stringVariant}
        tooltipId={String(rowIndex) + cellData}
      >
        {cellData}
      </Typography>
    </Box>
  ));

const stringHeaderRenderer = (rendererExtraProps: ExtraProps) =>
  React.memo(({ column, columnIndex }: CellProps<any>) => (
    <Box key={(column.title || " ") + columnIndex}>
      <Typography
        capitalizeFirstLetter={column.title === "kWh" ? false : true}
        variant={rendererExtraProps.stringVariant}
        fontWeight="bold"
      >
        {t(column.title as string)}
      </Typography>
    </Box>
  ));

const checkboxRenderer = (rendererExtraProps: ExtraProps) =>
  React.memo(({ rowIndex }: CellProps<any>) => <Checkbox />);

const colorRenderer =
  (rendererExtraProps: ExtraProps) =>
  ({
    cellData: { color: colorPropRenderer, colorText },
    rowIndex,
  }: CellProps<any>) =>
    <Box key={colorText + rowIndex}>TODO create component with color</Box>;

export const Table = <T,>({
  components,
  renderers,
  loadingMore,
  emptyRendererLoadingComponent,
  emptyRendererErrorText,
  emptyRendererEmptyText,
  onEndReached,
  tooltipProps,
  selectedKey,
  selectedColor,
  selectedValue,
  estimatedRowHeight,
  tableRef,
  loading,
  ...props
}: React.PropsWithChildren<TableProps>): ReactElement<any, any> | null => {
  const stringVariant = props.stringVariant;
  const rendererExtraProps = useMemo(
    () => ({ tooltipProps, stringVariant }),
    [tooltipProps, stringVariant]
  );
  const defaultRenderers: Record<
    RendererFormat,
    (cellProps: CellProps<T>) => ReactElement
  > = useMemo(
    () => ({
      string: stringRenderer(rendererExtraProps),
      tooltip: tooltipRenderer(rendererExtraProps),
      stringHeaderRenderer: stringHeaderRenderer(rendererExtraProps),
      checkbox: checkboxRenderer(rendererExtraProps),
      color: colorRenderer(rendererExtraProps),
      ...renderers,
    }),
    [renderers, rendererExtraProps]
  );

  const onEndReachedInner = useCallback(
    (...args: any) => {
      if (onEndReached) onEndReached(args);
    },
    [onEndReached]
  );

  const renderOverlay = () => {
    if (loadingMore)
      return (
        <LoadingMoreLayer>
          <LoadingMoreText>Loading</LoadingMoreText>
          <SimpleLoader />
        </LoadingMoreLayer>
      );
    if (loading)
      return (
        <LoadingLayer>
          <SimpleLoader />
        </LoadingLayer>
      );

    return null;
  };

  const emptyTableRenderer = useCallback(
    () => (loading || loadingMore ? null : <Empty>No data available</Empty>),
    [loading, loadingMore]
  );

  const rowClassName = useMemo(
    () =>
      ({ rowData }: any) => {
        return selectedKey
          ? rowData[selectedKey] === selectedValue
            ? "selectedRow"
            : ""
          : "";
      },
    [selectedKey, selectedValue]
  );
  const footerRenderer = useCallback(
    () => (
      <Flex bg="white" height="50px">
        <SimpleLoader />{" "}
      </Flex>
    ),
    []
  );
  const Cell = useCallback(
    (cellProps: CellProps<T>) => {
      const format = cellProps.column.format || "string";
      const Renderer =
        defaultRenderers[format as RendererFormat] || defaultRenderers.string;
      const MemoizedRenderer = React.memo(Renderer);
      return <MemoizedRenderer {...cellProps} />;
    },
    [defaultRenderers]
  );
  const TableHeaderCell = useCallback(
    (cellProps: CellProps<T>) => {
      const Renderer = defaultRenderers.stringHeaderRenderer;
      const MemoizedRenderer = React.memo(Renderer);
      return (<MemoizedRenderer {...cellProps} />) as any;
    },
    [defaultRenderers]
  );

  const defaultComponents = useMemo(
    () => ({
      TableCell: Cell,
      TableHeaderCell: TableHeaderCell as any,
    }),
    [Cell, TableHeaderCell]
  );

  return (
    <ReactBaseTableExtra.AutoResizer>
      {({ width, height }) => (
        <BaseTable
          {...{ width, height }}
          ref={tableRef}
          headerHeight={50}
          estimatedRowHeight={estimatedRowHeight}
          rowClassName={rowClassName}
          overlayRenderer={renderOverlay}
          onEndReachedThreshold={50}
          footerRenderer={loadingMore ? footerRenderer() : null}
          emptyRenderer={emptyTableRenderer}
          onEndReached={onEndReachedInner}
          components={{ ...defaultComponents, ...components }}
          {...props}
        />
      )}
    </ReactBaseTableExtra.AutoResizer>
  );
};

Table.defaultProps = {
  stringVariant: "body10",
};

const Sort: Record<
  ReactBaseTableExtra.SortOrder,
  ReactBaseTableExtra.SortOrder
> = {
  asc: "asc",
  desc: "desc",
};

const ReactBaseTable = {
  ...ReactBaseTableExtra,
  Constants: { Sort },
};

//create helper type

type SortOrder = ReactBaseTableExtra.SortOrder;
export { ReactBaseTable };
export type { ColumnShape, SortOrder };
