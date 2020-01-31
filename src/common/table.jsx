import React from "react";
import styled from "styled-components";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

const TableS = styled.table`
  font-size: 13px;
  text-align: left;
  width: 100%;
  thead {
    background-color: ${p => p.theme.bgColor};
  }
  tbody tr:hover {
    border-left: 2px solid ${p => p.theme.cOrange};
    cursor: default;
  }
  tr {
    border: 1px solid ${p => p.theme.bgColorDark};
  }
  th {
    padding: 10px;
    user-select: none;
    color: white;
    border-bottom: 2px solid ${p => p.theme.bgColor};
    border-top: 2px solid ${p => p.theme.bgColor};
    &.isSortedDesc,
    &.isSortedAsc {
      border-bottom: 2px solid ${p => p.theme.cOrange};
    }
    span {
      color: ${p => p.theme.cOrange};
      font-size: 16px;
      margin-left: 10px;
    }
  }
  td {
    background-color: ${p => p.theme.bgColorLight};
    padding: 10px;
    color: white;
  }
`;

const BusquedaWrapper = styled.div`
  display: flex;
  margin: -10px;
  padding: 15px;
  justify-content: center;
  border-bottom: 3px solid ${p => p.theme.bgColorDark};
`;

const Busqueda = styled.input`
  /* width: 100%; */
  margin-left: 20px;
  padding: 10px;
  height: 18px;
  background: none;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  outline: none;
  &::placeholder {
    color: #ddd;
  }
`;

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter
}) {
  const count = preGlobalFilteredRows.length;

  return (
    <BusquedaWrapper>
      <span>Buscar: </span>
      <Busqueda
        value={globalFilter || ""}
        onChange={e => {
          setGlobalFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={`${count} registros...`}
        // style={{
        //   fontSize: "1.1rem",
        //   border: "0"
        // }}
      />
    </BusquedaWrapper>
  );
}

function Table({ columns = [], data = [], filter = null }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    flatColumns,
    preGlobalFilteredRows,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data
    },
    useGlobalFilter,
    useSortBy
  );
  return (
    <TableS {...getTableProps()}>
      <thead>
        {!filter && (
          <tr>
            <th
              colSpan={flatColumns.length}
              style={{
                textAlign: "left"
              }}
            >
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>
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
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()}>
                    {cell.column.Header === "Img." ? (
                      <img
                        src="https://lh4.googleusercontent.com/proxy/mcfCG9YuOzKjZlTIPsRw-uro57cZvt6MuJGr6kEF8TnHyGBBNHsQyv3oNL-JBv7xJH4sL9AhZ9QZlY5vA7zpQkNRQFnS7de0hsQFVAJOQyAgAFC_tGqFFsa4UGwPfHTpm4w20Q"
                        style={{
                          background: "white",
                          height: "50px",
                          width: "50px"
                        }}
                      />
                    ) : (
                      cell.render("Cell")
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </TableS>
  );
}

export default Table;
