import styled from "styled-components";

export const TableS = styled.table`
  font-size: 12px;
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
export const TableW = styled.table`
  font-size: 12px;
  text-align: left;
  width: 100%;
  thead {
    background-color: ${p => p.theme.bgColor};
    tr {
      width: 100% !important;
    }
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

export const BusquedaWrapper = styled.div`
  display: flex;
  margin: -10px;
  padding: 15px;
  justify-content: center;
  border-bottom: 3px solid ${p => p.theme.bgColorDark};
`;

export const Busqueda = styled.input`
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
