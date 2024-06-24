
const HOJA = SpreadsheetApp.openById('1EBe1Ow2GtPeK4_qK4GGNjv2ylqKeUpNNKH_z_iSGEH4').getActiveSheet();
function doGet(datos)
{
    //insertarContactoGs(datos.parameter.nombreContacto,datos.parameter.correoContacto);
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda GAS');  
}

function doPost(datos)
{
 //   insertarContactoGs(datos.parameter.nombreContacto,datos.parameter.correoContacto);
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda GAS');
}

function obtenerDatosHtml(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos()
{   
    return HOJA.getDataRange().getValues();
}

function insertarContactoGs (nombre,apellidos,correo,telefono)
{
    HOJA.appendRow([nombre,apellidos,correo,telefono]);
}
function borrarContactoGs(fila)
{
   HOJA.deleteRow(fila);
}