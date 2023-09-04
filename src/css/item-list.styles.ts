import styled from "styled-components";

const TableListStyles = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    .table-information-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .table-title {
        color: lightgrey;
    }
    
    .item-container {
        display: flex;

        border: 1px solid black;
    }

    .fa-dice-d20 {
        font-size: 18px;
    }
    
    table {
        width: 100%;

        table-layout: fixed;

        border-collapse: collapse;

        font-size: 20px;
    }

    th, td {
        padding: 10px;

        text-align: center;
        vertical-align: center;
    }

    th {
        color: lightgrey;
    }

    .table-divider {
        width: 100%;

        border: 1px solid lightgrey;
    }
`;

export default TableListStyles;