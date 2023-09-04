// Types
import { ItemCategory, rarities, RarityRoll } from './items-lists';

export default function GenerateListOfTables(numberOfItems: number, tables: ItemCategory[]): { displayTables: ItemCategory[], rarityRolls: RarityRoll[] } {
    const rarityRolls: RarityRoll[] = [];
    let displayTables: ItemCategory[] = [];

    if (tables.length) {
        for (let x = 0; x < numberOfItems; x++) {
            const rarityRoll = Math.floor(Math.random() * 100) + 1;

            let matchedRarity: rarities | undefined = undefined;

            if (rarityRoll >= 1 && rarityRoll <= 42) {
                // Common Items
                matchedRarity = MatchRarity(rarities.common, tables);
            } else if (rarityRoll >= 43 && rarityRoll <= 68) {
                // Uncommon Items
                matchedRarity = MatchRarity(rarities.uncommon, tables);
            } else if (rarityRoll >= 69 && rarityRoll <= 83) {
                // Rare Items
                matchedRarity = MatchRarity(rarities.rare, tables);
            } else if (rarityRoll >= 84 && rarityRoll <= 93) {
                // Epic Items
                matchedRarity = MatchRarity(rarities.epic, tables);
            } else if (rarityRoll >= 94 && rarityRoll <= 98) {
                // Legendary Items
                matchedRarity = MatchRarity(rarities.legendary, tables);
            } else {
                // Super Items
                matchedRarity = MatchRarity(rarities.super, tables);
            }
            
            let eligibleTables: ItemCategory[] = GetEligibleTables(matchedRarity, tables);

            AddItemOfRarityToReturnList(matchedRarity, eligibleTables);
            rarityRolls.push({ value: rarityRoll, color: matchedRarity });
        }
    
        displayTables = RemoveEmptyDisplayTablesFromDisplayTablesList(tables);
        rarityRolls.sort((a, b) => a.value - b.value);
    }

    return { displayTables, rarityRolls };
}



function AddItemOfRarityToReturnList(matchedRarity: rarities, eligibleTables: ItemCategory[]) {
    // Choose random eligible table.
    const chosenTable: ItemCategory = eligibleTables[ Math.floor(Math.random() * eligibleTables.length) ];

    // Get items of matching rarity from eligible table
    const chosenTableMatchingRarityItems: any[] = [];
    chosenTable.eligibleItems.forEach((item: any) => {
        if (item.rarity === matchedRarity) {
            chosenTableMatchingRarityItems.push(item);
        }
    })

    // Choose random item from filtered rarity table.
    const chosenItem: any = chosenTableMatchingRarityItems[Math.floor(Math.random() * chosenTableMatchingRarityItems.length)];
    
    // Add chosen item to list of items that will be generated.
    chosenTable.itemList.push(chosenItem);

    // Sort the table by rarity.
    const raritiesOrder = Object.values(rarities);
    chosenTable.itemList.sort((itemA, itemB) => raritiesOrder.indexOf(itemA.rarity) - raritiesOrder.indexOf(itemB.rarity));
}



function MatchRarity(rarityToMatch: rarities, itemsTables: ItemCategory[]): rarities {
    let matchedRarity: rarities = rarityToMatch;
    let rarityMatched: boolean = false;

    while (!rarityMatched) {
        const rarityList: string[] = Object.values(rarities);

        // Check if there are any tables that contain items of the rarity to match.
        itemsTables.forEach((table) => {
            table.eligibleRarities.forEach((rarity) => {
                if (rarity === rarityToMatch) {
                    rarityMatched = true;
                    matchedRarity = rarity;
                }
            })
        });

        // If no tables were found.
        if (!rarityMatched) {
            const currentRarityIndex: number = rarityList.indexOf(rarityToMatch);

            // If the rarity to match was "super", check "common" next.
            if (currentRarityIndex === rarityList.length - 1) {
                rarityToMatch = rarities[rarityList[0] as keyof typeof rarities];
            }
            // If the rarity to match was NOT "super", check the next highest rarity.
            // e.g "common" -> "uncommon". "rare" -> "epic". "legendary" -> "super".
            else {
                rarityToMatch = rarities[rarityList[currentRarityIndex + 1] as keyof typeof rarities];
            }

            console.log("No tables found with items of " + rarityList[currentRarityIndex] + " rarity");
            console.log("Checking for tables with items of " + rarityToMatch + " rarity");
        }
    }

    return matchedRarity;
}






function GetEligibleTables(matchedRarity: rarities, itemsTables: ItemCategory[]): ItemCategory[] {
    const eligibleTables: ItemCategory[] = [];
    
    // Gather tables that contain items of the rarity to match.
    itemsTables.forEach((table) => {
        table.eligibleRarities.forEach((rarity) => {
            if (rarity === matchedRarity) {
                eligibleTables.push(table);
            }
        })
    })

    return eligibleTables;
}



function RemoveEmptyDisplayTablesFromDisplayTablesList(itemTables: ItemCategory[]): ItemCategory[] {
    const returnTables: ItemCategory[] = [];

    itemTables.forEach((table: ItemCategory) => {
        if (table.itemList.length !== 0) {
            returnTables.push(table);
        }
    })

    return returnTables;
}