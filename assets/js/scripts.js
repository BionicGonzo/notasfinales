/* RAMO 1: HTML */

/* Entrada */
/* Definición de variables para almacenar valores numéricos */
var nota1_ramo1 = prompt("Digite la Nota 1 de HTML");
nota1_ramo1 = parseFloat(nota1_ramo1);
var nota2_ramo1 = prompt("Digite la Nota 2 de HTML");
nota2_ramo1 = parseFloat(nota2_ramo1);
var nota3_ramo1 = prompt("Digite la Nota 3 de HTML");
nota3_ramo1 = parseFloat(nota3_ramo1);

/* Proceso */
/* Operación y transformación de datos de entrada para producir salidas */
var resultadoprom_ramo1 = (nota1_ramo1+nota2_ramo1+nota3_ramo1)/3;
resultadoprom_ramo1 = parseFloat(resultadoprom_ramo1);

/* Salida */
/* Definición de variables que referencian las celdas del HTML */
var celdanota1html = document.getElementById("nota1_ramo1");
var celdanota2html = document.getElementById("nota2_ramo1");
var celdanota3html = document.getElementById("nota3_ramo1");
var celdapromediohtml = document.getElementById("promedio_ramo1");

/* Traspasamos  los valores de JavaScript en las variables al documento HTML*/
celdanota1html.innerHTML = nota1_ramo1;
celdanota2html.innerHTML = nota2_ramo1;
celdanota3html.innerHTML = nota3_ramo1;
celdapromediohtml.innerHTML = resultadoprom_ramo1;

/* |-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-| */

/* RAMO 2: CSS */

/* Entrada */
/* Definición de variables para almacenar valores numéricos */
var nota1_ramo2 = prompt("Digite la Nota 1 de CSS");
nota1_ramo2 = parseFloat(nota1_ramo2);
var nota2_ramo2 = prompt("Digite la Nota 2 de CSS");
nota2_ramo2 = parseFloat(nota2_ramo2);
var nota3_ramo2 = prompt("Digite la Nota 3 de CSS");
nota3_ramo2 = parseFloat(nota3_ramo2);

/* Proceso */
/* Operación y transformación de datos de entrada para producir salidas */
var resultadoprom_ramo2 = (nota1_ramo2+nota2_ramo2+nota3_ramo2)/3;
resultadoprom_ramo2 = parseFloat(resultadoprom_ramo2);

/* Salida */
/* Definición de variables que referencian las celdas del HTML */
var celdanota1css = document.getElementById("nota1_ramo2");
var celdanota2css = document.getElementById("nota2_ramo2");
var celdanota3css = document.getElementById("nota3_ramo2");
var celdapromediocss = document.getElementById("promedio_ramo2");

/* Traspasamos  los valores de JavaScript en las variables al documento HTML*/
celdanota1css.innerHTML = nota1_ramo2;
celdanota2css.innerHTML = nota2_ramo2;
celdanota3css.innerHTML = nota3_ramo2;
celdapromediocss.innerHTML = resultadoprom_ramo2;

/* |-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-| */

/* RAMO 3: JAVASCRIPT */

/* Entrada */
/* Definición de variables para almacenar valores numéricos */
var nota1_ramo3 = prompt("Digite la Nota 1 de JavaScript");
nota1_ramo3 = parseFloat(nota1_ramo3);
var nota2_ramo3 = prompt("Digite la Nota 2 de JavaScript");
nota2_ramo3 = parseFloat(nota2_ramo3);
var nota3_ramo3 = prompt("Digite la Nota 3 de JavaScript");
nota3_ramo3 = parseFloat(nota3_ramo3);

/* Proceso */
/* Operación y transformación de datos de entrada para producir salidas */
var resultadoprom_ramo3 = (nota1_ramo3+nota2_ramo3+nota3_ramo3)/3;
resultadoprom_ramo3 = parseFloat(resultadoprom_ramo3);

/* Salida */
/* Definición de variables que referencian las celdas del HTML */
var celdanota1js = document.getElementById("nota1_ramo3");
var celdanota2js = document.getElementById("nota2_ramo3");
var celdanota3js = document.getElementById("nota3_ramo3");
var celdapromediojs = document.getElementById("promedio_ramo3");

/* Traspasamos  los valores de JavaScript en las variables al documento HTML*/
celdanota1js.innerHTML = nota1_ramo3;
celdanota2js.innerHTML = nota2_ramo3;
celdanota3js.innerHTML = nota3_ramo3;
celdapromediojs.innerHTML = resultadoprom_ramo3;