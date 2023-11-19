import { Typography } from "../Typography";

import BaseTable, * as ReactBaseTableExtra from "react-base-table";

export interface ColumnShape<T = unknown> {
  /**
   * Unique key for each column
   */
  key: React.Key;
  /**
   * Class name for the column cell
   */
  className?: ReactBaseTableExtra.CallOrReturn<
    string,
    {
      cellData: any;
      columns: ColumnShape<T>[];
      column: ColumnShape<T>;
      columnIndex: number;
      rowData: T;
      rowIndex: number;
    }
  >;
  /**
   * Class name for the column header
   */
  headerClassName?: ReactBaseTableExtra.CallOrReturn<
    string,
    {
      columns: ColumnShape<T>[];
      column: ColumnShape<T>;
      columnIndex: number;
      headerIndex: number;
    }
  >;
  /**
   * Custom style for the column cell, including the header cells
   */
  style?: React.CSSProperties;
  /**
   * Title of the column header
   */
  title?: string | React.ReactNode;
  /**
   * Data key for the cell value, could be "a.b.c"
   */
  dataKey?: string;
  /**
   * Custom cell data getter
   * The handler is of the shape of `({ columns, column, columnIndex, rowData, rowIndex }) => node`
   */
  dataGetter?: ReactBaseTableExtra.CallOrReturn<
    React.ReactNode,
    {
      columns: ColumnShape<T>[];
      column: ColumnShape<T>;
      columnIndex: number;
      rowData: T;
      rowIndex: number;
    }
  >;
  /**
   * Alignment of the column cell
   */
  align?: ReactBaseTableExtra.Alignment;
  /**
   * Flex grow style, defaults to 0
   */
  flexGrow?: number;
  /**
   * Flex shrink style, defaults to 1 for flexible table and 0 for fixed table
   */
  flexShrink?: number;
  /**
   * The width of the column, gutter width is not included
   */
  width: number | string;
  /**
   * Maximum width of the column, used if the column is resizable
   */
  maxWidth?: number;
  /**
   * Minimum width of the column, used if the column is resizable
   */
  minWidth?: number;
  /**
   * Whether the column is frozen and what's the frozen side
   */
  frozen?: ReactBaseTableExtra.FrozenDirection;
  /**
   * Whether the column is hidden
   */
  hidden?: boolean;
  /**
   * Whether the column is resizable, defaults to false
   */
  resizable?: boolean;
  /**
   * Whether the column is sortable, defaults to false
   */
  sortable?: boolean;
  /**
   * Custom column cell renderer
   * The renderer receives props `{ cellData, columns, column, columnIndex, rowData, rowIndex, container, isScrolling }`
   */
  cellRenderer?: ReactBaseTableExtra.CallOrReturn<
    React.ReactNode,
    {
      cellData: any;
      columns: ColumnShape<T>[];
      column: ColumnShape<T>;
      columnIndex: number;
      rowData: T;
      rowIndex: number;
      container: BaseTable<T>;
      isScrolling?: boolean;
    }
  >;
  tableRef?: any;
  /**
   * Custom column header renderer
   * The renderer receives props `{ columns, column, columnIndex, headerIndex, container }`
   */
  headerRenderer?: ReactBaseTableExtra.CallOrReturn<
    React.ReactNode,
    {
      columns: ColumnShape<T>[];
      column: ColumnShape<T>;
      columnIndex: number;
      headerIndex: number;
      container: BaseTable<T>;
    }
  >;
  [key: string]: any;
  format?: Format;
}
export type CellProps<T> = {
  cellData: any;
  columns: ReactBaseTableExtra.ColumnShape<T>[];
  column: ReactBaseTableExtra.ColumnShape<T>;
  columnIndex: number;
  rowData: T;
  rowIndex: number;
  container: BaseTable<T>;
  isScrolling?: boolean;
};

export type RendererFormat =
  | "string"
  | "checkbox"
  | "color"
  | "stringHeaderRenderer"
  | "tooltip";
export type ExtraProps = {
  stringVariant?: React.ComponentProps<typeof Typography>["variant"];
  loadingMore?: boolean;
};
export type Format = "checkbox" | "color" | string;
