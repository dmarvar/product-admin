import React from "react";
import { TableW, Busqueda, BusquedaWrapper } from "./tableStyles";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useBlockLayout
} from "react-table";
import { FixedSizeList } from "react-window";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import Loader from "../../login/loader";

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  flatColumns
}) {
  const count = preGlobalFilteredRows.length;
  return (
    <tr>
      <th
        colSpan={flatColumns.length}
        style={{
          textAlign: "left",
          width: "100%"
        }}
      >
        <BusquedaWrapper>
          <span>Buscar: </span>
          <Busqueda
            value={globalFilter || ""}
            onChange={e => {
              setGlobalFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
            }}
            placeholder={`${count} registros...`}
          />
        </BusquedaWrapper>
      </th>
    </tr>
  );
}

function Table({
  columns = [],
  data = [],
  filter = null,
  redirect = null,
  loading = false
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    flatColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    totalColumnsWidth
  } = useTable(
    {
      columns,
      data
    },
    useGlobalFilter,
    useBlockLayout,
    useSortBy
  );

  const RenderRow = React.useCallback(
    ({ index, style }) => {
      const row = rows[index];
      prepareRow(row);
      return (
        <tr
          {...row.getRowProps({
            style
          })}
          // style={{ height: "auto" }}
          onClick={() => (redirect ? redirect(row.original) : null)}
        >
          {row.cells.map(cell => {
            return (
              <td
                {...cell.getCellProps()}
                style={{ width: "auto", height: "100%", flex: "1" }}
              >
                {cell.render("Cell")}
              </td>
            );
          })}
        </tr>
      );
    },
    [prepareRow, rows]
  );

  return (
    <TableW {...getTableProps()}>
      <thead>
        {!filter && (
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
            flatColumns={flatColumns}
          />
        )}
        {headerGroups.map((headerGroup, i) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            style={{ display: "flex", width: "100%" }}
          >
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className={
                  column.isSorted
                    ? column.isSortedDesc
                      ? "isSortedAsc"
                      : "isSortedDesc"
                    : ""
                }
                style={{ flex: "1" }}
              >
                {column.render("Header")}
                <span>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <FontAwesomeIcon icon={faSortDown} />
                    ) : (
                      <FontAwesomeIcon icon={faSortUp} />
                    )
                  ) : (
                    ""
                  )}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      {loading ? (
        <Loader></Loader>
      ) : (
        <tbody {...getTableBodyProps()}>
          <FixedSizeList
            height={1500}
            itemCount={rows.length}
            itemSize={130}
            width={"100%"}
          >
            {RenderRow}
          </FixedSizeList>
        </tbody>
      )}
    </TableW>
  );
}

export default Table;
