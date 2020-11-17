import React from "react";
import styled from "styled-components";

const TableSection = styled.section`
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 10px 5px 5px grey;
`
const Table = styled.table`
  text-decoration: none;
  border-collapse: collapse;
  width: 100%;
  text-align: center;
`
const Td = styled.td`
  white-space: pre - wrap;
  padding: 10px 5px;
  line-height: 13px;
  vertical-align: middle;
  border: 3px solid #354251;
  cursor:pointer;
  &:hover{
      background-color: green;
  }
`
const Tr = styled.tr`
  &:nth-child(even) {
    background-color: blanchedalmond;
  }
`

export default function RenderTable({ arrItems, onUserClick }) {
    return (
        <TableSection>
            <Table>
                <tbody>
                    {arrItems.map((item, index) => (
                        <Tr key={index}>
                            {item.map(i => (
                                <Td onClick={() => onUserClick(i.id)}>{i.amount}</Td>
                            ))}
                        </Tr>
                    ))}
                </tbody>
            </Table>
        </TableSection>
    )
}