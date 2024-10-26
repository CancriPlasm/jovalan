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
    sharedMasterlist: "shared masterlist"
    sharedMasterlistLog: "shared masterlist log"
    petsLog: "pets log",
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

        sharedMasterlistSheetPage: sheetPages.sharedMasterlist,
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


    /* Shared Masterlist
    /* --------------------------------------------------------------- */
    sharedMasterlist: {

        sheetPage: sheetPages.sharedMasterlist,
        logSheetPage: sheetPages.sharedMasterlistLog,

        itemAmount: 12,
        itemOrder: "desc",

        filterColumn: 'Design Type',
        searchFilterParams: ['ID', 'Owner', 'Designer', 'Artist'],
        fauxFolderColumn: 'Species',

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
