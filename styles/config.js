/* ------------------------------------------------------------------- */
/* Sheet ID
/* Your sheet ID
/* ------------------------------------------------------------------- */
let sheetID = "1VyY57-VYntqhYeGbn8kQhVyX5CJi6KfhW8Fp6Ukj03M";


/* ------------------------------------------------------------------- */
/* All sheet pages
/* ------------------------------------------------------------------- */
let sheetPages = {

    masterlist: "masterlist",
    masterlistLog: "masterlist log",
    petsMasterlist: "pets masterlist",
    petsLog: "pets log",
    items: "items",
    traits: "traits",
    faq: "faq",
    staff: "mods",

}


/* ------------------------------------------------------------------- */
/* All Site Options
/* ------------------------------------------------------------------- */
let options = {


    /* Index
    /* --------------------------------------------------------------- */
    index: {

        promptSheetPage: sheetPages.prompts,
        numOfPrompts: 3,

        staffSheetPage: sheetPages.staff,
        numOfStaff: 8,

        masterlistSheetPage: sheetPages.masterlist,
        numOfDesigns: 4,
    
    },


    /* Masterlist
    /* --------------------------------------------------------------- */
    masterlist: {

        sheetPage: sheetPages.masterlist,
        logSheetPage: sheetPages.masterlistLog,

        itemAmount: 12,
        itemOrder: "desc",

        filterColumn: 'Design Type',
        searchFilterParams: ['ID', 'Owner', 'Designer', 'Artist'],
        fauxFolderColumn: 'Species',

    },


    /* Item Catalogue
    /* --------------------------------------------------------------- */
    items: {

        sheetPage: sheetPages.items,
    
        itemAmount: 24,
        itemOrder: "asc",
    
        filterColumn: 'Rarity',
        searchFilterParams: ['Item'],
        fauxFolderColumn: 'Type',
    
    },


    /* Pets Masterlist
    /* --------------------------------------------------------------- */
    petsMasterlist: {
        
        sheetPage: sheetPages.petsMasterlist,
        logSheetPage: sheetPages.petsLog,

        itemAmount: 12,
        itemOrder: "desc",

        filterColumn: 'Customisation',
        searchFilterParams: ['ID', 'Owner', 'Designer', 'Artist'],
        fauxFolderColumn: 'Species',
    
    },


    /* Traits
    /* --------------------------------------------------------------- */
    traits: {
    
        sheetPage: sheetPages.traits,

        itemAmount: 24,
        itemOrder: "asc",

        filterColumn: 'Rarity',
        searchFilterParams: ['Trait'],
        fauxFolderColumn: 'Type',
    
    },


    /* Staff
    /* --------------------------------------------------------------- */
    staff: {
    
        sheetPage: sheetPages.staff,
    
    },


    /* FAQ
    /* --------------------------------------------------------------- */
    faq: {
    
        sheetPage: sheetPages.faq,
    
        itemAmount: 24,
        itemOrder: "desc",
    
        searchFilterParams: ['Tags'],
    
    },


}
