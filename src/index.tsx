import React from 'react';
import ReactDOM from 'react-dom/client';
// CSS
import GlobalStyle from './css/index.styles';
// Functions
import GenerateListOfTables from './typescript/table-list-generator';
// Components 
import TableOfItems from './components/TableOfItems';
import Header from "./components/header";
// Types 
import { ItemCategory, GetTableContentTables } from "./typescript/items-lists";

const App = () => {
    // Used as a consistent list of tables between renders and for updating the item pool tables list.
    const [tables, setTables] = React.useState<ItemCategory[]>(GetTableContentTables());
    // Used as the displayed list of generated items.
    const [{ displayTables, rarityRolls }, setDisplayTables] = React.useState(GenerateListOfTables(0,  tables));

    const GetItemPoolTables = (): ItemCategory[] => {
        const returnTables: ItemCategory[] = [];
        
        // Empty the current item lists of every table.
        tables.forEach((table: ItemCategory) => {
            table.itemList = [];
        });
        
        tables.forEach((table) => {
            if (table.isIncludedInItemPool) {
                returnTables.push(table);
            }
        });

        return returnTables;
    }

    const UpdateItems = () => {
        setDisplayTables(GenerateListOfTables(Math.floor(Math.random() * (25 - 15 + 1)) + 15, GetItemPoolTables()));
    }

    return (
        <>
            <GlobalStyle />
            <div className="root-div">
                <Header tables={ tables } updateItems={ UpdateItems } rarityRolls={ rarityRolls } />
                <div className="item-list-container" id="item-list">
                    { displayTables.map((table: ItemCategory, index: number) => {
                        return <TableOfItems table={ table } index={ index } mapSize={ tables.length } key={ index } />
                    })}
                </div>
            </div>
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<React.StrictMode><App /></React.StrictMode>);
