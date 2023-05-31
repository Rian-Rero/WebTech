import styled from "styled-components";
import { Table } from "antd";

export const TabelaWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const TabelaContainer = styled.div`
  min-width: 100%;
  margin: 0 auto;
`;

export const StyledTable = styled(Table)`
  .custom-row {
    background-color: #0a0a30;
    color: white;
    font-family: "Poppins";
    text-align: center;
    &:hover {
      background-color: #9998c5;
    }
  }

  .ant-table-thead .ant-table-cell {
    background-color: #2f2e6f;
    color: white;
    text-align: center;
  }

  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td {
    border: none;
    text-align: center;
    &:hover {
      background-color: #9998c5;
    }
  }

  &&& .ant-table-row:hover > td {
    background-color: inherit;
    text-align: center;
  }

  &&& {
    .ant-table-cell:last-child {
      border: none;
      text-align: center;
    }
  }
`;

export const Botao = styled.button`
  background-color: #2f2e6f;
  margin-left: 40px;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 20px;
  font-size: 20px;
`;

export const Div2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 400px;
  color: white;
  text-align: center;
  align-items: center;
  gap: 5px;
`;
