

function mostrar(){
    document.getElementById('tabla').style.display = 'block';
}

function ocultar(){
    document.getElementById('tabla').style.display = 'none';
}

document.getElementById('Descargar_Excel').addEventListener('click', function(){
    var table2excel = new Table2Excel();
    table2excel.export(document.querySelectorAll("ContactenosTabla"));
})