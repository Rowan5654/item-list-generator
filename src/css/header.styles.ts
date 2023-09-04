import styled from "styled-components";

const HeaderStyles = styled.div` 
    .header-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }

    .main-title {
        color: white;
    }

    .categories-table {
        width: 1000px;
        
        border-collapse: collapse;
        border: none;
    }

    .categories-table td {
        border: 1px solid #2B2F42;

        padding: 8px;
        text-align: center;
    }

    .categories-table tr:first-child td {
        border-top: none;
    }

    .categories-table tr:last-child td {
        border-bottom: none;

        background-color:
    }

    .categories-table tr td:first-child {
        border-left: none;
    }

    .categories-table tr td:last-child {
        border-right: none;
    }

    .table-data {
        width: 100%;
        height: 100%;

        border: none;
        border-radius: 8px;

        color: white;
        font-size: 16px;

        padding: 16px;
    }

    .selected-table-data {
        background-color: rgba(69, 73, 91, 0.75);
    }

    .selected-table-data:hover {
        background-color: rgba(69, 73, 91, 1);
    }

    .deselected-table-data {
        background-color: transparent;
    }

    .deselected-table-data:hover {
        background-color: rgba(69, 73, 91, 0.25);
    }

    .generate-items {
        font-size: 18px;

        width: 180px;
        height: 40px;
    }

    .rarity-rolls {
        display: flex;
        gap: 25px;
        align-items: center;

        color: white;
    }

    .rolls {
        width: 600px;

        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .roll {
        padding: 6px 8px;

        border-radius: 4px;
    }
`;

export default HeaderStyles;