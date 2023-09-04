import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Play";
        src: 
            url("https://fonts.gstatic.com/s/play/v17/6aez4K2oVqwIvtU2Hw.woff2") format("woff2"),
            url("https://fonts.gstatic.com/s/play/v17/6aez4K2oVqwIvtU2Hw.woff2") format(woff2);
    }

    @font-face {
        font-family: "Anton";
        src: 
            url("https://fonts.gstatic.com/s/play/v17/6aez4K2oVqwIvtU2Hw.woff2") format("woff2"),
            url("https://fonts.gstatic.com/s/anton/v23/1Ptgg87LROyAm3Kz-C8.woff2") format(woff2);
    }

    * {
        margin: 0;

        box-sizing: border-box;

        font-family: 'Play', sans-serif;
    }

    body {
        height: 100%;

        background-color: #1B1E2C;
    }

    .root-div {
        max-width: 1500px;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;

        margin: 100px auto;
    }

    .main-body-section {
        display: flex;
        flex-direction: column;
        gap: 50px;

        border-radius: 25px;

        padding: 25px;
    }

    .item-list-container {
        display: flex;
        flex-direction: column;
        gap: 75px;

        padding: 25px;
    }
`;

export default GlobalStyle