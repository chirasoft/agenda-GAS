function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda GAS');
  
}
function obtenerDatosHtml(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}
function obtenerContactos(){
    let hoja = SpreadsheetApp.openById('1EBe1Ow2GtPeK4_qK4GGNjv2ylqKeUpNNKH_z_iSGEH4').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    Logger.log(datos);
    return datos;
}