// CSS
import TableListStyles from "../css/item-list.styles";
// Types
import { ItemCategory } from "../typescript/items-lists";

type TableOfItemsParams = {
    table: ItemCategory,
    index: number,
    mapSize: number,
}

export default function TableOfItems(props: TableOfItemsParams) {
    return (
        <TableListStyles>
            <div className="table-information-container">
                <h1 className="table-title">{ props.table.title }</h1>
                <table className="item-list-table">
                    { props.table.tableColumns ? 
                        <colgroup>
                            { props.table.tableColumns.map((columnWidth: string, index: number) => {
                                return (
                                    <col style={{ width: columnWidth }} key={ index }></col>
                                );
                            })}
                        </colgroup>
                    : ""}
                    <tbody>
                        <tr>
                            { props.table.tableHeaders.map((header: string, index: number) => {
                                return <th key={ index }>{ header }</th>
                            })}
                        </tr>
                        { props.table.itemList.map((item: any, tableRowIndex: number) => {
                            return (
                                <tr key={ tableRowIndex }>
                                    { Object.keys(item).map((key, tableDateIndex) => {
                                        if (tableDateIndex != Object.keys(item).length - 1) {
                                            if (key === "cost" || key == "costPerDose") {
                                                return <td style={ DetermineRarityStyle(item.rarity) } key={ tableDateIndex }>{ item[key] }eb</td>
                                            } else if (key == "concealable" || key == "portable") {
                                                return <td style={ DetermineRarityStyle(item.rarity) } key={ tableDateIndex }>{ item[key] == true ? "Yes" : "No" }</td>
                                            } else if (key == "netrunnerDVToBeatFeature") {
                                                return <td style={ DetermineRarityStyle(item.rarity) } key={ tableDateIndex }>DV{ item[key] }</td>
                                            } else {
                                                return <td style={ DetermineRarityStyle(item.rarity) } key={ tableDateIndex }>{ item[key] }</td>
                                            }
                                        }
                                    })}
                                </tr>
                            )
                        }) }
                    </tbody>
                </table>
            </div>
            { props.index !== props.mapSize - 1 ? 
                <div className="table-divider"></div>
            : ""}
        </TableListStyles>
    );
}

function DetermineRarityStyle(rarity: string): React.CSSProperties {
    switch (rarity) {
        case "common":
            return { color: "white", border: "2px solid white" };
        case "uncommon":
            return { color: "#66ff7a", border: "2px solid #66ff7a" };
        case "rare":
            return { color: "#7dadff", border: "2px solid #7dadff" };
        case "epic":
            return { color: "#bc5eff", border: "2px solid #bc5eff" };
        case "legendary":
            return { color: "#ffa95e", border: "2px solid #ffa95e" };
        default: 
            return { color: "grey", border: "2px solid grey" };
    }
}