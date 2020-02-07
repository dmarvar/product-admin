import React, { useRef, useState } from "react";
import { TableS, Busqueda, BusquedaWrapper } from "./tableStyles";
import {
  useTable,
  useSortBy,
  useGlobalFilter
  // useBlockLayout,
  // useCallBack
} from "react-table";
// import { FixedSizeList } from "react-window";
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
  const [inputBusqueda, setInputBusqueda] = useState("");
  const count = preGlobalFilteredRows.length;
  const inputTextRef = useRef();
  return (
    <tr>
      <th colSpan={flatColumns.length}>
        <BusquedaWrapper>
          <span>Buscar: </span>
          <Busqueda
            value={globalFilter || ""}
            onChange={e => {
              setGlobalFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
            }}
            placeholder={`${count} registros...`}
          />
          {/* <Busqueda
            value={inputBusqueda}
            onChange={e => {
              setInputBusqueda(e.target.value);
            }}
            onKeyDown={e =>
              e.key === "Enter"
                ? setGlobalFilter(inputBusqueda || undefined)
                : ""
            } */}
          {/* /> */}
          {/* <button onClick={() => setGlobalFilter(inputBusqueda || undefined)}>
            Consultar
          </button> */}
        </BusquedaWrapper>
      </th>
    </tr>
  );
}

const diplayFilter = () => {
  return;
};

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
    // useBlockLayout,
    useSortBy
  );
  return (
    <TableS {...getTableProps()}>
      <thead>
        {filter && (
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
            flatColumns={flatColumns}
          />
        )}
        {headerGroups.map((headerGroup, i) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
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
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                onClick={() => (redirect ? redirect(row.original) : null)}
              >
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      )}
    </TableS>
  );
}

export default Table;
