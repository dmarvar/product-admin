import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 300px;
  overflow: scroll;
`;

const Table = styled.table`
  width: 100%;
  font-size: 14px;
  thead {
    background-color: ${p => p.theme.bgColor};
  }
  tbody tr:hover {
    border-bottom: 1px solid ${p => p.theme.cOrange};
  }
  tr {
    border: 1px solid ${p => p.theme.bgColorDark};
  }
  th {
    padding: 10px;
    color: white;
  }
  td {
    background-color: ${p => p.theme.bgColorLight};
    padding: 10px;
    color: white;
  }
`;

export default function orders({ data }) {
  console.log(data);
  if (!data[0]) return <div />;
  return (
    <Wrapper>
      <Table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((i, k) => (
              <th key={i + k}>{i.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((o, k) => (
            <tr key={o + k}>
              {Object.values(o).map((l, k1) => (
                <td key={l + k1}>{l}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
}
