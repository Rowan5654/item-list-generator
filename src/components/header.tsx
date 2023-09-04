import React from "react";
// CSS
import HeaderStyles from "../css/header.styles";
// Item List Info
import { GetAllTableTitles, ItemCategory, RarityRoll, rarities } from "../typescript/items-lists";

type HeaderParams = {
    tables: ItemCategory[],
    updateItems: () => void,
    rarityRolls: RarityRoll[],
}

export default function Header(props: HeaderParams) {
    const tableRows = [];
    const numberOfRows = 4;
    const numberOfColumns = 4;
    const tableData = GetAllTableTitles();

    const GenerateTableRowData = (currentIndex: number) => {
        const returnData = [];
        let buttonText = "";

        for (let x = currentIndex; x < currentIndex + numberOfColumns; x++) {
            if (tableData[x] === "NET Architecture Passwords, Control Nodes, and Files") {
                buttonText = "NET Architecture Features";
            }
            else {
                buttonText = tableData[x];
            }
            
            returnData.push(
                <td key={ x }>
                    <button 
                        className="table-data selected-table-data" 
                        id={ "table-data-" + x } 
                        onClick={ () => UpdateCategorySelection("table-data-" + x) }>
                            { buttonText }
                    </button>
                </td>
            )
        }

        return returnData;
    }

    for (let x = 0; x < numberOfRows; x++) {
        tableRows.push( 
            <tr key={ x }>
                { GenerateTableRowData(x * numberOfRows) }
            </tr>
        )
    }

    const StyleRarityRoll = (roll: rarities): React.CSSProperties => {
        return roll === rarities.common ? { color: "white", border: "2px solid white" } :
                roll === rarities.uncommon  ? { color: "#66ff7a", border: "2px solid #66ff7a" } :
                roll === rarities.rare  ? { color: "#7dadff", border: "2px solid #7dadff" } :
                roll === rarities.epic  ? { color: "#bc5eff", border: "2px solid #bc5eff" } :
                roll === rarities.legendary  ? { color: "#ffa95e", border: "2px solid #ffa95e" } :
                { color: 'grey', border: "2px solid grey" }
    }

    const UpdateCategorySelection = (elementID: string) => {
        const element = document.getElementById(elementID);

        if (element) {
            props.tables.forEach((table) => {
                if (table.title === element.innerHTML || ("NET Architecture Features" === element.innerHTML && table.title === "NET Architecture Passwords, Control Nodes, and Files")) {
                    // Selecting an element
                    if (element.className.includes("deselected-table-data")) {
                        element.classList.value = "table-data selected-table-data";
                        table.isIncludedInItemPool = true;
                    }
                    // Deselecting an element
                    else {
                        element.classList.value = "table-data deselected-table-data";
                        table.isIncludedInItemPool = false;
                    }
                }
            })
        }
    }

    
    return (
        <HeaderStyles>
            <div className="main-body-section header-section">
                <h1 className="main-title">Random Item Generator</h1>
                <table className="categories-table">
                    <colgroup>
                        <col className="table-column" style={{ width: "25%" }}></col>
                        <col className="table-column" style={{ width: "25%" }}></col>
                        <col className="table-column" style={{ width: "25%" }}></col>
                        <col className="table-column" style={{ width: "25%" }}></col>
                    </colgroup>
                    <tbody>
                        { tableRows }
                    </tbody>
                </table>
                <button className="generate-items" onClick={ () => { props.updateItems() } }>Generate Items</button>
                { props.rarityRolls.length ? 
                    <div className="rarity-rolls">
                        <p>Rarity Rolls:</p>
                        <div className="rolls">
                            { props.rarityRolls.map((roll: RarityRoll, index: number) => {
                                return <p className="roll" style={ StyleRarityRoll(roll.color) } key={ index } >{ roll.value }</p>
                            })}
                        </div>
                    </div>
                : ""}
            </div>
        </HeaderStyles>
    )
}