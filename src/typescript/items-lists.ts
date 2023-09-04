export type ItemCategory = {
    title: string,
    tableHeaders: string[],
    tableColumns?: string[],
    itemList: 
        MeleeWeapon[] | RangedWeapon[] | WeaponAttachment[] | Ammo[] | ExoticWeapon[] | 
        Armor[] | Gear[] | Clothing[] |
        StreetDrug[] |
        Cyberware[] | CyberdeckHardware[] |
        Program[] | BlackICE[] | NETArchitectureFloors[] | NETArchitectureFeature[] | NETArchitectureDemon[];
    eligibleItems: 
        MeleeWeapon[] | RangedWeapon[] | WeaponAttachment[] | Ammo[] | ExoticWeapon[] | 
        Armor[] | Gear[] | Clothing[] |
        StreetDrug[] |
        Cyberware[] | CyberdeckHardware[] |
        Program[] | BlackICE[] | NETArchitectureFloors[] | NETArchitectureFeature[] | NETArchitectureDemon[],
    eligibleRarities: rarities[],
    isIncludedInItemPool: boolean
}

export type RarityRoll = {
    value: number,
    color: rarities
}

export enum rarities {
    common = "common",
    uncommon = "uncommon",
    rare = "rare",
    epic = "epic", 
    legendary = "legendary",
    super = "super"
}

export function GetAllTableTitles(): string[] {
    const returnTitles: string[] = []; 
    const tables: ItemCategory[] = GetTableContentTables();

    for (let x = 0; x < tables.length; x++) {
        returnTitles.push(tables[x].title);
    }

    return returnTitles;
}

export function GetItemPoolContentTables(): ItemCategory[] {
    const allTables: ItemCategory[] = GetTableContentTables();
    const returnTables: ItemCategory[] = [];

    for (let x = 0; x < allTables.length; x++) {
        if (allTables[x].isIncludedInItemPool) {
            returnTables.push(allTables[x]);
        }
    }

    return returnTables;
}

export function GetTableContentTables(): ItemCategory[] {
    return [
        GetMeleeWeaponsTableContent(),
        GetRangedWeaponsTableContent(), 
        GetWeaponAttachmentsTableContent(), 
        GetAmmoTableContent(),
        GetExoticTableContent(),
        GetArmorTableContent(),
        GetGearTableContent(),
        GetClothingTableContent(),
        GetStreetDrugsTableContent(),
        GetCyberwareTableContent(),
        GetCyberdeckHardwareTableContent(),
        GetProgramsTableContent(),
        GetBlackICETableContent(),
        GetNETArchitectureFloorsTableContent(),
        GetNETArchitectureFeatureTableContent(),
        GetNETArchitectureDemonTableContent()
    ];
}

type MeleeWeapon = {
    name: string,
    weaponType: string,
    hands: "One Handed" | "Two Handed",
    damage: string,
    rateOfFire: number,
    concealable: boolean,
    cost: number,
    rarity: rarities
}

type RangedWeapon = {
    name: string,
    relatedWeaponSkill: "Handgun" | "Shoulder Arms" | "Heavy Weapons" | "Archery",
    singleShotDamage: string,
    magSize: number,
    ammoType: string,
    rateOfFire: number,
    hands: "One Handed" | "Two Handed",
    concealable: boolean,
    cost: number,
    rarity: rarities
}

type WeaponAttachment = {
    name: string,
    eligibilities: string,
    cost: number,
    rarity: rarities
}

type Ammo = {
    name: string,
    varietiesSoldIn: string,
    quantitiesSoldIn: string,
    cost: number,
    rarity: rarities
}

type ExoticWeapon = {
    name: string,
    description: string,
    cost: number,
    rarity: rarities
}

type Armor = {
    name: string,
    stoppingPower: number,
    penalty: string,
    cost: number,
    rarity: rarities
}

type Gear = {
    name: string,
    description: string,
    cost: number,
    rarity: rarities
}

type Clothing = {
    name: string,
    fashionClass: "Bag Lady Chic" | "Gang Colors" | "Generic Chic" | "Bohemian" | "Leisurewear" | "Nomad Leathers" | "Asia Pop" | "Urban Flash" | "Businesswear" | "High Fashion", 
    clothingItem: "Pants" | "Shirt" | "Jacket" | "Shoes" | "Jewelry" | "Sunglasses" | "Glasses" | "Contact Lenses" | "Hat"
    cost: number,
    rarity: rarities
}

type StreetDrug = {
    name: string,
    primaryEffect: string,
    primaryEffectDuration: string,
    secondaryEffect: string,
    secondaryEffectDV: number,
    costPerDose: number,
    rarity: rarities
}

type Cyberware = {
    name: string,
    cyberpartType: "Fashionware" | "Neuralware" | "Cyberoptics" | "Cyberaudio" | "Internal Body Cyberware" | "External Body Cyberware" | "Cyberlimbs" | "Cyberlimb Arm" | "Cyberlimb Leg" | "Borgware",
    install: "Mall" | "Clinic" | "Hospital" | "Self Install",
    description: string,
    humanityLoss: number,
    cost: number,
    rarity: rarities
}

type CyberdeckHardware = {
    name: string,
    description: string,
    cost: number,
    rarity: rarities
}

type Program = {
    name: string,
    class: "Booster" | "Defender" | "Anti-Program Attacker" | "Anti-Personnel Attacker"
    attack: number,
    defense: number,
    rez: number,
    effect: string,
    cost: number,
    rarity: rarities
}

type BlackICE = {
    name: string,
    class: "Anti-Program Black ICE" | "Anti-Personnel Black ICE",
    perception: number,
    speed: number
    attack: number,
    defense: number,
    rez: number,
    effect: string,
    cost: number,
    rarity: rarities
}

type NETArchitectureFloors = {
    numberOfFloors: string,
    maxControlNodes: string,
    portable: boolean,
    cost: number,
    rarity: rarities
}

type NETArchitectureFeature = {
    netrunnerDVToBeatFeature: number,
    cost: number,
    rarity: rarities
}

type NETArchitectureDemon = {
    name: string,
    rez: number,
    interface: number,
    netActions: number,
    combatNumber: number,
    cost: number,
    rarity: rarities
}

const GetMeleeWeaponsTableContent = (): ItemCategory => {
    return {
        title: "Melee Weapons",
        tableHeaders: ["Name", "Weapon Type", "Hands to Use", "Damage", "Rate of Fire", "Concealable", "Cost"],
        itemList: [],
        eligibleItems: GetMeleeWeapons(),
        eligibleRarities: [rarities.common, rarities.uncommon, rarities.rare],
        isIncludedInItemPool: true
    }
}

const GetRangedWeaponsTableContent = (): ItemCategory => {
    return {
        title: "Ranged Weapons",
        tableHeaders: ["Name", "Related Skill", "Single Shot Damage", "Mag Size", "Ammo Type", "Rate Of Fire", "Hands to Use", "Concealable", "Cost"],
        itemList: [],
        eligibleItems: GetRangedWeapons(),
        eligibleRarities: [rarities.common, rarities.uncommon, rarities.rare],
        isIncludedInItemPool: true
    }
}

const GetWeaponAttachmentsTableContent = (): ItemCategory => {
    return {
        title: "Weapon Attachments",
        tableHeaders: ["Name", "Eligible Weapons", "Cost"],
        tableColumns: ["25%", "50%", "25%"],
        itemList: [],
        eligibleItems: GetWeaponAttachments(),
        eligibleRarities: [rarities.uncommon, rarities.rare],
        isIncludedInItemPool: true
    }
}

const GetAmmoTableContent = (): ItemCategory => {
    return {
        title: "Ammo",
        tableHeaders: ["Name", "Ammo Varieties Sold In", "Quantities Sold In", "Cost"],
        tableColumns: ["15%", "45%", "30%", "10%"],
        itemList: [],
        eligibleItems: GetAmmo(),
        eligibleRarities: [rarities.common, rarities.uncommon, rarities.rare],
        isIncludedInItemPool: true
    }
}

const GetExoticTableContent = (): ItemCategory => {
    return {
        title: "Exotic Weapons",
        tableHeaders: ["Name", "Description", "Cast"],
        tableColumns: ["15%", "60%", "15%"],
        itemList: [],
        eligibleItems: GetExoticWeapons(),
        eligibleRarities: [rarities.uncommon, rarities.rare, rarities.epic, rarities.legendary, rarities.super],
        isIncludedInItemPool: true
    }
}

const GetArmorTableContent = (): ItemCategory => {
    return {
        title: "Armor",
        tableHeaders: ["Name", "Damage Stopping Power (SP)", "Armor Penalty", "Cost"],
        itemList: [],
        eligibleItems: GetArmor(),
        eligibleRarities: [rarities.common, rarities.uncommon, rarities.rare, rarities.epic, rarities.legendary],
        isIncludedInItemPool: true
    }
}

const GetGearTableContent = (): ItemCategory => {
    return {
        title: "Gear",
        tableHeaders: ["Name", "Description", "Cost"],
        tableColumns: ["15%", "75%", "10%"],
        itemList: [],
        eligibleItems: GetGear(),
        eligibleRarities: [rarities.common, rarities.uncommon, rarities.rare, rarities.epic, rarities.legendary],
        isIncludedInItemPool: true
    }
}

const GetClothingTableContent = (): ItemCategory => {
    return {
        title: "Clothing",
        tableHeaders: ["Name", "Fashion Class", "Clothing Type", "Cost"],
        tableColumns: ["25%", "40%", "25%", "10%"],
        itemList: [],
        eligibleItems: GetClothing(),
        eligibleRarities: [rarities.common, rarities.uncommon, rarities.rare, rarities.epic, rarities.legendary],
        isIncludedInItemPool: true
    }
}

const GetStreetDrugsTableContent = (): ItemCategory => {
    return {
        title: "Street Drugs",
        tableHeaders: ["Name", "Primary Effect", "Primary Effect DV", "Seconday Effect (DV)", "Secondary Effect", "Cost Per Dose"],
        tableColumns: ["10%", "30%", "10%", "10%", "30%", "10%"],
        itemList: [],
        eligibleItems: GetStreetDrugs(),
        eligibleRarities: [rarities.common],
        isIncludedInItemPool: true
    }
}

const GetCyberwareTableContent = (): ItemCategory => {
    return {
        title: "Cyberware",
        tableHeaders: ["Name", "Cyberpart Type", "Where to install?", "Description", "Humanity Loss", "Cost"],
        tableColumns: ["12.5%", "12.5%", "10%", "50%", "10%", "7.5%"],
        itemList: [],
        eligibleItems: GetCyberware(),
        eligibleRarities: [rarities.common, rarities.uncommon, rarities.rare, rarities.epic, rarities.legendary],
        isIncludedInItemPool: true
    }
}

const GetCyberdeckHardwareTableContent = (): ItemCategory => {
    return {
        title: "Cyberdeck Hardware",
        tableHeaders: [ "Name", "Description", "Cost" ],
        tableColumns: ["20%", "70%", "10%"],
        itemList:[],
        eligibleItems: GetCyberdeckHardware(),
        eligibleRarities: [rarities.uncommon],
        isIncludedInItemPool: true
    }
}

const GetProgramsTableContent = (): ItemCategory => {
    return {
        title: "Programs",
        tableHeaders: [ "Name", "Class", "Attack", "Defense", "Rez (HP)", "Effect", "Cost" ],
        tableColumns: ["12.5%", "12.5%", "7.5%", "7.5%", "7.5%", "45%", "7.5%"],
        itemList: [],
        eligibleItems: GetPrograms(),
        eligibleRarities: [rarities.common, rarities.uncommon],
        isIncludedInItemPool: true
    }
}

const GetBlackICETableContent = (): ItemCategory => {
    return {
        title: "Black ICE",
        tableHeaders: [ "Name", "Class", "Perception", "Speed", "Attack", "Defense", "Rez (HP)", "Effect", "Cost" ],
        tableColumns: ["10%", "10%", "10%", "7.5%", "7.5%", "7.5%", "7.5%", "32.5%", "7.5%"],
        itemList: [],
        eligibleItems: GetBlackICE(),
        eligibleRarities: [rarities.common, rarities.uncommon, rarities.rare, rarities.epic],
        isIncludedInItemPool: true
    }
}

const GetNETArchitectureFloorsTableContent = (): ItemCategory => {
    return {
        title: "NET Architecture Floors",
        tableHeaders: ["Number Of Floors", "Max Control Nodes", "Are these floors portable?", "Cost"],
        itemList: [],
        eligibleItems: GetNETArchitectureFloors(),
        eligibleRarities: [rarities.epic, rarities.legendary, rarities.super],
        isIncludedInItemPool: true
    }
}

const GetNETArchitectureFeatureTableContent = (): ItemCategory => {
    return {
        title: "NET Architecture Passwords, Control Nodes, and Files",
        tableHeaders: ["Netrunner DV to Beat Feature", "Cost"],
        itemList: [],
        eligibleItems: GetNETArchitectureFeatures(),
        eligibleRarities: [rarities.rare, rarities.epic, rarities.legendary, rarities.super],
        isIncludedInItemPool: true
    }
}

const GetNETArchitectureDemonTableContent = (): ItemCategory => {
    return {
        title: "NET Architecture Demons",
        tableHeaders: ["Name", "Rez (HP)", "Interface", "NET Actions", "Combat Number", "Cost"],
        itemList: [],
        eligibleItems: GetNETArchitectureDemons(),
        eligibleRarities: [rarities.epic, rarities.legendary, rarities.super],
        isIncludedInItemPool: true
    }
}

function GetMeleeWeapons(): MeleeWeapon[] {
    const commonItems: MeleeWeapon[] = [
        { name: "Combat Knife", weaponType: "Light", hands: "One Handed", damage: "1 d6", rateOfFire: 2, concealable: true, cost: 50, rarity: rarities.common },
        { name: "Tomahawk", weaponType: "Light", hands: "One Handed", damage: "1 d6", rateOfFire: 2, concealable: true, cost: 50, rarity: rarities.common },
        
        { name: "Baseball Bat", weaponType: "Medium", hands: "Two Handed", damage: "2 d6", rateOfFire: 2, concealable: false, cost: 50, rarity: rarities.common },
        { name: "Crowbar", weaponType: "Medium", hands: "Two Handed", damage: "2 d6", rateOfFire: 2, concealable: false, cost: 50, rarity: rarities.common },
        { name: "Machete", weaponType: "Medium", hands: "One Handed", damage: "2 d6", rateOfFire: 2, concealable: false, cost: 50, rarity: rarities.common }
    ];
    const uncommonItems: MeleeWeapon[] = [
        { name: "Lead Pipe", weaponType: "Heavy", hands: "One Handed", damage: "3 d6", rateOfFire: 2, concealable: false, cost: 100, rarity: rarities.uncommon },
        { name: "Sword/Kitana", weaponType: "Heavy", hands: "One Handed", damage: "3 d6", rateOfFire: 2, concealable: false, cost: 100, rarity: rarities.uncommon },
        { name: "Spiked Bat", weaponType: "Heavy", hands: "Two Handed", damage: "3 d6", rateOfFire: 2, concealable: false, cost: 100, rarity: rarities.uncommon }
    ];
    const rareItems: MeleeWeapon[] = [
        { name: "Chainsaw", weaponType: "Very Heavy", hands: "Two Handed", damage: "4 d6", rateOfFire: 1, concealable: false, cost: 500, rarity: rarities.rare },
        { name: "Sledgehammer", weaponType: "Very Heavy", hands: "Two Handed", damage: "4 d6", rateOfFire: 1, concealable: false, cost: 500, rarity: rarities.rare },
        { name: "Helicopter Blade", weaponType: "Very Heavy", hands: "Two Handed", damage: "4 d6", rateOfFire: 1, concealable: false, cost: 500, rarity: rarities.rare },
        { name: "Naginata", weaponType: "Very Heavy", hands: "Two Handed", damage: "4 d6", rateOfFire: 1, concealable: false, cost: 500, rarity: rarities.rare }
    ];

    return commonItems.concat(uncommonItems, rareItems);
};

const GetRangedWeapons = (): RangedWeapon[] => {
    const commonItems: RangedWeapon[] = [
        { name: "Medium Pistol", relatedWeaponSkill: "Handgun", singleShotDamage: "2 d6", magSize: 12, ammoType: "Medium Pistol", rateOfFire: 2, hands: "One Handed", concealable: true, cost: 50, rarity: rarities.common },
    ];
    const uncommonItems: RangedWeapon[] = [
        { name: "Heavy Pistol", relatedWeaponSkill: "Handgun", singleShotDamage: "3 d6", magSize: 8, ammoType: "Heavy Pistol", rateOfFire: 2, hands: "One Handed", concealable: true, cost: 100, rarity: rarities.uncommon },
        { name: "Very Heavy Pistol", relatedWeaponSkill: "Handgun", singleShotDamage: "4 d6", magSize: 8, ammoType: "Very Heavy Pistol", rateOfFire: 1, hands: "One Handed", concealable: false, cost: 100, rarity: rarities.uncommon },
        { name: "SMG", relatedWeaponSkill: "Handgun", singleShotDamage: "2 d6", magSize: 30, ammoType: "Medium Pistol", rateOfFire: 1, hands: "One Handed", concealable: true, cost: 100, rarity: rarities.uncommon },
        { name: "Heavy", relatedWeaponSkill: "Handgun", singleShotDamage: "3 d6", magSize: 40, ammoType: "Heavy Pistol", rateOfFire: 1, hands: "One Handed", concealable: false, cost: 100, rarity: rarities.uncommon },
        { name: "Bows & Crossbows", relatedWeaponSkill: "Archery", singleShotDamage: "4 d6", magSize: 0, ammoType: "Arrow", rateOfFire: 1, hands: "Two Handed", concealable: false, cost: 100, rarity: rarities.uncommon },
    ];
    const rareItems: RangedWeapon[] = [
        { name: "Shotgun", relatedWeaponSkill: "Shoulder Arms", singleShotDamage: "5 d6", magSize: 4, ammoType: "Slugs", rateOfFire: 1, hands: "Two Handed", concealable: false, cost: 500, rarity: rarities.rare },
        { name: "Assault Rifle", relatedWeaponSkill: "Shoulder Arms", singleShotDamage: "5 d6", magSize: 25, ammoType: "Rifle", rateOfFire: 1, hands: "Two Handed", concealable: false, cost: 500, rarity: rarities.rare },
        { name: "Sniper Rifle", relatedWeaponSkill: "Shoulder Arms", singleShotDamage: "5 d6", magSize: 4, ammoType: "Rifle", rateOfFire: 1, hands: "Two Handed", concealable: false, cost: 500, rarity: rarities.rare },
        { name: "Grenade Launcher", relatedWeaponSkill: "Heavy Weapons", singleShotDamage: "6 d6", magSize: 2, ammoType: "Grenade", rateOfFire: 1, hands: "Two Handed", concealable: false, cost: 500, rarity: rarities.rare },
        { name: "Rocket Launcher", relatedWeaponSkill: "Heavy Weapons", singleShotDamage: "8 d6", magSize: 2, ammoType: "Rocket", rateOfFire: 1, hands: "Two Handed", concealable: false, cost: 500, rarity: rarities.rare },
    ];

    return commonItems.concat(uncommonItems, rareItems);
}

const GetWeaponAttachments = (): WeaponAttachment[] => {
    const uncommonItems: WeaponAttachment[] = [
        { name: "Bayonet", eligibilities: "Shotgun, Assault Rifle, Sniper Rifle", cost: 100, rarity: rarities.uncommon },
        { name: "Extended Magazine", eligibilities: "Medium Pistol, Heavy Pistol, Very Heavy Pistol, SMG, Heavy SMG, Shotgun, Assault Rifle, Sniper Rifle, Grenade Launcher, Rocket Launcher", cost: 100, rarity: rarities.uncommon },
        { name: "Sniping Scope", eligibilities: "Medium Pistol, Heavy Pistol, Very Heavy Pistol, SMG, Heavy SMG, Shotgun, Assault Rifle, Sniper Rifle, Bows & Crossbows, Grenade Launcher, Rocket Launcher", cost: 100, rarity: rarities.uncommon },
    ];

    const rareItems: WeaponAttachment[] = [
        { name: "Drum Magazine", eligibilities: "Medium Pistol, Heavy Pistol, Very Heavy Pistol, SMG, Heavy SMG, Shotgun, Assault Rifle, Sniper Rifle, Grenade Launcher, Rocket Launcher", cost: 500, rarity: rarities.rare },
        { name: "Grenade Launcher Underbarrel", eligibilities: "Shotgun, Assault Rifle, Sniper Rifle", cost: 500, rarity: rarities.rare },
        { name: "Infrared Nightvision Scope", eligibilities: "Medium Pistol, Heavy Pistol, Very Heavy Pistol, SMG, Heavy SMG, Shotgun, Assault Rifle, Sniper Rifle, Bows & Crossbows, Grenade Launcher, Rocket Launcher", cost: 500, rarity: rarities.rare },
        { name: "Shotgun Underbarrel", eligibilities: "Medium Pistol, Heavy Pistol, Very Heavy Pistol, SMG, Heavy SMG, Shotgun, Assault Rifle, Sniper Rifle, Grenade Launcher, Rocket Launcher", cost: 500, rarity: rarities.rare },
        { name: "Smartgun Link", eligibilities: "Medium Pistol, Heavy Pistol, Very Heavy Pistol, SMG, Heavy SMG, Shotgun, Assault Rifle, Sniper Rifle, Bows & Crossbows, Grenade Launcher, Rocket Launcher", cost: 500, rarity: rarities.rare },
    ];

    return uncommonItems.concat(rareItems);
}

const GetAmmo = (): Ammo[] => {
    const commonItems: Ammo[] = [
        { name: "Basic Ammo", varietiesSoldIn: "Medium Pistol Bullets, Heavy Pistol Bullets, Very Heavy Pistol Bullets, Shotgun Slugs, Shotgun Shells, Rifle Bullets, Arrows", quantitiesSoldIn: "10 Bullets, 10 Slugs, 10 Shells, 10 Arrows", cost: 10, rarity: rarities.common },
        { name: "Rubber Ammo", varietiesSoldIn: "Medium Pistol Bullets, Heavy Pistol Bullets, Very Heavy Pistol Bullets, Shotgun Slugs, Rifle Bullets, Arrows", quantitiesSoldIn: "10 Bullets, 10 Slugs, 10 Arrows", cost: 10, rarity: rarities.common },
        
        { name: "Smoke Ammo", varietiesSoldIn: "Granades", quantitiesSoldIn: "1 Grenade", cost: 50, rarity: rarities.common },
        { name: "Teargas Ammo", varietiesSoldIn: "Granades", quantitiesSoldIn: "1 Grenade", cost: 50, rarity: rarities.common },
    ];

    const uncommonItems: Ammo[] = [
        { name: "Armor-Piercing Ammo", varietiesSoldIn: "Medium Pistol Bullets, Heavy Pistol Bullets, Very Heavy Pistol Bullets, Shotgun Slugs, Rifle Bullets, Arrows, Grenades, Rockets", quantitiesSoldIn: "10 Bullets, 10 Slugs, 10 Arrows, 1 Grenade, 1 Rocket", cost: 100, rarity: rarities.uncommon },
        { name: "Expansive Ammo", varietiesSoldIn: "Medium Pistol Bullets, Heavy Pistol Bullets, Very Heavy Pistol Bullets, Shotgun Slugs, Rifle Bullets, Arrows", quantitiesSoldIn: "10 Bullets, 10 Slugs, 10 Arrows", cost: 100, rarity: rarities.uncommon },
        { name: "Flashbang Ammo", varietiesSoldIn: "Granades", quantitiesSoldIn: "1 Grenade", cost: 100, rarity: rarities.uncommon },
        { name: "Incendiary Ammo", varietiesSoldIn: "Medium Pistol Bullets, Heavy Pistol Bullets, Very Heavy Pistol Bullets, Shotgun Slugs, Shotgun Shells, Rifle Bullets, Arrows, Grenades", quantitiesSoldIn: "10 Bullets, 10 Slugs, 10 Shells, 10 Arrows, 1 Grenade", cost: 100, rarity: rarities.uncommon },
        { name: "Poison Ammo", varietiesSoldIn: "Arrows, Grenades", quantitiesSoldIn: "10 Arrows, 1 Grenade", cost: 100, rarity: rarities.uncommon }
    ];

    const rareItems: Ammo[] = [
        { name: "Biotoxin Ammo", varietiesSoldIn: "Arrows, Grenades", quantitiesSoldIn: "10 Arrows, 1 Grenade", cost: 500, rarity: rarities.rare },
        { name: "EMP Ammo", varietiesSoldIn: "Grenades", quantitiesSoldIn: "1 Grenade", cost: 500, rarity: rarities.rare },
        { name: "Sleep Ammo", varietiesSoldIn: "Arrows, Grenades", quantitiesSoldIn: "10 Arrows, 1 Grenade", cost: 500, rarity: rarities.rare },
        { name: "Smart Ammo", varietiesSoldIn: "Medium Pistol Bullets, Heavy Pistol Bullets, Very Heavy Pistol Bullets, Shotgun Slugs, Rifle Bullets, Arrows, Rockets", quantitiesSoldIn: "10 Bullets, 10 Arrows, 1 Rocket", cost: 500, rarity: rarities.rare },
    ];

    return commonItems.concat(uncommonItems, rareItems);
}

const GetExoticWeapons = (): ExoticWeapon[] => {
    const uncommonItems: ExoticWeapon[] = [
        { name: "Air Pistol", description: "Exotic Medium Pistol. Lowers Armor by 1 on each successful hit. Can not cause Critical Injuries.", cost: 100, rarity: rarities.uncommon }, 
        { name: "Air Pistol", description: "Exotic Very Heavy Pistol. Uses Arrow Ammunition. Has a mag of 8. Reloaded like a Very Heavy Pistol", cost: 100, rarity: rarities.uncommon }, 
        { name: "Stun Baton", description: "Exotic Medium Melee Weapon. If damage dealt would reduce a target to below 1 HP, they are instead unconscious at 1 HP. Can not cause Critical Injuries. Can not destroy or damage Armor.", cost: 100, rarity: rarities.uncommon }, 
        { name: "Stun Gun", description: "Exotic Heavy Pistol. If damage dealt would reduce a target to below 1 HP, they are instead unconscious at 1 HP. Can not cause Critical Injuries. Can not destroy or damage Armor. Ammo for this weapon is in the form of rechageable battery packs that cost 50eb each, hold 8 shots per charge, and take 1 hour to recharge from empty to full.", cost: 100, rarity: rarities.uncommon }, 
    ];

    const rareItems: ExoticWeapon[] = [
        { name: "Flamethrower", description: "Exotic Shotgun, fired with the Heavy Weapons Skill. Mechanically follows Shotgun Shells alternate fire rules, with incendiary ammo. Ammo purchases also follow incendiary Shotgun Shells. While a target is ignited, they must use an Action to put themselves out. Otherwise they take 4 damage directly to thier HP at the end of every turn. If a target was already on fire, the damage they take replaces any fire damage that would have been of a lower amount. Can not cause Critical Injuries. Can not be used to make Aimed Shots.", cost: 500, rarity: rarities.rare }, 
        { name: "Microwaver", description: "Exotic Very Heavy Pistol. On hit, the target must beat a DV15 Cybertech Check. If they fail, the GM choses 2 pieces of Cyberware to become inoperable for 1 minute. Ammo for this weapon is in the form of rechageable battery packs that cost 50eb each, hold 8 shots per charge, and take 1 hour to recharge from empty to full.", cost: 500, rarity: rarities.rare },
        { name: "Shrieker", description: "Exotic Very Heavy Pistol. If fired without ear protection, they immediately suffer the Damaged Ear Critical Injury. On hit, the target must beat a DV15 Resist Torture/Drugs Check. If they fail, the target immediately suffers the Damaged Ear Critical Injury. Ammo for this weapon is in the form of rechageable battery packs that cost 50eb each, hold 8 shots per charge, and take 1 hour to recharge from empty to full.", cost: 500, rarity: rarities.rare },
    ];

    const epicItems: ExoticWeapon[] = [
        { name: "Battleglove", description: "Exotic Heavy Melee Weapon. Contains 3 slots for Cyberarm or Cyberlimb attachments. Equiping/Unequiping is an Action. The cost of installing a cyberarm attachment into the Battleglove is the same as a normal cyberarm install. Any options attached to a Cyberarm under a worn Battleglove are inaccessible while wearing a Battleglove. Can not be concealed.", cost: 1000, rarity: rarities.epic }
    ];

    const legendaryItems: ExoticWeapon[] = [
        { name: "Constitution Arms Hurricane Assault Weapon", description: "Exotic Shotgun. Has a rate of fire of 2. Can not be used to make Aimed Shots. Has a mag of 16 slugs. Reloading costs 2 actions. Using this weapon requires a BODY of 11 or higher unless it is mounted.", cost: 5000, rarity: rarities.legendary },
        { name: "Kendachi Mono-Three", description: "Exotic Very Heavy Melee Weapon. Requires 2 hands to use. Comes with a biometric key that when utilized, ignores Armor lower than 11. Without the correct biometric key, the Kendachi Mono-Three behaves as a ragular two-handed Very Heavy Melee Weapon.", cost: 5000, rarity: rarities.legendary },
        { name: "Militech \"Cowboy\" U-56 Grenade Launcher", description: "Exotic Grenade Launcher. Has a rate of fire of 2. Has a mag of 4. Can fire any form of Grenade Ammo. Reloading costs 2 actions. Using this weapon requires a BODY of 11 or higher unless it is mounted.", cost: 5000, rarity: rarities.legendary },
        { name: "Rhinemetall EMG-86 Railgun", description: "Exotic Assault Rifle. Can not be used for Autofire or to make Aimed Shots. Uses the Heavy Weapons skill to fire. Has a mag of 4. Ignores Armor lower than 11. Reloading costs 2 actions. Using this weapon requires a BODY of 11 or higher unless it is mounted.", cost: 5000, rarity: rarities.legendary },
        { name: "Tsunami Arms Helix", description: "Exotic Assault Rifle. Fired only with Autofire. Has a mag of 40. Consumes 20 bullets with every attack. On hit, the attacker rolls 2 d6 for damage, and multiplies the results by the amount the DV was beat to hit, up to a max of 5. Reloading costs 2 actions. Using this weapon requires a BODY of 11 or higher unless it is mounted.", cost: 5000, rarity: rarities.legendary } 
    ];

    const superItems: ExoticWeapon[] = [
        { name: "Malorian Arms 3516", description: "Exotic Very Heavy Pistol. Deals 5d6 damage per shot. Comes with a Smartgun Link weapon attachment attached.", cost: 10000, rarity: rarities.super }
    ];

    return uncommonItems.concat(rareItems, epicItems, legendaryItems, superItems);
}

const GetArmor = (): Armor[] => {
    const commonItems: Armor[] = [
        { name: "Leathers", stoppingPower: 4, penalty: "None", cost: 20, rarity: rarities.common },
        
        { name: "Kevlar", stoppingPower: 7, penalty: "None", cost: 50, rarity: rarities.common }
    ];

    const uncommonItems: Armor[] = [
        { name: "Light Armorjack", stoppingPower: 11, penalty: "None", cost: 100, rarity: rarities.uncommon },
        { name: "Medium Armorjack", stoppingPower: 12, penalty: "-2 REF, -2 DEV, -2 MOVE", cost: 100, rarity: rarities.uncommon },
        { name: "Bulletproof Shield", stoppingPower: 10, penalty: "Always takes up 1 arm", cost: 100, rarity: rarities.uncommon }
    ];

    const rareItems: Armor[] = [
        { name: "Heavy Armorjack", stoppingPower: 13, penalty: "-2 REF, -2 DEV, -2 MOVE", cost: 500, rarity: rarities.rare },
        { name: "Flak", stoppingPower: 15, penalty: "-4 REF, -4 DEV, -4 MOVE", cost: 500, rarity: rarities.rare }
    ];

    const epicItems: Armor[] = [
        { name: "Bodyweight Suit", stoppingPower: 11, penalty: "None", cost: 1000, rarity: rarities.epic },
    ];

    const legendaryItems: Armor[] = [
        { name: "Metalgear", stoppingPower: 18, penalty: "-4 REF, -4 DEV, -4 MOVE", cost: 5000, rarity: rarities.legendary }
    ];

    return commonItems.concat(uncommonItems, rareItems, epicItems, legendaryItems);
}

const GetGear = (): Gear[] => {
    const commonItems: Gear[] = [
        { name: "Food Stick", description: "Grainy, dried food bar that comes in a variety of (awful) flavors. One meal.", cost: 10, rarity: rarities.common },
        { name: "Glow Stick", description: "Light tube to illuminate a 4m/yd area for up to 10 hours. One use only.", cost: 10, rarity: rarities.common },
        { name: "Kibble Pack", description: "One foil package of dry, pet food-like cereal or wafers equivalent to a single meal. Usually identified by number rather than the fake appetizing label and description.", cost: 10, rarity: rarities.common },
        { name: "Memory Chips", description: "Thin wafers of doped plastic that store information in all forms. Some of these are larger than others.", cost: 10, rarity: rarities.common },
        { name: "MRE", description: "Self-heating plastic and foil meal bag. Add water, snap the tab on the top, and in 2 minutes you have something that resembles a single hot, nourishing meal.", cost: 10, rarity: rarities.common },
        { name: "Road Flare", description: "Lights an area of 100m/yards for 1 hour. Different colors. One use.", cost: 10, rarity: rarities.common },

        { name: "Anti-Smog Breathing Mask", description: "Useful for filtering out toxins and smoke from the local environment. User is immune to the effects of toxic gasses, fumes, and all similar dangers that must be inhaled to affect the user.", cost: 20, rarity: rarities.common },
        { name: "Carryall", description: "Heavy ripstop nylon bags of varying sizes, from messenger to nearly man-sized duffel bags.", cost: 20, rarity: rarities.common },
        { name: "Duct Tape", description: "Comes in many colors and optionally can glow in the dark. Glowing duct tape is often used to mark tunnels, dead drops, or caches. It glows in the dark even if there has been no light exposure.", cost: 20, rarity: rarities.common },
        { name: "Flashlight", description: "Rechargeable. 100m/yd beam, lasts up to 10 hours on a charge.", cost: 20, rarity: rarities.common },
        { name: "Glow Paint", description: "Glow in the dark paint for marking locations and creating art. Comes in a spray can. Also good for tagging.", cost: 20, rarity: rarities.common },
        { name: "Inflatable Bed & Sleep-bag", description: "It's a self-inflating air mattress than comes packed with a thin sleeping bag. The whole thing folds to a 6\"x6\" package for easy storage.", cost: 20, rarity: rarities.common },
        { name: "Lock Picking Set", description: "A small pouch of tools for cracking mechanical locks.", cost: 20, rarity: rarities.common },
        { name: "Personal CarePak", description: "Toothpaste-loaded toothbrush, all body wet-wipes, depilatory paste, comb, etc.", cost: 20, rarity: rarities.common },
        { name: "Rope (60m/yds)", description: "Nylon rope. Can come in colors if desired. Holds up to 800lbs (360kg).", cost: 20, rarity: rarities.common },
    
        { name: "Airhypo", description: "Easy to use drug distribution platform which uses a quick burst of compressed air to force a drug through the skin. Allows user to use an Action to administer a single dose of a desired drug to a willing target, or try to make a Melee Weapon attack to administer a single dose to an unwilling target on a hit instead of dealing damage. Reloading the Airhypo with a dose of your desired drug isn't an Action.", cost: 50, rarity: rarities.common },
        { name: "Binoculars", description: "You look through them. They double or triple the size of what you are seeing.", cost: 50, rarity: rarities.common },
        { name: "Computer", description: "Laptop or desktop computer, used mostly for comfortable word processing and surfing the Data Pool.", cost: 50, rarity: rarities.common },
        { name: "Disposable Cell Phone", description: "There are still billions of the things around. A good choice for Fixers and other people who don't want to be tracked.", cost: 50, rarity: rarities.common },
        { name: "Handcuffs", description: "Book 'em, Danno. Can be broken easily if your BODY is higher than 10.", cost: 50, rarity: rarities.common },
        { name: "Pocket Amplifier", description: "About the size of a large book, this rechargeable amplifier delivers sound up to 100m/yd for up to 6 hours. Can support two instruments.", cost: 50, rarity: rarities.common },
        { name: "Radio Scanner / Music Player", description: "Music player can link to the Data Pool to listen to the hottest music, or play directly from a Memory Chip. User can also scan all radio bands within a mile that are currently being used and tune into them, though some channels might require a Descrambler to understand.", cost: 50, rarity: rarities.common },
        { name: "Tent & Camping Equipment", description: "Small one-person tube tent with plastic stakes, one self-heating, rechargeable pot to boil water (takes 5 min to recharge, lasts 2 hours) and a cheap metal spork that couldn't hurt a fly", cost: 50, rarity: rarities.common },
    ];

    const uncommonItems: Gear[] = [
        { name: "Agent", description: "Self-adaptive-AI powered smartphone; that \"learns\" how best to fit your needs simply by interacting with you. While not a true AI, it is more thancapable of replacing any need for a secretary. Whenyou sit back and allow your Agent to manage yourlife, everything is easier, including making sure youhave time to do what you need to do (crimes, killingpeople, getting away with it, and so forth) instead ofgoing to the store to get something you forgot. Thereare many reasons why almost everyone has one.", cost: 100, rarity: rarities.uncommon },
        { name: "Audio Recorder", description: "Device records up to 24 hours of audio before its output fills up a standard Memory Chip stored in the device.", cost: 100, rarity: rarities.uncommon },
        { name: "Cyberdeck (Poor Quality)", description: "A cheap modular platform that Programs and Hardware are installed on for the purpose of Netrunning. This cyberdeck has 5 slots to install Programs and Hardware. Requires Interface Plugs and Neural Link for a Netrunner to operate.", cost: 100, rarity: rarities.uncommon },
        { name: "Grapple Gun", description: "When wielded in a hand, user as an Action can fire a rocket propelled grapple that will attach securely to any \"thick\" cover up to 30m/yds away. Line can only support two times the user's body weight, and has 10 HP. The user negates the normal movement penalty for climbing when they climb this line, and can retract the line without an Action, including as they climb. When used as a grapple, user can't hold anything in the hand used to wield the grapple gun. Ineffective as a weapon, and cannot be used to make the Grab Action.", cost: 100, rarity: rarities.uncommon },
        { name: "Meditech Bag", description: "Medical toolkit that includes everything from dermal staplers to spray skin applicators to sterile scalpels. All you need to save lives using your skills and training.", cost: 100, rarity: rarities.uncommon },
        { name: "Radio Communicator", description: "Earpiece allowing user to communicate via radio, 1 mile range.", cost: 100, rarity: rarities.uncommon },
        { name: "Techtool", description: "An all-in-one tool. The various parts, including a small utility blade, pliers, various screwdrivers, files, and clippers all fold up into a compact and easy to carry package.", cost: 100, rarity: rarities.uncommon },
        { name: "Vial of Poison", description: "An entire vial of poison can be smeared on any Light Melee Weapon as an Action. For the next 30 minutes after application, instead of dealing the weapon's typical damage, anyone meat hit by the poisoned Light Melee Weapon must instead attempt to beat a DV13 Resist Torture/Drugs Check. Anyone who fails is dealt 2d6 damage directly to their HP. Their armor isn't ablated because it wasn't interacted with.", cost: 100, rarity: rarities.uncommon },
        { name: "Video Camera", description: "When held in a hand, user can record up to 12 hours of video and audio before its output fills up a standard Memory Chip stored in the device.", cost: 100, rarity: rarities.uncommon },
        { name: "Virtuality Goggles", description: "Headset that projects cyberspace imagery over your view of the world around you. Highly advised for Netrunners.", cost: 100, rarity: rarities.uncommon },
    ];

    const rareItems: Gear[] = [
        { name: "Bug Detector", description: "Device beeps when user is within 2m/yds of a tap, bug, or other listening device.", cost: 500, rarity: rarities.rare },
        { name: "Cyberdeck (Standard Quality)", description: "Modular platform that Programs and Hardware are installed on for the purpose of Netrunning. This cyberdeck has 7 slots to install Programs and Hardware. Requires Interface Plugs and Neural Link for a Netrunner to operate.", cost: 500, rarity: rarities.rare },
        { name: "Drum Synthesizer", description: "Flat plastic pads of varying sizes, linked by cables to a central processor. Can simulate almost any kind of drum. Requires some type of amplification to be heard.", cost: 500, rarity: rarities.rare },
        { name: "Electric Guitar or another Instrument", description: "Use your imagination. But remember that you will need an amp to be heard with any electronic-based instrument.", cost: 500, rarity: rarities.rare },
        { name: "Homing Tracer", description: "Device can follow a linked tracer up to 1 mile away. Comes with a free button sized linked tracer. Replacement linked tracers are 50eb.", cost: 500, rarity: rarities.rare },
        { name: "Radar Detector", description: "Device beeps if an active radar beam is present within 100m/yds.", cost: 500, rarity: rarities.rare },
        { name: "Scrambler / Descrambler", description: "Allows user to scramble outgoing communications so they cannot be understood without a descrambler, which is also included at no extra charge.", cost: 500, rarity: rarities.rare },
        { name: "Smart Glasses", description: "Contains two option slots for Cybereye options. When worn, Smart Glasses give the user access to the benefits of these options. When cybereye options are installed into the glasses, they always count as if they were paired, and it costs the same as installing the option once in a cybereye. You can only wear a single pair at a time. Enthusiasts often replace the frames of their Smart Glasses with nicer ones, as they aren't the prettiest out of the box.", cost: 500, rarity: rarities.rare },
        { name: "Tech Bag", description: "Small bag of tools for fixing electronics and machines. Includes a Techtool, electrical parts like tape and wire wraps, asst. screws and bolts, plug in modules for repairs, heat torch, 2 small prybars, and hammer.", cost: 500, rarity: rarities.rare },
        { name: "Vial of Biotoxin", description: "An entire vial of biotoxin can be smeared on any Light Melee Weapon as an Action. For the next 30 minutes after application, instead of dealing the weapon's typical damage, anyone meat hit by the biotoxin-coated Light Melee Weapon must instead attempt to beat a DV15 Resist Torture/Drugs Check. Anyone who fails is dealt 3d6 damage directly to their HP. Their armor isn't ablated because it wasn't interacted with.", cost: 500, rarity: rarities.rare },
    ];

    const epicItems: Gear[] = [
        { name: "Auto Level Dampening Ear Protectors", description: "Compact ear protection. When worn, user is immune to deafness or other effects caused by dangerously loud noises, like those produced by a flashbang.", cost: 1000, rarity: rarities.epic },
        { name: "Braindance Viewer", description: "Allows the user to experience braindance content. Braindances are digital recordings of an experience which you view through the eyes of the actor. The experience includes all the subject's senses, and you feel every emotion felt, for better or worse.", cost: 1000, rarity: rarities.epic },
        { name: "Chemical Analyzer", description: "Can test substances as an Action to find their precise chemical composition, identifying most substances instantly from a wide database of samples.", cost: 1000, rarity: rarities.epic },
        { name: "Cyberdeck (Excellent Quality)", description: "A high-end modular platform that Programs and Hardware are installed on for the purpose of Netrunning. This cyberdeck has 9 slots to install Programs and Hardware. Requires Interface Plugs and Neural Link for a Netrunner to operate.", cost: 1000, rarity: rarities.epic },
        { name: "Linear Frame (Sigma)", description: "Powered exoskeleton, giving the user tremendous strength. User increases their BODY to 12 while plugged into the frame. This cannot increase the user's BODY to 13 or higher. This increase in BODY does not increase the user's HP or change their Death Save. Requires 1 installations of Interface Plugs to operate.", cost: 1000, rarity: rarities.epic },
        { name: "Medscanner", description: "Scanner with external probes and contacts that diagnoses injury and illness, assisting user in medical emergencies not requiring Surgery. User adds +2 to their First Aid and Paramedic Skills. This doesn't stack with itself.", cost: 1000, rarity: rarities.epic },
        { name: "Techscanner", description: "Scanner diagnoses a wide variety of machinery and electronics, assisting the user in repairs, or other technical work. User adds +2 to their Basic Tech, Cybertech, Land Vehicle Tech, Sea Vehicle Tech, Air Vehicle Tech, Electronics/Security Tech, and Weaponstech Skills. This doesn't stack with itself.", cost: 1000, rarity: rarities.epic },
    ];

    const legendaryItems: Gear[] = [
        { name: "Cryopump", description: "A Cryopump is a briefcase-sized tool containing a body bag hooked up to a powerful pump. Once willing/unconscious targets have been placed into the bag and hooked up to the pump as an Action, the pump forces a hyper-cooled chemical fluid into the bag, draining one of the Cryopump's charges per target put in stasis (one per person, if the Cryopump can accept multiple people). While in stasis, targets are unconscious and no longer roll any Death Saves for up to a week, as long as they remain inside the bag and the bag has at least 1HP. A Character in a cryopump bag is considered to be behind a piece of cover that has 15 HP. The bag's transparent top and gloves molded into the lining allow the target to undergo surgery and be stabilized while in stasis, which is much less dangerous to the patient. A standard Cryopump has only 1 charge and can only hold a single roughly human-sized target. Refueling a Cryopump costs 50eb(Costly) per charge. A Character who is not a Medtech cannot operate a Cryopump.", cost: 5000, rarity: rarities.legendary },
        { name: "Cryotank", description: "A Cryotank is a human-sized container which can hold a fully grown adult. Assuming the Medtech succeeds at a DV13 Medical Tech Check, the Cryotank keeps 1 person in stasis as long as desired. While in the Cryotank, they are considered to be unconscious, but they heal at double the normal rate as long as they remain inside the tank and the tank has at least 1 HP. A Character in a Cryotank is considered to be behind a piece of cover that has 30 HP. A Character who is not a Medtech cannot operate a Cryotank.", cost: 5000, rarity: rarities.legendary },
        { name: "Linear Frame (Beta)", description: "Powered exoskeleton, giving the user even more tremendous strength. User increases their BODY to 14 while plugged into the frame. This cannot increase the user's BODY to 15 or higher. This increase in BODY does not increase the user's HP or change their Death Save. Requires 2 installation of Interface Plugs to operate.", cost: 5000, rarity: rarities.legendary },
    ];

    return commonItems.concat(uncommonItems, rareItems, epicItems, legendaryItems);
}

const GetClothing = (): Clothing[] => {
    const commonItems: Clothing[] = [
        { name: "Bag Lady Chic Top", fashionClass: "Bag Lady Chic", clothingItem: "Shirt", cost: 10, rarity: rarities.common },
        { name: "Bag Lady Chic Glasses", fashionClass: "Bag Lady Chic", clothingItem: "Glasses", cost: 10, rarity: rarities.common },
        { name: "Bag Lady Chic Contact Lenses", fashionClass: "Bag Lady Chic", clothingItem: "Contact Lenses", cost: 10, rarity: rarities.common },
        { name: "Bag Lady Chic Hat", fashionClass: "Bag Lady Chic", clothingItem: "Hat", cost: 10, rarity: rarities.common },
        { name: "Gang Colors Contact Lenses", fashionClass: "Gang Colors", clothingItem: "Contact Lenses", cost: 10, rarity: rarities.common },
        { name: "Gang Colors Hat", fashionClass: "Gang Colors", clothingItem: "Hat", cost: 10, rarity: rarities.common },
        { name: "Generic Chic Contact Lenses", fashionClass: "Generic Chic", clothingItem: "Contact Lenses", cost: 10, rarity: rarities.common },
        { name: "Generic Chic Hat", fashionClass: "Generic Chic", clothingItem: "Hat", cost: 10, rarity: rarities.common },
        { name: "Bohemian Contact Lenses", fashionClass: "Bohemian", clothingItem: "Contact Lenses", cost: 10, rarity: rarities.common },
        { name: "Bohemian Hat", fashionClass: "Bohemian", clothingItem: "Hat", cost: 10, rarity: rarities.common },

        { name: "Bag Lady Chic Pants", fashionClass: "Bag Lady Chic", clothingItem: "Pants", cost: 20, rarity: rarities.common },
        { name: "Bag Lady Chic Jacket", fashionClass: "Bag Lady Chic", clothingItem: "Jacket", cost: 20, rarity: rarities.common },
        { name: "Bag Lady Chic Footware", fashionClass: "Bag Lady Chic", clothingItem: "Shoes", cost: 20, rarity: rarities.common },
        { name: "Bag Lady Chic Jewelry", fashionClass: "Bag Lady Chic", clothingItem: "Jewelry", cost: 20, rarity: rarities.common },
        { name: "Bag Lady Chic Mirrorshades", fashionClass: "Bag Lady Chic", clothingItem: "Sunglasses", cost: 20, rarity: rarities.common },
        { name: "Gang Colors Top", fashionClass: "Gang Colors", clothingItem: "Shirt", cost: 20, rarity: rarities.common },
        { name: "Gang Colors Footwear", fashionClass: "Gang Colors", clothingItem: "Shoes", cost: 20, rarity: rarities.common },
        { name: "Gang Colors Mirrorshades", fashionClass: "Gang Colors", clothingItem: "Sunglasses", cost: 20, rarity: rarities.common },
        { name: "Gang Colors Glasses", fashionClass: "Gang Colors", clothingItem: "Glasses", cost: 20, rarity: rarities.common },
        { name: "Generic Chic Top", fashionClass: "Generic Chic", clothingItem: "Shirt", cost: 20, rarity: rarities.common },
        { name: "Generic Chic Footwear", fashionClass: "Generic Chic", clothingItem: "Shoes", cost: 20, rarity: rarities.common },
        { name: "Generic Chic Mirrorshades", fashionClass: "Generic Chic", clothingItem: "Sunglasses", cost: 20, rarity: rarities.common },
        { name: "Generic Chic Glasses", fashionClass: "Generic Chic", clothingItem: "Glasses", cost: 20, rarity: rarities.common },
        { name: "Bohemian Top", fashionClass: "Bohemian", clothingItem: "Shirt", cost: 20, rarity: rarities.common },
        { name: "Leisurewear Top", fashionClass: "Leisurewear", clothingItem: "Shirt", cost: 20, rarity: rarities.common },
        { name: "Leisurewear Contact Lenses", fashionClass: "Leisurewear", clothingItem: "Contact Lenses", cost: 20, rarity: rarities.common },
        { name: "Nomad Leathers Top", fashionClass: "Nomad Leathers", clothingItem: "Shirt", cost: 20, rarity: rarities.common },
        { name: "Nomad Leathers Contact Lenses", fashionClass: "Nomad Leathers", clothingItem: "Contact Lenses", cost: 20, rarity: rarities.common },
        { name: "Asia Pop Top", fashionClass: "Asia Pop", clothingItem: "Shirt", cost: 20, rarity: rarities.common },
        { name: "Urban Flash Top", fashionClass: "Urban Flash", clothingItem: "Shirt", cost: 20, rarity: rarities.common },

        { name: "Gang Colors Pants", fashionClass: "Gang Colors", clothingItem: "Pants", cost: 50, rarity: rarities.common },
        { name: "Gang Colors Jacket", fashionClass: "Gang Colors", clothingItem: "Jacket", cost: 50, rarity: rarities.common },
        { name: "Gang Colors Jewelry", fashionClass: "Gang Colors", clothingItem: "Jewelry", cost: 50, rarity: rarities.common },
        { name: "Generic Chic Pants", fashionClass: "Generic Chic", clothingItem: "Pants", cost: 50, rarity: rarities.common },
        { name: "Generic Chic Jacket", fashionClass: "Generic Chic", clothingItem: "Jacket", cost: 50, rarity: rarities.common },
        { name: "Generic Chic Jewelry", fashionClass: "Generic Chic", clothingItem: "Jewelry", cost: 50, rarity: rarities.common },
        { name: "Bohemian Pants", fashionClass: "Bohemian", clothingItem: "Pants", cost: 50, rarity: rarities.common },
        { name: "Bohemian Jacket", fashionClass: "Bohemian", clothingItem: "Jacket", cost: 50, rarity: rarities.common },
        { name: "Bohemian Footwear", fashionClass: "Bohemian", clothingItem: "Shoes", cost: 50, rarity: rarities.common },
        { name: "Bohemian Mirrorshades", fashionClass: "Bohemian", clothingItem: "Sunglasses", cost: 50, rarity: rarities.common },
        { name: "Bohemian Glasses", fashionClass: "Bohemian", clothingItem: "Glasses", cost: 50, rarity: rarities.common },
        { name: "Leisurewear Footwear", fashionClass: "Leisurewear", clothingItem: "Shoes", cost: 50, rarity: rarities.common },
        { name: "Leisurewear Mirrorshades", fashionClass: "Leisurewear", clothingItem: "Sunglasses", cost: 50, rarity: rarities.common },
        { name: "Leisurewear Glasses", fashionClass: "Leisurewear", clothingItem: "Glasses", cost: 50, rarity: rarities.common },
        { name: "Leisurewear Hat", fashionClass: "Leisurewear", clothingItem: "Hat", cost: 50, rarity: rarities.common },
        { name: "Nomad Leathers Mirrorshades", fashionClass: "Nomad Leathers", clothingItem: "Sunglasses", cost: 50, rarity: rarities.common },
        { name: "Nomad Leathers Glasses", fashionClass: "Nomad Leathers", clothingItem: "Glasses", cost: 50, rarity: rarities.common },
        { name: "Businesswear Top", fashionClass: "Businesswear", clothingItem: "Shirt", cost: 50, rarity: rarities.common },
    ];

    const uncommonItems: Clothing[] = [
        { name: "Bohemian Jewelry", fashionClass: "Bohemian", clothingItem: "Jewelry", cost: 100, rarity: rarities.uncommon },
        { name: "Leisurewear Pants", fashionClass: "Leisurewear", clothingItem: "Pants", cost: 100, rarity: rarities.uncommon },
        { name: "Leisurewear Jacket", fashionClass: "Leisurewear", clothingItem: "Jacket", cost: 100, rarity: rarities.uncommon },
        { name: "Leisurewear Jewelry", fashionClass: "Leisurewear", clothingItem: "Jewelry", cost: 100, rarity: rarities.uncommon },
        { name: "Nomad Leathers Pants", fashionClass: "Nomad Leathers", clothingItem: "Pants", cost: 100, rarity: rarities.uncommon },
        { name: "Nomad Leathers Jacket", fashionClass: "Nomad Leathers", clothingItem: "Jacket", cost: 100, rarity: rarities.uncommon },
        { name: "Nomad Leathers Footwear", fashionClass: "Nomad Leathers", clothingItem: "Shoes", cost: 100, rarity: rarities.uncommon },
        { name: "Nomad Leathers Jewelry", fashionClass: "Nomad Leathers", clothingItem: "Jewelry", cost: 100, rarity: rarities.uncommon },
        { name: "Nomad Leathers Hat", fashionClass: "Nomad Leathers", clothingItem: "Hat", cost: 100, rarity: rarities.uncommon },
        { name: "Asia Pop Pants", fashionClass: "Asia Pop", clothingItem: "Pants", cost: 100, rarity: rarities.uncommon },
        { name: "Asia Pop Jacket", fashionClass: "Asia Pop", clothingItem: "Jacket", cost: 100, rarity: rarities.uncommon },
        { name: "Asia Pop Footwear", fashionClass: "Asia Pop", clothingItem: "Shoes", cost: 100, rarity: rarities.uncommon },
        { name: "Asia Pop Jewelry", fashionClass: "Asia Pop", clothingItem: "Jewelry", cost: 100, rarity: rarities.uncommon },
        { name: "Asia Pop Mirrorshades", fashionClass: "Asia Pop", clothingItem: "Sunglasses", cost: 100, rarity: rarities.uncommon },
        { name: "Asia Pop Glasses", fashionClass: "Asia Pop", clothingItem: "Glasses", cost: 100, rarity: rarities.uncommon },
        { name: "Asia Pop Contact Lenses", fashionClass: "Asia Pop", clothingItem: "Contact Lenses", cost: 100, rarity: rarities.uncommon },
        { name: "Asia Pop Hat", fashionClass: "Asia Pop", clothingItem: "Hat", cost: 100, rarity: rarities.uncommon },
        { name: "Urban Flash Pants", fashionClass: "Urban Flash", clothingItem: "Pants", cost: 100, rarity: rarities.uncommon },
        { name: "Urban Flash Jacket", fashionClass: "Urban Flash", clothingItem: "Jacket", cost: 100, rarity: rarities.uncommon },
        { name: "Urban Flash Footwear", fashionClass: "Urban Flash", clothingItem: "Shoes", cost: 100, rarity: rarities.uncommon },
        { name: "Urban Flash Jewelry", fashionClass: "Urban Flash", clothingItem: "Jewelry", cost: 100, rarity: rarities.uncommon },
        { name: "Urban Flash Mirror Shades", fashionClass: "Urban Flash", clothingItem: "Sunglasses", cost: 100, rarity: rarities.uncommon },
        { name: "Urban Flash Glasses", fashionClass: "Urban Flash", clothingItem: "Glasses", cost: 100, rarity: rarities.uncommon },
        { name: "Urban Flash Contact Lenses", fashionClass: "Urban Flash", clothingItem: "Contact Lenses", cost: 100, rarity: rarities.uncommon },
        { name: "Urban Flash Hat", fashionClass: "Urban Flash", clothingItem: "Hat", cost: 100, rarity: rarities.uncommon },
        { name: "Businesswear Contact Lenses", fashionClass: "Businesswear", clothingItem: "Contact Lenses", cost: 100, rarity: rarities.uncommon },
    ];

    const rareItems: Clothing[] = [
        { name: "Businesswear Pants", fashionClass: "Businesswear", clothingItem: "Pants", cost: 500, rarity: rarities.rare },
        { name: "Businesswear Jacket", fashionClass: "Businesswear", clothingItem: "Jacket", cost: 500, rarity: rarities.rare },
        { name: "Businesswear Footwear", fashionClass: "Businesswear", clothingItem: "Shoes", cost: 500, rarity: rarities.rare },
        { name: "Businesswear Mirrorshades", fashionClass: "Businesswear", clothingItem: "Sunglasses", cost: 500, rarity: rarities.rare },
        { name: "Businesswear Glasses", fashionClass: "Businesswear", clothingItem: "Glasses", cost: 500, rarity: rarities.rare },
        { name: "Businesswear Hat", fashionClass: "Businesswear", clothingItem: "Hat", cost: 500, rarity: rarities.rare },
        { name: "High Fashion Top", fashionClass: "High Fashion", clothingItem: "Shirt", cost: 500, rarity: rarities.rare }
    ];

    const epicItems: Clothing[] = [
        { name: "High Fashion Pants", fashionClass: "High Fashion", clothingItem: "Pants", cost: 1000, rarity: rarities.epic },
        { name: "High Fashion Jacket", fashionClass: "High Fashion", clothingItem: "Jacket", cost: 1000, rarity: rarities.epic },
        { name: "High Fashion Mirrorshades", fashionClass: "High Fashion", clothingItem: "Sunglasses", cost: 1000, rarity: rarities.epic },
        { name: "High Fashion Glasses", fashionClass: "High Fashion", clothingItem: "Glasses", cost: 1000, rarity: rarities.epic },
        { name: "High Fashion Contact Lenses", fashionClass: "High Fashion", clothingItem: "Contact Lenses", cost: 1000, rarity: rarities.epic }
    ];

    const legendaryItems: Clothing[] = [
        { name: "High Fashion Footware", fashionClass: "High Fashion", clothingItem: "Shoes", cost: 5000, rarity: rarities.legendary },
        { name: "High Fashion Jewelry", fashionClass: "High Fashion", clothingItem: "Jewelry", cost: 5000, rarity: rarities.legendary },
        { name: "High Fashion Hat", fashionClass: "High Fashion", clothingItem: "Hat", cost: 5000, rarity: rarities.legendary },
    ];

    return commonItems.concat(uncommonItems, rareItems, epicItems, legendaryItems);
}

const GetStreetDrugs = (): StreetDrug[] => {
    return [
        { name: "Smash", primaryEffect: "For the duration of the Primary Effect, the user feels euphoric, loose, happy, and ready to party. In game terms this gives the user +2 to the following Skills: Dance, Contortionist, Conversation, Human Perception, Persuasion, and Acting.", primaryEffectDuration: "4 Hours", secondaryEffectDV: 15, secondaryEffect: "If the user wasn't already addicted to Smash, they are now. While addicted, the user feels a loss of interest in normally enjoyable activities and has -2 to the following Skills: Dance, Contortionist, Conversation, Human Perception, Persuasion, and Acting. While addicted to Smash, your GM will occasionally tell you when you crave more Smash, and you should do your best to roleplay accordingly", costPerDose: 10, rarity: rarities.common },
        { name: "Blue Glass", primaryEffect: "For the duration of the Primary Effect, The GM will occasionally tell you when you are \"flashing out,\" meaning you are hallucinating swirls of vibrant colors in short, powerful bursts. You lose your ability to do an Action on a Turn while in this state.", primaryEffectDuration: "4 Hours", secondaryEffectDV: 15, secondaryEffect: "If the user wasn't already addicted to Blue Glass, they are now. While addicted, The GM will occasionally tell you when you are \"flashing out,\" hallucinating in short powerful bursts that cause you to lose your ability to do an Action on a Turn while in this state. A Blue Glass Junkie will typically \"flash out\" once every hour, but this can vary heavily from person to person. While addicted to Blue Glass, its Primary Effect changes: Instead of causing you to \"flash out\", you are instead immune to \"flashing out\" while experiencing the Primary Effect of Blue Glass. Now, you take it for stability.", costPerDose: 20, rarity: rarities.common },
        { name: "Synthcoke", primaryEffect: "For the duration of the Primary Effect, the user's REF increases by 1 point. This can raise your REF above 8. In addition, they are prone to paranoid ideation. For the duration of the Primary Effect, your GM will occasionally tell you when you feel paranoid, and you should do your best to roleplay accordingly.", primaryEffectDuration: "4 Hours", secondaryEffectDV: 15, secondaryEffect: "If the user wasn't already addicted to Synthcoke, they are now. While addicted, their REF is lowered by 2 points, unless the user is currently experiencing the Primary Effect of Synthcoke. While addicted to Synthcoke, your GM will occasionally tell you when you crave more Synthcoke, and you should do your best to roleplay accordingly.", costPerDose: 20, rarity: rarities.common },
        { name: "Black Lace", primaryEffect: "User takes 2d6 Humanity Loss upon taking a dose, which is returned if the user isn't affected by Black Lace's Secondary Effect. For the duration of the Primary Effect, the user ignores the effects of the Seriously Wounded Wound State.", primaryEffectDuration: "24 Hours", secondaryEffectDV: 17, secondaryEffect: "Humanity Loss from Primary Effect isn't returned. If the user wasn't already addicted to Black Lace, they are now. While addicted, unless the user is currently experiencing the Primary Effect of Black Lace, their REF is lowered by 2 points.", costPerDose: 50, rarity: rarities.common },
        { name: "Boost", primaryEffect: "For the duration of the Primary Effect, the user's INT increases by 2 points. This can raise your INT above 8.", primaryEffectDuration: "24 Hours", secondaryEffectDV: 17, secondaryEffect: "If the user wasn't already addicted to Boost, they are now. While addicted, their INT is lowered by 2 points.", costPerDose: 50, rarity: rarities.common },
    ];
}

const GetCyberware = (): Cyberware[] => {
    const commonItems: Cyberware[] = [
        { name: "EMP Threading", cyberpartType: "Fashionware", install: "Mall", description: "Runs circuit-like patterns across the body. Cosmetic only.", humanityLoss: 0, cost: 10, rarity: rarities.common },
        { name: "Memory Chip", cyberpartType: "Neuralware", install: "Self Install", description: "Standard data storage. Can store or access data.", humanityLoss: 0, cost: 10, rarity: rarities.common },
        { name: "Contraceptive Implant", cyberpartType: "Internal Body Cyberware", install: "Mall", description: "Prevents Pregnancy.", humanityLoss: 0, cost: 10, rarity: rarities.common },
        
        { name: "Radio Scanner / Music Player", cyberpartType: "Cyberaudio", install: "Clinic", description: "Can find and connect to any radio station within a mile. Can play audio files from a Memory Chip.", humanityLoss: 2, cost: 10, rarity: rarities.common },
    ];

    const uncommonItems: Cyberware[] = [
        { name: "Biomonitor", cyberpartType: "Fashionware", install: "Mall", description: "Shows Vitals to player. Can be linked to Agent", humanityLoss: 0, cost: 100, rarity: rarities.uncommon },
        { name: "Chemskin", cyberpartType: "Fashionware", install: "Mall", description: "Changes color of skin to custom color. Adds +2 to Personal Grooming Skill.", humanityLoss: 0, cost: 100, rarity: rarities.uncommon },
        { name: "Light Tattoo", cyberpartType: "Fashionware", install: "Mall", description: "Glowing Tattoo on the body. A person with 3 or more Light Tattoos adds +2 to their Wardrobe & Style skill", humanityLoss: 0, cost: 100, rarity: rarities.uncommon },
        { name: "Shift Tacts", cyberpartType: "Fashionware", install: "Mall", description: "Color changing lenses in the eye. Can be toggled on or off at will. Cosmetic only.", humanityLoss: 0, cost: 100, rarity: rarities.uncommon },
        { name: "Skinwatch", cyberpartType: "Fashionware", install: "Mall", description: "Shows a holographic time and date on the skin.", humanityLoss: 0, cost: 100, rarity: rarities.uncommon },
        { name: "Tech hair", cyberpartType: "Fashionware", install: "Mall", description: "Color changing hair, can extend or retract at will. If combined with Chemskin, the user gains +2 to their Personal Grooming skill.", humanityLoss: 0, cost: 100, rarity: rarities.uncommon },
        { name: "Olfactory Boost", cyberpartType: "Neuralware", install: "Self Install", description: "Requires chipware socket. While installed, increases sense of smell. Can use the Tracking Skill to track a scent.", humanityLoss: 7, cost: 100, rarity: rarities.uncommon },
        { name: "Tactile Boost", cyberpartType: "Neuralware", install: "Self Install", description: "Requires chipware socket. While installed, the user can detect motion within 20m/yrs of themselves provided they are touching a surface. While detecting motion, the hand can do anyting else.", humanityLoss: 7, cost: 100, rarity: rarities.uncommon },
        { name: "Cybereye", cyberpartType: "Cyberoptics", install: "Clinic", description: "Replaces a single eye with a cybereye. Provides 3 options for cyberoptic attachments in that eye. Humanity loss is removed for each eye.", humanityLoss: 7, cost: 100, rarity: rarities.uncommon },
        { name: "Anti-Dazzle", cyberpartType: "Cyberoptics", install: "Mall", description: "Requires 2 cybereyes. Gives Immunity to flashbangs.", humanityLoss: 2, cost: 100, rarity: rarities.uncommon },
        { name: "Chyron", cyberpartType: "Cyberoptics", install: "Mall", description: "Requires a Cybereye. Projects messages, videos and images into the users field of vision.", humanityLoss: 2, cost: 100, rarity: rarities.uncommon },
        { name: "Color Shift", cyberpartType: "Cyberoptics", install: "Mall", description: "Requires a Cybereye. Allows for color and pattern changes to be made in the eye as an Action. Cosmetic only.", humanityLoss: 2, cost: 100, rarity: rarities.uncommon },
        { name: "MicroOptics", cyberpartType: "Cyberoptics", install: "Clinic", description: "Requires Cybereye. Provides 400x magnification.", humanityLoss: 2, cost: 100, rarity: rarities.uncommon },
        { name: "Virtuality", cyberpartType: "Cyberoptics", install: "Mall", description: "Requires 2 cybereyes. Projects cyberspace imagery over a user's view of the world.", humanityLoss: 2, cost: 100, rarity: rarities.uncommon },
        { name: "Amplified Hearing", cyberpartType: "Cyberaudio", install: "Mall", description: "Requires a Cyberaudio Suite. Gives +2 to a users Perception Skill for checks which include hearing.", humanityLoss: 3, cost: 100, rarity: rarities.uncommon },
        { name: "Audio Recorder", cyberpartType: "Cyberaudio", install: "Clinic", description: "Requires a Cyberaudio Suite. Records audio to a Memory Chip or Agent.", humanityLoss: 2, cost: 100, rarity: rarities.uncommon },
        { name: "Bug Detector", cyberpartType: "Cyberaudio", install: "Mall", description: "Requires a Cyberaudio Suite. Beeps when user is within 2m/yrs of a tap, bug, or other listening device.", humanityLoss: 2, cost: 100, rarity: rarities.uncommon },
        { name: "Homing Tracer", cyberpartType: "Cyberaudio", install: "Clinic", description: "Requires a Cyberaudio Suite. Can follow a linked tracer up to 1 mile away. Comes with button sized linked tracer. The cost of extra tracers is 50eb.", humanityLoss: 2, cost: 100, rarity: rarities.uncommon },
        { name: "Internal Agent", cyberpartType: "Cyberaudio", install: "Mall", description: "Requires a Cyberaudio Suite. An Agent controlled with voice commands. Images are described, but can be shown on any visual display if avaliable. The Agent's memory chip can not be removed without surgery.", humanityLoss: 3, cost: 100, rarity: rarities.uncommon },
        { name: "Level Damper", cyberpartType: "Cyberaudio", install: "Mall", description: "Requires a Cyberaudio Suite. User is immune to deafness.", humanityLoss: 2, cost: 100, rarity: rarities.uncommon },
        { name: "Radio Communicator", cyberpartType: "Cyberaudio", install: "Mall", description: "Requires a Cyberaudio Suite. Can communicate via radio within a 1 mile range.", humanityLoss: 2, cost: 100, rarity: rarities.uncommon },
        { name: "Scrambler Descrambler", cyberpartType: "Cyberaudio", install: "Mall", description: "Requires a Cyberaudio Suite. Allows user to scramble and descramble outgoing and incoming messages. Scrambled messages can only be understood with a descrambler.", humanityLoss: 2, cost: 100, rarity: rarities.uncommon },
        { name: "Voice Stress Analyzer", cyberpartType: "Cyberaudio", install: "Mall", description: "Requires a Cyberaudio Suite. Gives +2 to the users Human Perception and Interrogation Skills. As an action, the user can activate lie detector mode, which will have the GM roll all Human Perception and Interrogation checks private, then beep once whenever a lie is either detected. The GM can also decide to have the device beep on failed roll.", humanityLoss: 3, cost: 100, rarity: rarities.uncommon },
        { name: "Midnight Lady Sexual Implant", cyberpartType: "Internal Body Cyberware", install: "Clinic", description: "Shapes the users privates to match those of the female body. Cosmetic only", humanityLoss: 7, cost: 100, rarity: rarities.uncommon },
        { name: "Mr. Studd Sexual Implant", cyberpartType: "Internal Body Cyberware", install: "Clinic", description: "Shapes the users privates to match those of the male body. Cosmetic only", humanityLoss: 7, cost: 100, rarity: rarities.uncommon },
        { name: "Nasal Filters", cyberpartType: "Internal Body Cyberware", install: "Clinic", description: "Grants immunity against toxic gas and toxic fumes. Can be activated and deactivated at will", humanityLoss: 2, cost: 100, rarity: rarities.uncommon },
        { name: "Toxin Binders", cyberpartType: "Internal Body Cyberware", install: "Clinic", description: "Adds +2 to the Resist Torture/Drugs skill.", humanityLoss: 2, cost: 100, rarity: rarities.uncommon },
        { name: "Subdermal Pocket", cyberpartType: "External Body Cyberware", install: "Clinic", description: "Implements a 5cm x 10cm pocket for storage within the skin. Contents placed within the pocket pass all concealment checks.", humanityLoss: 3, cost: 100, rarity: rarities.uncommon },
        { name: "Plastic Covering", cyberpartType: "Cyberlimbs", install: "Mall", description: "Requires Cyberarm or Cyberleg, but doesn't take an option slot. Colored Plastic coating over a cyberlimb. Cosmetic only.", humanityLoss: 0, cost: 100, rarity: rarities.uncommon },
        { name: "Standard Hand", cyberpartType: "Cyberlimb Arm", install: "Clinic", description: "Doesn't take up a Cyberarm option slot, or count towards the number of cyberware items on a meat arm.", humanityLoss: 2, cost: 100, rarity: rarities.uncommon },
        { name: "Big Knucks", cyberpartType: "Cyberlimb Arm", install: "Clinic", description: "Can be installed on a meat arm as the only cyberware on an arm. Converts fists into a Medium Melee Weapon that passes all concealment checks. When used as a weapon, a Big Knuck can't hold anything.", humanityLoss: 3, cost: 100, rarity: rarities.uncommon },
        { name: "Grapple Hand", cyberpartType: "Cyberlimb Arm", install: "Clinic", description: "Requires a Cyberarm. User can fire grapple into any thick surface up to 30m/yds. Line supports twice the users weight, and has 10HP. User ignores movement penalties for climbing while using grapple. Retracting the grapple doesn't use an Action. While grappling, the user can't hold anything with the grapple hand. User can no longer use the Grab Action.", humanityLoss: 3, cost: 100, rarity: rarities.uncommon },
        { name: "Quick Change Mount", cyberpartType: "Cyberlimb Arm", install: "Clinic", description: "Requires Cyberarm. Allows for the attachement and detachment of cyberarms. Attaching new cyberarms adds to humanity loss, but attaching an arm the user is already familiar with does not. Detaching a cyberarm costs an action. Attaching a cyberarm does not.", humanityLoss: 7, cost: 100, rarity: rarities.uncommon },
        { name: "Scratchers", cyberpartType: "Cyberlimb Arm", install: "Mall", description: "Can be installed on a meat arm as the only cyberware on an arm. Converts fingernails into a Light Melee Weapon that passes all concealment checks. When used as a weapon, scratcher hands can't be used to hold anything.", humanityLoss: 2, cost: 100, rarity: rarities.uncommon },
        { name: "Subdermal Grip", cyberpartType: "Cyberlimb Arm", install: "Clinic", description: "Can be installed on a meat arm as the only cyberware on an arm. Requires a Neural Link and takes a Neuralware option slot. Allows the use of Smartguns.", humanityLoss: 3, cost: 100, rarity: rarities.uncommon },
        { name: "Tool Hand", cyberpartType: "Cyberlimb Arm", install: "Clinic", description: "Can be installed on a meat arm as the only cyberware on an arm. Converts the users fingers into a screwdriver, a wrench, a small drill, and various other tools.", humanityLoss: 3, cost: 100, rarity: rarities.uncommon },
        { name: "Cyberleg", cyberpartType: "Cyberlimb Leg", install: "Hospital", description: "Replaces a single Leg. Provides 3 option slots for cyberlimb and cyberleg options. Includes a standard foot that doesn't cost humanity, or takes up a cyberleg option slot.", humanityLoss: 3, cost: 100, rarity: rarities.uncommon },
        { name: "Standard Foot", cyberpartType: "Cyberlimb Leg", install: "Clinic", description: "Replaces a single Foot. Doesn't take up a Cyberleg option slot, or count towards the number of cyberware items on a meat leg.", humanityLoss: 2, cost: 100, rarity: rarities.uncommon },
    ];

    const rareItems: Cyberware[] = [
        { name: "Neural Link", cyberpartType: "Neuralware", install: "Clinic", description: "Required to use Neuralware, and Subdermal Grips. Provides 5 options slots for Neuralweare options.", humanityLoss: 7, cost: 500, rarity: rarities.rare },
        { name: "Braindance Recorder", cyberpartType: "Neuralware", install: "Clinic", description: "Requires Neural Link. Records braindance content into a Memory Chip or Agent. Must be viewed using a Braindance Viewer.", humanityLoss: 7, cost: 500, rarity: rarities.rare },
        { name: "Chipware Socket", cyberpartType: "Neuralware", install: "Clinic", description: "Requires Neural Link. Allows the installation of Chipware. Installing or Uninstalling Chipware costs an Action. Installing new Chipware adds to humanity loss, but installing Chipware the user is already familiar with does not. Only one piece of Chipware per Chipware Socket can be installed at a time. Multiple Sockets can be installed.", humanityLoss: 7, cost: 500, rarity: rarities.rare },
        { name: "Interface Plugs", cyberpartType: "Neuralware", install: "Clinic", description: "Requires Neural Link. Allows the use of Smart Guns, Cyberdecks, Heavy Machinery, and Drive Vehicles with no hands. Multiple installations allow the user to connect to multiple things at once.", humanityLoss: 7, cost: 500, rarity: rarities.rare },
        { name: "Kerenzikov", cyberpartType: "Neuralware", install: "Clinic", description: "Requires Neural Link. Adds +2 to Initiative. Can not be installed if the user already has a Sandevistan.", humanityLoss: 14, cost: 500, rarity: rarities.rare },
        { name: "Sandevistan", cyberpartType: "Neuralware", install: "Clinic", description: "Requires Neural Link. When activated as an action, the user add +3 to Initiative for one minute (20 turns in combat). Can not be installed if the user already has a Kerenzikov.", humanityLoss: 7, cost: 500, rarity: rarities.rare },
        { name: "Chemical Analyzer", cyberpartType: "Neuralware", install: "Self Install", description: "Requires a free Chipware Socket. Chipware that when installed, allows for the testing an analysing of chemical compositions against a chemical database.", humanityLoss: 3, cost: 500, rarity: rarities.rare },
        { name: "Skill Chip", cyberpartType: "Neuralware", install: "Self Install", description: "Requires a free Chipware Socket. Chipware that when installed, makes a specific non x2 cost skill that isn't a least level 3, level 3.", humanityLoss: 7, cost: 500, rarity: rarities.rare },
        { name: "Dartgun", cyberpartType: "Cyberoptics", install: "Clinic", description: "Requires a Cybereye. Costs 3 option slots. Conceals a Dartgun Exotic Weapon into the eye.", humanityLoss: 2, cost: 500, rarity: rarities.rare },
        { name: "Image Enhance", cyberpartType: "Cyberoptics", install: "Mall", description: "Requires two paired Cybereyes. Provides +2 to Perception, Lip Reading and Conceal/Reveal Object checks.", humanityLoss: 3, cost: 500, rarity: rarities.rare },
        { name: "Low Light / Infrared / UV", cyberpartType: "Cyberoptics", install: "Mall", description: "Requires two paired Cybereyes, and takes 2 option slots per cybereye. Provides immunity to darkness, smoke, and fog negative modifiers.", humanityLoss: 3, cost: 500, rarity: rarities.rare },
        { name: "MicroVideo", cyberpartType: "Cyberoptics", install: "Clinic", description: "Requires a Cybereye. Costs 2 option slots. Embeds a camera into the cybereye, which can record audio and video into a Memory Chip or Agent.", humanityLoss: 2, cost: 500, rarity: rarities.rare },
        { name: "Targeting Scope", cyberpartType: "Cyberoptics", install: "Clinic", description: "Requires a Cybereye. Adds +1 to Aimed Shots.", humanityLoss: 3, cost: 500, rarity: rarities.rare },
        { name: "TeleOptics", cyberpartType: "Cyberoptics", install: "Clinic", description: "Requires a Cybereye. Can see details up to 800m/yd away. Adds +1 to Aimed Shots against targets who further than 50/yds away.", humanityLoss: 3, cost: 500, rarity: rarities.rare },
        { name: "Cyberaudio Suite", cyberpartType: "Cyberaudio", install: "Clinic", description: "Contains 3 Cyberaudio option slots. Can only install 1 Cyberaudio Suite per character.", humanityLoss: 7, cost: 500, rarity: rarities.rare },
        { name: "Radar Detector", cyberpartType: "Cyberaudio", install: "Clinic", description: "Requires a Cyberaudio Suite. Beeps if active radar beam is within 100m/yds.", humanityLoss: 2, cost: 500, rarity: rarities.rare },
        { name: "AudioVox", cyberpartType: "Internal Body Cyberware", install: "Clinic", description: "Adds +2 to Acting and Play Instrument when singing.", humanityLoss: 3, cost: 500, rarity: rarities.rare },
        { name: "Enhanced Antibodies", cyberpartType: "Internal Body Cyberware", install: "Mall", description: "Folloing stabilization, the user heals double their BODY stat for each day spent resting.", humanityLoss: 2, cost: 500, rarity: rarities.rare },
        { name: "Vampyres", cyberpartType: "Internal Body Cyberware", install: "Clinic", description: "Converts teeth into Light Melee Weapon. Can be Concealed. Can add Poison or Biotoxin to attacks.", humanityLoss: 14, cost: 500, rarity: rarities.rare },
        { name: "Hidden Holster", cyberpartType: "External Body Cyberware", install: "Clinic", description: "Can store a concealable weapon inside the body.", humanityLoss: 7, cost: 500, rarity: rarities.rare },
        { name: "Skin Weave", cyberpartType: "External Body Cyberware", install: "Hospital", description: "The user's body and head is treated as armor, and has a stopping power of SP7. Whichever source of SP (Armor or Skin Weave) is highest in a lopcation will act as the SP in that location. All sources of SP in a location are destroyed at the same time. Repairs both head and body SP by 1 per day of rest.", humanityLoss: 7, cost: 500, rarity: rarities.rare },
        { name: "Realskinn Covering", cyberpartType: "Cyberlimbs", install: "Mall", description: "Requires a Cyberarm or Cyberleg. Artificial skin coating for Cyberlimb. Does not take an option slot.", humanityLoss: 0, cost: 500, rarity: rarities.rare },
        { name: "Cyberarm", cyberpartType: "Cyberlimb Arm", install: "Hospital", description: "Replaces a single arm. Provides 4 option slots. Comes with standard arm that doesn't cost Humanity or take up an option slot.", humanityLoss: 7, cost: 500, rarity: rarities.rare },
        { name: "Cyberdeck", cyberpartType: "Cyberlimb Arm", install: "Clinic", description: "Requires a Cyberarm. Costs 3 option slots. Installs a Cyberdeck into a Cyberarm.", humanityLoss: 3, cost: 500, rarity: rarities.rare },
        { name: "Medscanner", cyberpartType: "Cyberlimb Arm", install: "Clinic", description: "Requires a Cyberarm. Costs 2 option slots. Add +2 to First Aid and Paramedic checks.", humanityLoss: 7, cost: 500, rarity: rarities.rare },
        { name: "Popup Grenade Launcher", cyberpartType: "Cyberlimb Arm", install: "Clinic", description: "Requires a Cyberarm. Costs 2 option slots. Adds a single shot Grenade Launcher into a Cyberarm. Weapon is concealable.", humanityLoss: 7, cost: 500, rarity: rarities.rare },
        { name: "Popup Melee Weapon", cyberpartType: "Cyberlimb Arm", install: "Clinic", description: "Requires a Cyberarm. Costs 2 option slots. Adds any Light Medium or Heavy Melee Weapon into a Cyberarm Weapon is concealable.", humanityLoss: 7, cost: 500, rarity: rarities.rare },
        { name: "Popup Shield", cyberpartType: "Cyberlimb Arm", install: "Clinic", description: "Requires a Cyberarm. Costs 3 option slots. Builds a Bulletproof Shield into the Cyberarm. Can be concealed and replaced with at 0 HP.", humanityLoss: 7, cost: 500, rarity: rarities.rare },
        { name: "Popup Ranged Weapon", cyberpartType: "Cyberlimb Arm", install: "Clinic", description: "Requires a Cyberarm. Costs 2 option slots. Builds any one handed ranged weapon into the Cyberarm. Weapon is concealable.", humanityLoss: 7, cost: 500, rarity: rarities.rare },
        { name: "Rippers", cyberpartType: "Cyberlimb Arm", install: "Clinic", description: "Can be installed on a meat arm as the only cyberware on an arm. Converts a cyberarm into a oncealable Medium Melee Weapon.", humanityLoss: 3, cost: 500, rarity: rarities.rare },
        { name: "Shoulder Cam", cyberpartType: "Cyberlimb Arm", install: "Clinic", description: "Requires a Cyberarm. Costs 2 option slots. Installs a concealable video camera into the shoulder of a Cyberarm.", humanityLoss: 7, cost: 500, rarity: rarities.rare },
        { name: "Slice 'N Dice", cyberpartType: "Cyberlimb Arm", install: "Clinic", description: "Can be installed on a meat arm as the only cyberware on an arm. Embeds a concealable monofilament whip into the users thumb that acts as a Medium Melee Weapon.", humanityLoss: 3, cost: 500, rarity: rarities.rare },
        { name: "Techscanner", cyberpartType: "Cyberlimb Arm", install: "Clinic", description: "Requires a Cyberarm. Costs 2 option slots. Adds +2 to Basic Tech and Cybertech. Adds +1 to Electronics/Security Tech", humanityLoss: 7, cost: 500, rarity: rarities.rare },
        { name: "Wolvers", cyberpartType: "Cyberlimb Arm", install: "Clinic", description: "Can be installed on a meat arm as the only cyberware on an arm. Converts a cyberhand into a concealable Heavy Melee Weapon.", humanityLoss: 7, cost: 500, rarity: rarities.rare },
        { name: "Grip Foot", cyberpartType: "Cyberlimb Leg", install: "Clinic", description: "Requires 2 paired cyberlegs. Negates movement penalties while climbing.", humanityLoss: 3, cost: 500, rarity: rarities.rare },
        { name: "Jump Booster", cyberpartType: "Cyberlimb Leg", install: "Clinic", description: "Requires 2 paired cyberlegs. Costs 2 option slots. Negates movement penalties while jumping.", humanityLoss: 3, cost: 500, rarity: rarities.rare },
        { name: "Skate Foot", cyberpartType: "Cyberlimb Leg", install: "Clinic", description: "Requires 2 paired cyberlegs. Increases movement by 6m/yds (3 squares per turn in combat) when running.", humanityLoss: 3, cost: 500, rarity: rarities.rare },
        { name: "Talon Foot", cyberpartType: "Cyberlimb Leg", install: "Clinic", description: "Fills 1 Cyberleg option slot. Mounts a blade into the foot of a cyberleg that behaves as a concealable Light Melee Weapon", humanityLoss: 3, cost: 500, rarity: rarities.rare },
        { name: "Web Foot", cyberpartType: "Cyberlimb Leg", install: "Clinic", description: "Requires 2 paired cyberlegs. Negates movement penalties while swimming.", humanityLoss: 3, cost: 500, rarity: rarities.rare },
    ];

    const epicItems: Cyberware[] = [
        { name: "Skill Chip", cyberpartType: "Neuralware", install: "Self Install", description: "Requires a free Chipware Socket. Chipware that when installed, makes a specific x2 cost skill that isn't a least level 3, level 3.", humanityLoss: 7, cost: 1000, rarity: rarities.epic },
        { name: "Cybersnake", cyberpartType: "Internal Body Cyberware", install: "Hospital", description: "Concealable Very Heavy Melee Weapon embeded in the throat", humanityLoss: 14, cost: 1000, rarity: rarities.epic },
        { name: "Gills", cyberpartType: "Internal Body Cyberware", install: "Hospital", description: "Grants the ability to breath underwater", humanityLoss: 7, cost: 1000, rarity: rarities.epic },
        { name: "Grafted Muscle and Bone Lace", cyberpartType: "Internal Body Cyberware", install: "Hospital", description: "Increases the users BODY stat by 2. Updating the users HP, Wound Threshold and Death Save. Multiple installments stack, but can not raise the body stat above 10.", humanityLoss: 14, cost: 1000, rarity: rarities.epic },
        { name: "Independent Air Supply", cyberpartType: "Internal Body Cyberware", install: "Hospital", description: "Provides the user with 30 minutes of oxygen. Takes 1 hour to refill from an clean atmosphere.", humanityLoss: 2, cost: 1000, rarity: rarities.epic },
        { name: "Radar / Sonar Implant", cyberpartType: "Internal Body Cyberware", install: "Clinic", description: "Allows the user to scan thier surroundings within 50m/yds (25 squares in combat). Does not scan through cover.", humanityLoss: 7, cost: 1000, rarity: rarities.epic },
        { name: "Subdermal Armor", cyberpartType: "External Body Cyberware", install: "Hospital", description: "The user's body and head is treated as armor, and has a stopping power of SP11. Whichever source of SP (Armor or Skin Weave) is highest in a lopcation will act as the SP in that location. All sources of SP in a location are destroyed at the same time. Repairs both head and body SP by 1 per day of rest.", humanityLoss: 14, cost: 1000, rarity: rarities.epic },
        { name: "Hardened Shielding", cyberpartType: "Cyberlimbs", install: "Clinic", description: "Reuires Cyberarm or Cyberleg. Grants immunity to EMP effects. Such as Microwaver pulses or Non-Black ICE Program effects.", humanityLoss: 3, cost: 1000, rarity: rarities.epic },
        { name: "Superchrome Covering", cyberpartType: "Cyberlimbs", install: "Mall", description: "Coats the skin in a shiny metallic material. Adds a +2 to Wardrobe and Style skill checks.", humanityLoss: 0, cost: 1000, rarity: rarities.epic },
        { name: "Artificial Shoulder Mount", cyberpartType: "Borgware", install: "Hospital", description: "Allows the user to attach an extra 2 arms under the first set of arms. Can only be installed on the body once.", humanityLoss: 14, cost: 1000, rarity: rarities.epic },
        { name: "Implanted Linear From (Sigma)", cyberpartType: "Borgware", install: "Hospital", description: "Requires a BODY stat of 6, and 2 of the Grafted Muscle and Bone Lace Cyberwares. Increases the users BODY stat to 12, which updates the users HP and Death Save. The users BODY state can not be higher than 13.", humanityLoss: 14, cost: 1000, rarity: rarities.epic },
        { name: "MultiOptic Mount", cyberpartType: "Borgware", install: "Hospital", description: "Allows the user to add an addition 5 cybereyes into the mount, which must be bought and installed seperately. The MiltiOptic mount can only be installed on the body once.", humanityLoss: 14, cost: 1000, rarity: rarities.epic },
        { name: "Sensor Array", cyberpartType: "Borgware", install: "Clinic", description: "Requires a cyberaduio suite. Doesn't take up a cyberaudio option slot. Allows the user to add an additional 5 cyberaudio option slots.", humanityLoss: 14, cost: 1000, rarity: rarities.epic },
    ];

    const legendaryItems: Cyberware[] = [
        { name: "Implanted Linear Frame (Beta)", cyberpartType: "Borgware", install: "Hospital", description: "Requires a BODY stat of 8, and 2 of the Grafted Muscle and Bone Lace Cyberwares. Increases the users BODY stat to 14, which updates the users HP and Death Save. The users BODY state can not be higher than 15.", humanityLoss: 14, cost: 1000, rarity: rarities.legendary },
    ];

    return commonItems.concat(uncommonItems, rareItems, epicItems, legendaryItems);
}

function GetCyberdeckHardware(): CyberdeckHardware[] {
    return [
        { name: "Backup Drive", description: "Costs 2 Hardware option slots. While installed, A netrunners programs are 'saved' instead of being destroyed, and can be 'reloaded' into any free cyberdeck slots using a Meat Action. If removed from a cyberdeck, a Backup Drive erases all it's contents. Reloaded progarms are loaded with the same REZ they were saved in.", cost: 100, rarity: rarities.uncommon },
        { name: "DNA Lock", description: "Costs 2 Hardware option slots. Allows a Cyberdeck to only be accessed through a method of biometic verification or a DV 17 Electronics/Security Tech Check. The biometic verification can be any form of DNA: Thumbprint, iris scan, blood sample, etc.", cost: 100, rarity: rarities.uncommon },
        { name: "Hardened Circuitry", description: "Grants a cyberdeck immunity to disabling/EMP effects such as pulses or Non-Black ICE Program Effects.", cost: 100, rarity: rarities.uncommon },
        { name: "Insulated Wiring", description: "Grants a cyberdeck and the cyberdeck users clothes immunity to fire.", cost: 100, rarity: rarities.uncommon },
        { name: "KRASH Barrier", description: "Grants a netrunner immunity to being forcefully Jacked Out of a netrun.", cost: 100, rarity: rarities.uncommon },
        { name: "Range Upgrade", description: "Allows a cyberdeck to connect to an access point from up to 8m away.", cost: 100, rarity: rarities.uncommon },
    ];
}

function GetPrograms(): Program[] {
    const commonItems: Program[] = [
        { name: "Eraser", class: "Booster", attack: 0, defense: 0, rez: 7, effect: "Increases all Cloak Checks you make by +2 as long as this Program remains Rezzed.", cost: 20, rarity: rarities.common },
        { name: "See Ya", class: "Booster", attack: 0, defense: 0, rez: 7, effect: "Increases all Pathfinder Checks you make by +2 as long as this Program remains Rezzed.", cost: 20, rarity: rarities.common },
        { name: "Shield", class: "Defender", attack: 0, defense: 0, rez: 7, effect: "Stops the first successful Non-Black ICE Program Effect from dealing brain damage. After stopping this damage, the Shield Derezzes itself. Only 1 copy of this Program can be running at a time. Each copy of this Program can only be used once per Netrun.", cost: 20, rarity: rarities.common },

        { name: "Worm", class: "Booster", attack: 0, defense: 0, rez: 7, effect: "Increases all Backdoor Checks you make by +2 as long as this Program remains Rezzed.", cost: 50, rarity: rarities.common },
        { name: "Armor", class: "Defender", attack: 0, defense: 0, rez: 7, effect: "Lowers all brain damage you would receive by 4, as long as this Program remains Rezzed. Only 1 copy of this Program can be running at a time. Each copy of this Program can only be used once per Netrun.", cost: 50, rarity: rarities.common },
        { name: "Flak", class: "Defender", attack: 0, defense: 0, rez: 7, effect: "Reduces the ATK of all Non-Black ICE Attacker Programs run against you to 0 as long as this Program remains Rezzed. Only 1 copy of this Program can be running at a time. Each copy of this Program can only be used once per Netrun.", cost: 50, rarity: rarities.common },
        { name: "Banhammer", class: "Anti-Program Attacker", attack: 1, defense: 0, rez: 0, effect: "Does 3d6 REZ to a Non-Black ICE Program, or 2d6 REZ to a Black ICE Program.", cost: 50, rarity: rarities.common },
        { name: "Sword", class: "Anti-Program Attacker", attack: 1, defense: 0, rez: 0, effect: "Does 3d6 REZ to a Black ICE Program, or 2d6 REZ to a Non-Black ICE Program.", cost: 50, rarity: rarities.common },
        { name: "Vrizzbolt", class: "Anti-Personnel Attacker", attack: 1, defense: 0, rez: 0, effect: "Does 1d6 Damage direct to a Netrunner's brain and lowers the amount of total NET Actions the Netrunner can accomplish on their next Turn by 1 (minimum 2).", cost: 50, rarity: rarities.common },
    ];

    const uncommonItems: Program[] = [
        { name: "Speedy Gonzalvez", class: "Booster", attack: 0, defense: 0, rez: 7, effect: "Increases your Speed by +2 as long as this Program remains Rezzed. ", cost: 100, rarity: rarities.uncommon },
        { name: "DeskKRASH", class: "Anti-Personnel Attacker", attack: 0, defense: 0, rez: 0, effect: "Enemy Netrunner is forcibly and unsafely Jacked Out of the Architecture, suffering the effect of all Rezzed enemy Black ICE they've encountered in the Architecture as they leave.", cost: 100, rarity: rarities.uncommon },
        { name: "Hellbolt", class: "Anti-Personnel Attacker", attack: 2, defense: 0, rez: 0, effect: "Does 2d6 Damage direct to the enemy Netrunner's brain. Unless insulated, their Cyberdeck catches fire along with their clothing. Until they spend a Meat Action to put themselves out, they take 2 damage to their HP whenever they end their Turn. Multiple instances of this effect cannot stack.", cost: 100, rarity: rarities.uncommon },
        { name: "Nervescrub", class: "Anti-Personnel Attacker", attack: 0, defense: 0, rez: 0, effect: "Enemy Netrunner's INT, REF, and DEX are each lowered by 1d6 for the next hour (minimum 1). The effects are largely psychosomatic and leave no permanent effects.", cost: 100, rarity: rarities.uncommon },
        { name: "Posion Flatline", class: "Anti-Personnel Attacker", attack: 0, defense: 0, rez: 0, effect: "Destroys a single Non-Black ICE Program installed on the Netrunner target's Cyberdeck at random.", cost: 100, rarity: rarities.uncommon },
        { name: "Superglue", class: "Anti-Personnel Attacker", attack: 2, defense: 0, rez: 0, effect: "Enemy Netrunner cannot progress deeper into the Architecture or Jack Out safely for 1d6 Rounds (enemy Netrunner can still perform an unsafe Jack Out, though). Each copy of this Program can only be used once per Netrun.", cost: 100, rarity: rarities.uncommon },
    ];

    return commonItems.concat(uncommonItems);
}

function GetBlackICE(): BlackICE[] {
    const commonItems: BlackICE[] = [
        { name: "Raven", class: "Anti-Personnel Black ICE", perception: 6, speed: 4, attack: 4, defense: 2, rez: 15, effect: "Derezzes a single Defender Program the enemy Netrunner has Rezzed at random, then deals 1d6 damage direct to the Netrunner's brain.", cost: 50, rarity: rarities.common },
        { name: "Wisp", class: "Anti-Personnel Black ICE", perception: 4, speed: 4, attack: 4, defense: 2, rez: 15, effect: "Does 1d6 damage direct to the enemy Netrunner's brain and lowers the amount of total NET Actions the Netrunner can accomplish on their next Turn by 1 (minimum 2).", cost: 50, rarity: rarities.common },
    ];

    const uncommonItems: BlackICE[] = [
        { name: "Asp", class: "Anti-Personnel Black ICE", perception: 4, speed: 6, attack: 2, defense: 2, rez: 15, effect: "Destroys a single Program installed on the enemy Netrunner's Cyberdeck at random.", cost: 100, rarity: rarities.uncommon },
        { name: "Scorpion", class: "Anti-Personnel Black ICE", perception: 2, speed: 6, attack: 2, defense: 2, rez: 15, effect: "Enemy Netrunner's MOVE is lowered by 1d6 for the next hour (minimum 1). The effects are largely psychosomatic and leave no permanent effects.", cost: 100, rarity: rarities.uncommon },
    ];

    const rareItems: BlackICE[] = [
        { name: "Hellhound", class: "Anti-Personnel Black ICE", perception: 6, speed: 6, attack: 6, defense: 2, rez: 20, effect: "Does 2d6 damage direct to the Netrunner's brain. Unless insulated, their Cyberdeck catches fire along with their clothing. Until they spend a Meat Action to put themselves out, they take 2 damage to their HP whenever they end their Turn. Multiple instances of this effect cannot stack.", cost: 500, rarity: rarities.rare },
        { name: "Liche", class: "Anti-Personnel Black ICE", perception: 8, speed: 2, attack: 6, defense: 2, rez: 25, effect: "Enemy Netrunner's INT, REF, and DEX are each lowered by 1d6 for the next hour (minimum 1). The effects are largely psychosomatic and leave no permanent effects.", cost: 500, rarity: rarities.rare },
        { name: "Skunk", class: "Anti-Personnel Black ICE", perception: 2, speed: 4, attack: 4, defense: 2, rez: 10, effect: "Until this Program is Derezzed, an enemy Netrunner hit by this Effect makes all Slide Checks at a -2. Each Skunk Black ICE can only affect a single Netrunner at a time, but the effects of multiple Skunks can stack.", cost: 500, rarity: rarities.rare },
        { name: "Killer", class: "Anti-Personnel Black ICE", perception: 4, speed: 8, attack: 6, defense: 2, rez: 20, effect: "Deals 4d6 damage to a Program. If this damage would be enough to Derezz the Program, it is instead Destroyed.", cost: 500, rarity: rarities.rare },
    ];

    const epicItems: BlackICE[] = [
        { name: "Giant", class: "Anti-Personnel Black ICE", perception: 2, speed: 2, attack: 8, defense: 4, rez: 25, effect: "Does 3d6 damage direct to an enemy Netrunner's brain. The Netrunner is forcibly and unsafely Jacked Out of their current Netrun. They suffer the effect of all Rezzed enemy Black ICE they've encountered in the Architecture as they leave, not including the Giant.", cost: 1000, rarity: rarities.epic },
        { name: "Kraken", class: "Anti-Personnel Black ICE", perception: 6, speed: 2, attack: 8, defense: 4, rez: 30, effect: "Does 3d6 damage direct to an enemy Netrunner's brain. Until the end of the Netrunner's next Turn, the Netrunner cannot progress deeper into the Architecture or Jack Out safely (The Netrunner can still perform an unsafe Jack Out).", cost: 1000, rarity: rarities.epic },
        { name: "Dragon", class: "Anti-Personnel Black ICE", perception: 6, speed: 4, attack: 6, defense: 6, rez: 30, effect: "Deals 6d6 damage to a Program. If this damage would be enough to Derezz the Program, it is instead Destroyed.", cost: 1000, rarity: rarities.epic },
        { name: "Sabertooth", class: "Anti-Personnel Black ICE", perception: 8, speed: 6, attack: 6, defense: 2, rez: 25, effect: "Deals 6d6 damage to a Program. If this damage would be enough to Derezz the Program, it is instead Destroyed.", cost: 1000, rarity: rarities.epic },
    ];

    return commonItems.concat(uncommonItems, rareItems, epicItems);
}

function GetNETArchitectureFloors(): NETArchitectureFloors[] {
    const epicItems: NETArchitectureFloors[] = [
        { numberOfFloors: "3 to 6", maxControlNodes: "2", portable: true, cost: 1000, rarity: rarities.epic }
    ];

    const legendaryItems: NETArchitectureFloors[] = [
        { numberOfFloors: "6 to 12", maxControlNodes: "3", portable: false, cost: 5000, rarity: rarities.legendary }
    ];

    const superItems: NETArchitectureFloors[] = [
        { numberOfFloors: "13 to 18", maxControlNodes: "unlimited", portable: false, cost: 10000, rarity: rarities.super }
    ];

    return epicItems.concat(legendaryItems, superItems);
}

function GetNETArchitectureFeatures(): NETArchitectureFeature[] {
    const rareItems: NETArchitectureFeature[] = [
        { netrunnerDVToBeatFeature: 6, cost: 500, rarity: rarities.rare }
    ];

    const epicItems: NETArchitectureFeature[] = [
        { netrunnerDVToBeatFeature: 8, cost: 1000, rarity: rarities.epic }
    ];

    const legendaryItems: NETArchitectureFeature[] = [
        { netrunnerDVToBeatFeature: 10, cost: 5000, rarity: rarities.legendary }
    ];

    const superItems: NETArchitectureFeature[] = [
        { netrunnerDVToBeatFeature: 12, cost: 10000, rarity: rarities.super }
    ];

    return rareItems.concat(epicItems, legendaryItems, superItems);
}

function GetNETArchitectureDemons(): NETArchitectureDemon[] {
    const epicItems: NETArchitectureDemon[] = [
        { name: "Imp", rez: 15, interface: 3, netActions: 2, combatNumber: 14, cost: 1000, rarity: rarities.epic }
    ];

    const legendaryItems: NETArchitectureDemon[] = [
        { name: "Efreet", rez: 25, interface: 4, netActions: 4, combatNumber: 14, cost: 5000, rarity: rarities.legendary }
    ];

    const superItems: NETArchitectureDemon[] = [
        { name: "Balron", rez: 30, interface: 7, netActions: 4, combatNumber: 14, cost: 10000, rarity: rarities.super }
    ];

    return epicItems.concat(legendaryItems, superItems);
}