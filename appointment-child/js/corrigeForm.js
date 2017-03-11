//wp-content/themes/appointment-child/teste.php
function corrige() {
    document.getElementById("wdform_6_element3").name = "name";
    document.getElementById("wdform_2_element3").name = "email";
    document.getElementById("wdform_5_element3").name = "message";
    document.getElementById("form3").action = "http://estacionamentopatioconfins.com.br/estacionamento-aeroporto-confins-telefone/envio4.php";
    }
function modal(){
for (i = 0; i < 6; i++) { 
    text = ".modal-p img:eq(" + i + ")";

	(function(j){
jQuery(text).click(function(){

    jQuery('#pc_Modal').carousel(j);
});
})(i);
}}
window.onload = function () { corrige(); modal();};