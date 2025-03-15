function conexion() {
    return SpreadsheetApp.openById(env_.ID_DATABASE);
}


function getSheets(NAME) {
    
    return conexion().getSheetByName(NAME);
}

function getDatos(NAME) {
    return getSheets(NAME).getDataRange().getDisplayValues();
}

